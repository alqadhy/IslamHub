// Constants
import { HADITH_COLLECTIONS, HADITH_COLLECTION_LIMITS } from "@/constants";

export function generateRandomAyahNumber(): number {
  const TOTAL_AYAHS = 6236;
  return Math.floor(Math.random() * TOTAL_AYAHS) + 1;
}

export function generateRandomHadithCollection(): string {
  const index = Math.floor(Math.random() * HADITH_COLLECTIONS.length);
  return HADITH_COLLECTIONS[index];
}

export function generateRandomHadithNumber(collection: string): number {
  const maxLimit = HADITH_COLLECTION_LIMITS[collection];
  return Math.floor(Math.random() * maxLimit) + 1;
}
