export interface SearchResults<T> {
  count: number;
  results: T;
}

export interface AyahResult {
  id: number;
  surahNumber: number;
  numberInSurah: number;
  surahArabicName: string;
  surahEnglishName: string;
  text: string;
}
