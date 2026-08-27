import { useEffect, useState } from "react";
import type { TripPreferences } from "@/types";

/**
 * Tiny client-side store for the trip preferences the user submits on the
 * planner page. No backend / auth in this prototype — just module state plus
 * localStorage so a page refresh keeps the results.
 */

const STORAGE_KEY = "yatraai.trip-preferences";

export const defaultPreferences: TripPreferences = {
  destinationRegion: "Madhya Pradesh",
  durationDays: 3,
  budget: 15000,
  travelGroup: "Couple",
  interests: ["Nature", "Heritage"],
  crowdPreference: "Low",
  travelStyle: "Balanced",
};

let current: TripPreferences | null = null;
const listeners = new Set<() => void>();

function readStorage(): TripPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as TripPreferences) : null;
  } catch {
    return null;
  }
}

export function setTripPreferences(prefs: TripPreferences) {
  current = prefs;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* ignore storage failures in the prototype */
    }
  }
  listeners.forEach((listener) => listener());
}

/** Returns the saved preferences, or null until the client has hydrated. */
export function useTripPreferences(): TripPreferences | null {
  const [value, setValue] = useState<TripPreferences | null>(null);

  useEffect(() => {
    if (!current) current = readStorage();
    setValue(current);

    const listener = () => setValue(current);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return value;
}
