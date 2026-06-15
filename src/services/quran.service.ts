// API Client
import { APIClient } from "./api-client";

// Types
import {
  Ayah,
  AyahAudio,
  AyahResult,
  SearchResults,
  Surah,
  SurahDetails,
  SurahAPI,
  AyahAudioAPI,
  AyahResultAPI,
  AyahAPI,
} from "@/types";

// Utils
import { generateRandomAyahNumber } from "../utils/random";

class QuranService {
  private apiClient: APIClient;

  constructor(baseURL: string) {
    this.apiClient = new APIClient(baseURL);
  }

  async getRandomAyah(): Promise<Ayah> {
    const ayahNumber = generateRandomAyahNumber();
    const response = await this.apiClient.get(
      `/ayah/${ayahNumber}/editions/quran-uthmani,en.sahih`,
    );
    const [responseArabicObj, responseEnglishObj] = response.data;

    return {
      id: responseArabicObj.number,
      surahNumber: responseArabicObj.surah.number,
      surahArabicName: responseArabicObj.surah.name,
      surahEnglishName: responseArabicObj.surah.englishName,
      numberInSurah: responseArabicObj.numberInSurah,
      arabicText: responseArabicObj.text,
      englishText: responseEnglishObj.text,
      juz: responseArabicObj.juz,
      page: responseArabicObj.page,
      isSajda: responseArabicObj.sajda,
    };
  }

  async getAllSurahs(): Promise<Surah[]> {
    const response = await this.apiClient.get("/surah");

    return response.data.map((surah: SurahAPI) => ({
      number: surah.number,
      arabicName: surah.name,
      englishName: surah.englishName,
      englishNameTranslation: surah.englishNameTranslation,
      numberOfAyahs: surah.numberOfAyahs,
      revelationType: surah.revelationType,
    }));
  }

  async getFullSurah(surahNumber: number): Promise<SurahDetails> {
    const response = await this.apiClient.get(
      `/surah/${surahNumber}/editions/quran-uthmani,en.sahih`,
    );
    const [responseArabicObj, responseEnglishObj] = response.data;

    return {
      surah: {
        number: responseArabicObj.number,
        arabicName: responseArabicObj.name,
        englishName: responseArabicObj.englishName,
        englishNameTranslation: responseArabicObj.englishNameTranslation,
        numberOfAyahs: responseArabicObj.numberOfAyahs,
        revelationType: responseArabicObj.revelationType,
      },
      ayahs: responseArabicObj.ayahs.map((ayah: AyahAPI, i: number) => ({
        id: ayah.number,
        surahNumber: responseArabicObj.number,
        surahArabicName: responseArabicObj.name,
        surahEnglishName: responseArabicObj.englishName,
        numberInSurah: ayah.numberInSurah,
        arabicText: ayah.text,
        englishText: responseEnglishObj.ayahs[i].text,
        juz: ayah.juz,
        page: ayah.page,
        isSajda: ayah.sajda,
      })),
    };
  }

  async getAyahAudio(ayahNumber: number): Promise<AyahAudio> {
    const response = await this.apiClient.get(
      `/ayah/${ayahNumber}/ar.minshawi`,
    );
    const responseObj = response.data;

    return {
      id: responseObj.number,
      surahArabicName: responseObj.surah.name,
      surahEnglishName: responseObj.surah.englishName,
      audio: responseObj.audio,
    };
  }

  async getSurahAudio(surahNumber: number): Promise<AyahAudio[]> {
    const response = await this.apiClient.get(
      `/surah/${surahNumber}/ar.minshawi`,
    );

    return response.data.ayahs.map((ayah: AyahAudioAPI) => ({
      id: ayah.number,
      surahArabicName: response.data.name,
      surahEnglishName: response.data.englishName,
      audio: ayah.audio,
    }));
  }

  async searchAyahs(
    lang: "ar" | "en",
    query: string,
  ): Promise<SearchResults<AyahResult[]>> {
    const endpoint = lang === "ar" ? "quran-simple-clean" : "en.sahih";
    const response = await this.apiClient.get(
      `/search/${encodeURIComponent(query)}/all/${endpoint}`,
    );
    const responseObj = response.data;

    return {
      count: responseObj.count,
      results: responseObj.matches.map((ayah: AyahResultAPI) => ({
        id: ayah.number,
        surahNumber: ayah.surah.number,
        numberInSurah: ayah.numberInSurah,
        surahArabicName: ayah.surah.name,
        surahEnglishName: ayah.surah.englishName,
        text: ayah.text,
      })),
    };
  }
}

export const quranService = new QuranService(
  process.env.NEXT_PUBLIC_QURAN_API_BASE_URL || "",
);
