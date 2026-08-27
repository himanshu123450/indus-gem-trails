import type { HiddenGem } from "@/types";

import bhimbetka from "@/assets/gem-bhimbetka.jpg";
import bhedaghat from "@/assets/gem-bhedaghat.jpg";
import bateshwar from "@/assets/gem-bateshwar.jpg";
import tamia from "@/assets/dest-tamia.jpg";
import chanderi from "@/assets/dest-chanderi.jpg";

/** Lesser-known alternatives to crowded destinations (mock data). */
export const hiddenGems: HiddenGem[] = [
  {
    id: "bhimbetka-trails",
    name: "Bhimbetka Outer Trails",
    state: "Madhya Pradesh",
    image: bhimbetka,
    distanceKm: 46,
    crowdLevel: "Low",
    estimatedCost: 1400,
    sustainabilityScore: 90,
    whyRecommended:
      "Similar rock-art and prehistoric heritage experience with significantly lower expected crowd levels.",
    comparedTo: "Alternative to the main Bhopal monument circuit",
  },
  {
    id: "bhedaghat-quiet-bank",
    name: "Bhedaghat Quiet Bank",
    state: "Madhya Pradesh",
    image: bhedaghat,
    distanceKm: 128,
    crowdLevel: "Low",
    estimatedCost: 2100,
    sustainabilityScore: 82,
    whyRecommended:
      "River-gorge scenery comparable to peak-season viewpoints, with boats operated by local cooperatives on a calmer stretch.",
    comparedTo: "Alternative to weekend marble-rocks crowds",
  },
  {
    id: "bateshwar-temples",
    name: "Bateshwar Temple Cluster",
    state: "Madhya Pradesh",
    image: bateshwar,
    distanceKm: 89,
    crowdLevel: "Low",
    estimatedCost: 1200,
    sustainabilityScore: 88,
    whyRecommended:
      "Over 200 restored stone temples with the same architectural depth as major heritage sites and a fraction of the visitors.",
    comparedTo: "Alternative to headline temple towns",
  },
  {
    id: "patalkot-tamia",
    name: "Patalkot Valley Rim",
    state: "Madhya Pradesh",
    image: tamia,
    distanceKm: 64,
    crowdLevel: "Low",
    estimatedCost: 1800,
    sustainabilityScore: 95,
    whyRecommended:
      "Deep-forest valley walks with community eco stays, spreading visitor spending into villages with almost no tourism traffic.",
    comparedTo: "Alternative to busy hill-station viewpoints",
  },
  {
    id: "chanderi-weaver-lanes",
    name: "Chanderi Weaver Lanes",
    state: "Madhya Pradesh",
    image: chanderi,
    distanceKm: 152,
    crowdLevel: "Low",
    estimatedCost: 1600,
    sustainabilityScore: 93,
    whyRecommended:
      "A living-craft walk where nearly all of the visit cost reaches weaver households directly.",
    comparedTo: "Alternative to retail craft emporiums",
  },
];
