import type {
  Destination,
  Interest,
  Recommendation,
  TripPreferences,
} from "@/types";

/**
 * Transparent mock scoring service.
 *
 * This is deliberately simple, rule-based arithmetic — NOT a trained machine
 * learning model. UI components never compute scores themselves, so this file
 * can later be swapped for a real model/API without touching components.
 */

/** Maps a user interest onto the matching destination score field. */
const INTEREST_FIELDS: Record<Interest, keyof Destination> = {
  Nature: "natureScore",
  Heritage: "heritageScore",
  Adventure: "adventureScore",
  Culture: "cultureScore",
  Food: "foodScore",
  Wildlife: "wildlifeScore",
  Photography: "photographyScore",
};

/** Relative weight of each factor. Weights sum to 1. */
export const SCORING_WEIGHTS = {
  interests: 0.4,
  budget: 0.2,
  crowd: 0.2,
  sustainability: 0.2,
} as const;

const CROWD_TARGET: Record<TripPreferences["crowdPreference"], number> = {
  Low: 95,
  Medium: 65,
  High: 35,
};

/** Average of the destination scores matching the selected interests. */
function interestFit(destination: Destination, interests: Interest[]): number {
  if (interests.length === 0) return 60;
  const total = interests.reduce((sum, interest) => {
    const value = destination[INTEREST_FIELDS[interest]];
    return sum + (typeof value === "number" ? value : 0);
  }, 0);
  return total / interests.length;
}

/**
 * 100 when the destination's estimated cost fits the budget comfortably,
 * decreasing as it goes over budget or is far under a premium expectation.
 */
function budgetFit(destination: Destination, prefs: TripPreferences): number {
  const ratio = destination.estimatedBudget / Math.max(prefs.budget, 1);
  if (ratio <= 1) {
    // Premium travellers prefer using more of their budget.
    const styleBonus = prefs.travelStyle === "Premium" ? ratio * 30 : (1 - ratio) * 20;
    return clamp(78 + styleBonus);
  }
  return clamp(100 - (ratio - 1) * 120);
}

/** How closely the destination's calmness matches the crowd preference. */
function crowdFit(destination: Destination, prefs: TripPreferences): number {
  const target = CROWD_TARGET[prefs.crowdPreference];
  return clamp(100 - Math.abs(destination.crowdScore - target));
}

function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function buildReasons(
  destination: Destination,
  prefs: TripPreferences,
  scores: { interests: number; budget: number; crowd: number; sustainability: number },
): string[] {
  const reasons: string[] = [];

  const topInterest = [...prefs.interests].sort(
    (a, b) =>
      Number(destination[INTEREST_FIELDS[b]] ?? 0) -
      Number(destination[INTEREST_FIELDS[a]] ?? 0),
  )[0];

  if (topInterest) {
    reasons.push(
      `Strong fit for your ${topInterest.toLowerCase()} interest (${destination[INTEREST_FIELDS[topInterest]]}/100 on our demo index).`,
    );
  }
  if (scores.crowd >= 75) {
    reasons.push(
      `${destination.crowdLevel.toLowerCase()} expected crowd levels match your "${prefs.crowdPreference}" crowd preference.`,
    );
  }
  if (destination.estimatedBudget <= prefs.budget) {
    reasons.push(
      `Estimated ₹${destination.estimatedBudget.toLocaleString("en-IN")} for ${prefs.durationDays} day${prefs.durationDays > 1 ? "s" : ""} stays inside your ₹${prefs.budget.toLocaleString("en-IN")} budget.`,
    );
  } else {
    reasons.push(
      `Slightly above budget at about ₹${destination.estimatedBudget.toLocaleString("en-IN")}, but scores well on your other preferences.`,
    );
  }
  if (destination.sustainabilityScore >= 85) {
    reasons.push(
      `High sustainability score (${destination.sustainabilityScore}/100) — visits are largely handled by local hosts and guides.`,
    );
  }
  reasons.push(`Well suited to ${prefs.travelGroup.toLowerCase()} travel and a ${prefs.travelStyle.toLowerCase()} style.`);

  return reasons;
}

/** Scores one destination against the user's preferences. */
export function scoreDestination(
  destination: Destination,
  prefs: TripPreferences,
): Recommendation {
  const scores = {
    interests: clamp(interestFit(destination, prefs.interests)),
    budget: budgetFit(destination, prefs),
    crowd: crowdFit(destination, prefs),
    sustainability: destination.sustainabilityScore,
  };

  const matchPercent = clamp(
    scores.interests * SCORING_WEIGHTS.interests +
      scores.budget * SCORING_WEIGHTS.budget +
      scores.crowd * SCORING_WEIGHTS.crowd +
      scores.sustainability * SCORING_WEIGHTS.sustainability,
  );

  return {
    destination,
    matchPercent,
    breakdown: [
      { label: "Interest fit", value: scores.interests },
      { label: "Budget fit", value: scores.budget },
      { label: "Crowd fit", value: scores.crowd },
      { label: "Sustainability", value: scores.sustainability },
    ],
    reasons: buildReasons(destination, prefs, scores),
  };
}

/** Ranks the whole catalogue, best match first. */
export function recommendDestinations(
  destinations: Destination[],
  prefs: TripPreferences,
): Recommendation[] {
  return destinations
    .map((destination) => scoreDestination(destination, prefs))
    .sort((a, b) => b.matchPercent - a.matchPercent);
}
