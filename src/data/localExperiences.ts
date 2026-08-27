import type { LocalExperience } from "@/types";

import cooking from "@/assets/exp-cooking.jpg";
import heritageWalk from "@/assets/exp-heritage-walk.jpg";
import handicraft from "@/assets/exp-handicraft.jpg";
import tribalArt from "@/assets/exp-tribal-art.jpg";
import village from "@/assets/exp-village.jpg";

/** Community-hosted experiences (mock data). */
export const localExperiences: LocalExperience[] = [
  {
    id: "traditional-cooking",
    title: "Traditional Cooking Experience",
    host: "Sunita Yadav",
    location: "Orchha, Madhya Pradesh",
    price: 850,
    durationHours: 3,
    category: "Food",
    image: cooking,
    description:
      "Cook a Bundelkhandi thali on a clay chulha with a host family, using produce from their own kitchen garden.",
  },
  {
    id: "heritage-walk",
    title: "Local Heritage Walk",
    host: "Ramesh Bundela",
    location: "Mandu, Madhya Pradesh",
    price: 500,
    durationHours: 2,
    category: "Heritage",
    image: heritageWalk,
    description:
      "A slow walk through lesser-visited stepwells and courtyards, narrated by a guide who grew up in the town.",
  },
  {
    id: "handicraft-workshop",
    title: "Handicraft Workshop",
    host: "Chanderi Weavers Collective",
    location: "Chanderi, Madhya Pradesh",
    price: 1200,
    durationHours: 4,
    category: "Craft",
    image: handicraft,
    description:
      "Sit at a working handloom, learn warp and weft basics and finish a small woven sample of your own.",
  },
  {
    id: "tribal-art",
    title: "Tribal Art Experience",
    host: "Mangru Shyam",
    location: "Patangarh, Madhya Pradesh",
    price: 950,
    durationHours: 3,
    category: "Art",
    image: tribalArt,
    description:
      "Learn Gond storytelling motifs from a practising artist and paint a panel using natural pigments.",
  },
  {
    id: "village-culture",
    title: "Village Cultural Experience",
    host: "Tamia Eco Homestay Group",
    location: "Tamia, Madhya Pradesh",
    price: 700,
    durationHours: 3,
    category: "Culture",
    image: village,
    description:
      "An evening of folk music, dhol rhythms and shared dinner hosted by a village homestay collective.",
  },
];
