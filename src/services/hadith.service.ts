// API Client
import { APIClient } from "./api-client";

// Types
import {
  Collection,
  HadithPagination,
  Hadith,
  CollectionAPI,
  HadithAPI,
  SearchResults,
  PaginationLinkAPI,
} from "@/types";

// Utils
import {
  generateRandomHadithCollection,
  generateRandomHadithNumber,
} from "@/utils/random";

class HadithService {
  private apiClient: APIClient;
  private apiKey: string;

  constructor(baseURL: string, apiKey: string) {
    this.apiClient = new APIClient(baseURL);
    this.apiKey = apiKey;
  }

  async getRandomHadith(): Promise<Hadith> {
    const collection = generateRandomHadithCollection();
    const hadithNumber = generateRandomHadithNumber(collection);

    const response = await this.apiClient.get(
      `/hadiths?apiKey=${this.apiKey}&book=${collection}&hadithNumber=${hadithNumber}`,
    );
    const responseObj = response.hadiths.data[0];

    return {
      id: responseObj.id,
      hadithNumber: responseObj.hadithNumber,
      collection: responseObj.book.bookSlug,
      arabicText: responseObj.hadithArabic,
      englishText: responseObj.hadithEnglish,
      status: responseObj.status,
    };
  }

  async getAllCollections(): Promise<Collection[]> {
    const response = await this.apiClient.get(`/books?apiKey=${this.apiKey}`);

    return response.books.map((collection: CollectionAPI) => ({
      id: collection.id,
      bookName: collection.bookName,
      bookSlug: collection.bookSlug,
    }));
  }

  async getHadithsFromCollection(
    collection: string,
    page: number = 1,
  ): Promise<HadithPagination> {
    const response = await this.apiClient.get(
      `/hadiths?apiKey=${this.apiKey}&book=${collection}&page=${page}`,
    );
    const responseObj = response.hadiths;

    return {
      currentPage: responseObj.current_page,
      hadiths: responseObj.data.map((hadith: HadithAPI) => ({
        id: hadith.id,
        hadithNumber: hadith.hadithNumber,
        collection: hadith.book.bookSlug,
        arabicText: hadith.hadithArabic,
        englishText: hadith.hadithEnglish,
        status: hadith.status,
      })),
      firstPageUrl: responseObj.first_page_url,
      from: responseObj.from,
      lastPage: responseObj.last_page,
      lastPageUrl: responseObj.last_page_url,
      links: responseObj.links.map((link: PaginationLinkAPI) => ({
        url: link.url,
        label: link.label,
        page: link.page,
        active: link.active,
      })),
      nextPageUrl: responseObj.next_page_url,
      path: responseObj.path,
      perPage: responseObj.per_page,
      prevPageUrl: responseObj.prev_page_url,
      to: responseObj.to,
      total: responseObj.total,
    };
  }

  async searchHadiths(
    lang: "ar" | "en",
    query: string,
  ): Promise<SearchResults<HadithPagination>> {
    const param = lang === "ar" ? "hadithArabic" : "hadithEnglish";
    const response = await this.apiClient.get(
      `/hadiths?apiKey=${this.apiKey}&${param}=${encodeURIComponent(query)}`,
    );
    const responseObj = response.hadiths;

    return {
      count: responseObj.total,
      results: {
        currentPage: responseObj.current_page,
        hadiths: responseObj.data.map((hadith: HadithAPI) => ({
          id: hadith.id,
          hadithNumber: hadith.hadithNumber,
          collection: hadith.book.bookSlug,
          arabicText: hadith.hadithArabic,
          englishText: hadith.hadithEnglish,
          status: hadith.status,
        })),
        firstPageUrl: responseObj.first_page_url,
        from: responseObj.from,
        lastPage: responseObj.last_page,
        lastPageUrl: responseObj.last_page_url,
        links: responseObj.links.map((link: PaginationLinkAPI) => ({
          url: link.url,
          label: link.label,
          page: link.page,
          active: link.active,
        })),
        nextPageUrl: responseObj.next_page_url,
        path: responseObj.path,
        perPage: responseObj.per_page,
        prevPageUrl: responseObj.prev_page_url,
        to: responseObj.to,
        total: responseObj.total,
      },
    };
  }
}

export const hadithService = new HadithService(
  process.env.NEXT_PUBLIC_HADITH_API_BASE_URL || "",
  process.env.HADITH_API_KEY || "",
);
