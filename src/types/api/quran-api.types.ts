export interface SurahAPI {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface EditionAPI {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  type: string;
  format?: string;
  direction?: string;
}

export interface AyahAPI {
  number: number;
  text: string;
  edition?: EditionAPI;
  surah?: SurahAPI;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface AyahAudioAPI {
  number: number;
  audio: string;
  audioSecondary: string[];
  text: string;
  edition: EditionAPI;
  surah: SurahAPI;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface SurahAudioAPI {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
  ayahs: AyahAudioAPI[];
  edition: EditionAPI;
}

export interface AyahResultAPI {
  number: number;
  text: string;
  edition: EditionAPI;
  surah: SurahAPI;
  numberInSurah: number;
}
