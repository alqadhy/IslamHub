export interface CollectionAPI {
  id: number;
  bookName: string;
  writerName: string;
  aboutWriter: unknown;
  writerDeath: string;
  bookSlug: string;
  hadiths_count?: string;
  chapters_count?: string;
}

export interface HadithAPI {
  id: number;
  hadithNumber: string;
  englishNarrator: string;
  hadithEnglish: string;
  hadithUrdu: string;
  urduNarrator: string;
  hadithArabic: string;
  headingArabic: string;
  headingUrdu: string;
  headingEnglish: string;
  chapterId: string;
  bookSlug: string;
  volume: string;
  status: string;
  book: CollectionAPI;
  chapter: {
    id: number;
    chapterNumber: string;
    chapterEnglish: string;
    chapterUrdu: string;
    chapterArabic: string;
    bookSlug: string;
  };
}

export interface PaginationLinkAPI {
  url: string;
  label: string;
  page: number;
  active: boolean;
}

export interface HadithPaginationAPI {
  current_page: number;
  data: HadithAPI[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLinkAPI[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
