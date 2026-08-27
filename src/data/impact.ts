import type { SustainabilityFactor } from "@/types";

/** Demo platform metrics — prototype numbers, not real-world statistics. */
export const platformMetrics = [
  { label: "Hidden destinations discovered", value: "148", note: "demo catalogue entries" },
  { label: "Local experiences promoted", value: "312", note: "mock host listings" },
  { label: "Sustainable trips planned", value: "1,240", note: "simulated planning sessions" },
];

export const sustainabilityHighlights = [
  { label: "Avg. trip sustainability score", value: "82 / 100" },
  { label: "Trips routed to low-crowd sites", value: "68%" },
  { label: "Spending mapped to local hosts", value: "74%" },
];

/** Example sustainability breakdown shown on the Impact dashboard. */
export const sampleSustainabilityFactors: SustainabilityFactor[] = [
  {
    label: "Local Economy",
    value: 92,
    note: "Most planned spending goes to homestays, guides and community hosts.",
  },
  {
    label: "Low Crowd Destination",
    value: 88,
    note: "Selected sites sit well below their estimated visitor pressure limits.",
  },
  {
    label: "Public Transport",
    value: 76,
    note: "Rail plus shared local transport for the majority of the route.",
  },
  {
    label: "Eco-friendly Stay",
    value: 84,
    note: "Small-scale stays with on-site waste and water practices.",
  },
  {
    label: "Travel Efficiency",
    value: 79,
    note: "Clustered stops reduce repeated back-and-forth travel.",
  },
];

export const impactEstimates = [
  {
    label: "Money directed toward local businesses",
    value: "₹11,400",
    note: "estimated share of trip spend reaching local hosts",
  },
  {
    label: "Estimated travel emissions",
    value: "68 kg CO₂e",
    note: "rough estimate from route distance and transport mix",
  },
  { label: "Local experiences selected", value: "4", note: "community-hosted activities" },
  {
    label: "Crowd pressure avoided",
    value: "~1,900 visitors",
    note: "modelled shift away from over-visited sites",
  },
];
