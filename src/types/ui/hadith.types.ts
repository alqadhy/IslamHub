export interface Collection {
  id: number;
  bookName: string;
  bookSlug: string;
}

export interface Hadith {
  id: number;
  hadithNumber: string;
  collection: Collection["bookSlug"];
  arabicText: string;
  englishText: string;
  status: string;
}

export interface PaginationLink {
  url: string;
  label: string;
  page: number;
  active: boolean;
}

export interface HadithPagination {
  currentPage: number;
  hadiths: Hadith[];
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: PaginationLink[];
  nextPageUrl: string;
  path: string;
  perPage: number;
  prevPageUrl: string;
  to: number;
  total: number;
}
