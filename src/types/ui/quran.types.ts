export interface Surah {
  number: number;
  arabicName: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: "Meccan" | "Medinan";
}

export interface Ayah {
  id: number;
  surahNumber: number;
  surahArabicName: string;
  surahEnglishName: string;
  numberInSurah: number;
  arabicText: string;
  englishText: string;
  juz: number;
  page: number;
  isSajda: boolean;
}

export interface AyahAudio {
  id: number;
  surahArabicName: string;
  surahEnglishName: string;
  audio: string;
}

export interface SurahDetails {
  surah: Surah;
  ayahs: Ayah[];
}
