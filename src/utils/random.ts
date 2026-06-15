export function generateRandomAyahNumber(): number {
  const TOTAL_AYAHS = 6236;
  return Math.floor(Math.random() * TOTAL_AYAHS) + 1;
}
