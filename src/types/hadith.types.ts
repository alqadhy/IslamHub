export interface Collection {
  id: string;
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
