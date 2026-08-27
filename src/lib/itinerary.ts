import type { Destination, Itinerary, ItineraryDay } from "@/types";

/**
 * Mock itinerary builder. Composes a day-by-day plan from destination data
 * using simple templates — no ML, no external API.
 */

interface Slot {
  time: string;
  name: (destination: Destination, day: number) => string;
  category: string;
  cost: number;
  description: string;
}

const DAY_TEMPLATES: { title: string; morning: Slot; afternoon: Slot; evening: Slot }[] = [
  {
    title: "Arrive & settle in slowly",
    morning: {
      time: "08:30",
      name: (d) => `Rail + shared transfer to ${d.name}`,
      category: "Travel",
      cost: 1200,
      description: "Train to the nearest railhead, then a shared local vehicle instead of a private cab.",
    },
    afternoon: {
      time: "13:30",
      name: () => "Home-cooked lunch at a family homestay",
      category: "Food",
      cost: 350,
      description: "Regional thali cooked by your host family, using produce sourced from the village.",
    },
    evening: {
      time: "17:30",
      name: (d) => d.highlights[1] ?? `Sunset viewpoint near ${d.name}`,
      category: "Nature",
      cost: 150,
      description: "An easy first-evening walk to orient yourself and catch the light with a local guide.",
    },
  },
  {
    title: "The main experience day",
    morning: {
      time: "07:00",
      name: (d) => d.highlights[0] ?? `Guided walk in ${d.name}`,
      category: "Heritage",
      cost: 450,
      description: "Start early to avoid the busiest hours and to walk with a community-certified guide.",
    },
    afternoon: {
      time: "14:00",
      name: () => "Community craft or cooking session",
      category: "Culture",
      cost: 850,
      description: "A hands-on session hosted by local artisans; the fee goes directly to the host household.",
    },
    evening: {
      time: "18:30",
      name: () => "Folk music and shared dinner",
      category: "Culture",
      cost: 700,
      description: "Evening of local music and food at the homestay courtyard.",
    },
  },
  {
    title: "Slow morning, unhurried return",
    morning: {
      time: "06:30",
      name: (d) => d.highlights[2] ?? `Forest trail around ${d.name}`,
      category: "Nature",
      cost: 300,
      description: "Sunrise trail on a low-traffic route with a village guide.",
    },
    afternoon: {
      time: "12:30",
      name: () => "Local market and craft shopping",
      category: "Shopping",
      cost: 900,
      description: "Buy directly from weavers and small producers rather than roadside resellers.",
    },
    evening: {
      time: "16:30",
      name: () => "Shared transfer to railhead & return",
      category: "Travel",
      cost: 1200,
      description: "Return leg by shared transport and rail to keep the trip's emissions low.",
    },
  },
  {
    title: "Deeper into the surroundings",
    morning: {
      time: "07:30",
      name: (d) => `Day trip to a lesser-visited site near ${d.name}`,
      category: "Adventure",
      cost: 700,
      description: "A nearby site chosen for low visitor pressure and easy access.",
    },
    afternoon: {
      time: "13:00",
      name: () => "Village walk with a local host",
      category: "Community",
      cost: 400,
      description: "Meet farmers and artisans; understand how tourism income is shared locally.",
    },
    evening: {
      time: "18:00",
      name: () => "Stargazing with tea at the stay",
      category: "Nature",
      cost: 100,
      description: "Low-light skies away from town make for a quiet, zero-impact evening.",
    },
  },
];

function buildDay(destination: Destination, dayNumber: number): ItineraryDay {
  const template = DAY_TEMPLATES[(dayNumber - 1) % DAY_TEMPLATES.length];
  const fill = (slot: Slot) => ({
    time: slot.time,
    name: slot.name(destination, dayNumber),
    category: slot.category,
    cost: slot.cost,
    description: slot.description,
  });

  return {
    day: dayNumber,
    title: template.title,
    morning: fill(template.morning),
    afternoon: fill(template.afternoon),
    evening: fill(template.evening),
  };
}

/** Builds a `days`-long itinerary for a destination. */
export function buildItinerary(destination: Destination, days = 3): Itinerary {
  const dayCount = Math.max(1, Math.min(days, 7));
  const itineraryDays = Array.from({ length: dayCount }, (_, index) =>
    buildDay(destination, index + 1),
  );

  const totalBudget = itineraryDays.reduce(
    (sum, day) => sum + day.morning.cost + day.afternoon.cost + day.evening.cost,
    0,
  );

  return {
    destinationId: destination.id,
    days: itineraryDays,
    totalBudget,
    travelDistanceKm: destination.distanceFromHubKm * 2 + dayCount * 25,
    sustainabilityScore: destination.sustainabilityScore,
  };
}
