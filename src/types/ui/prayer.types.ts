export interface Location {
  city: string;
  country: string;
}

export interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export interface HijriDate {
  date: string;
  year: string;
  month: {
    number: number;
    arabicMonth: string;
    englishMonth: string;
    days: number;
  };
  day: string;
}

export interface Qibla {
  latitude: number;
  longitude: number;
  direction: number;
}
