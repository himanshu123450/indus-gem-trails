/**
 * Shared TypeScript types for the YatraAI prototype.
 * Keep every shape used by data files, scoring logic and UI here.
 */

export type Interest =
  | "Nature"
  | "Heritage"
  | "Adventure"
  | "Culture"
  | "Food"
  | "Wildlife"
  | "Photography";

export type TravelGroup = "Solo" | "Couple" | "Family" | "Friends";
export type CrowdPreference = "Low" | "Medium" | "High";
export type TravelStyle = "Budget" | "Balanced" | "Premium";
export type CrowdLevel = "Low" | "Medium" | "High";

/** All scores are 0-100 so the scoring function stays easy to read. */
export interface Destination {
  id: string;
  name: string;
  state: string;
  image: string;
  tagline: string;
  description: string;
  distanceFromHubKm: number;
  estimatedBudget: number;
  crowdLevel: CrowdLevel;
  highlights: string[];
  natureScore: number;
  heritageScore: number;
  adventureScore: number;
  cultureScore: number;
  foodScore: number;
  wildlifeScore: number;
  /** Higher = calmer, less crowded. */
  crowdScore: number;
  /** Higher = more affordable. */
  budgetScore: number;
  sustainabilityScore: number;
  photographyScore: number;
}

export interface TripPreferences {
  destinationRegion: string;
  durationDays: number;
  budget: number;
  travelGroup: TravelGroup;
  interests: Interest[];
  crowdPreference: CrowdPreference;
  travelStyle: TravelStyle;
}

export interface Recommendation {
  destination: Destination;
  /** 0-100 match percentage produced by the mock scoring function. */
  matchPercent: number;
  /** Transparent per-factor contributions, useful for explaining results. */
  breakdown: { label: string; value: number }[];
  reasons: string[];
}

export interface ItineraryActivity {
  time: string;
  name: string;
  category: string;
  cost: number;
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  morning: ItineraryActivity;
  afternoon: ItineraryActivity;
  evening: ItineraryActivity;
}

export interface Itinerary {
  destinationId: string;
  days: ItineraryDay[];
  totalBudget: number;
  travelDistanceKm: number;
  sustainabilityScore: number;
}

export interface HiddenGem {
  id: string;
  name: string;
  state: string;
  image: string;
  distanceKm: number;
  crowdLevel: CrowdLevel;
  estimatedCost: number;
  sustainabilityScore: number;
  whyRecommended: string;
  comparedTo: string;
}

export interface LocalExperience {
  id: string;
  title: string;
  host: string;
  location: string;
  price: number;
  durationHours: number;
  category: string;
  image: string;
  description: string;
}

export interface SustainabilityFactor {
  label: string;
  value: number;
  note: string;
}
