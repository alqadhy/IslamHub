// API Client
import { APIClient } from "./api-client";

// Types
import {
  Location,
  PrayerTimes,
  HijriDate,
  Qibla,
  PrayerTimesAPI,
} from "@/types";

class PrayerService {
  private apiClient: APIClient;

  constructor(baseUrl: string) {
    this.apiClient = new APIClient(baseUrl);
  }

  private async getFullResponse(location: Location): Promise<PrayerTimesAPI> {
    const response = await this.apiClient.get(
      `/timingsByCity?city=${encodeURIComponent(location.city)}&country=${encodeURIComponent(location.country)}`,
    );

    return response.data;
  }

  async getPrayerTimes(location: Location): Promise<PrayerTimes> {
    const response = await this.getFullResponse(location);
    const responseObj = response.timings;

    return {
      fajr: responseObj.Fajr,
      dhuhr: responseObj.Dhuhr,
      asr: responseObj.Asr,
      maghrib: responseObj.Maghrib,
      isha: responseObj.Isha,
    };
  }

  async getHijriDate(location: Location): Promise<HijriDate> {
    const response = await this.getFullResponse(location);
    const responseObj = response.date.hijri;

    return {
      date: responseObj.date,
      year: responseObj.year,
      month: {
        number: responseObj.month.number,
        arabicMonth: responseObj.month.ar,
        englishMonth: responseObj.month.en,
        days: responseObj.month.days,
      },
      day: responseObj.day,
    };
  }

  async getQiblaDirection(location: Location): Promise<Qibla> {
    const response = await this.getFullResponse(location);
    const { latitude, longitude } = response.meta.method.location;

    const qibla = await this.apiClient.get(`/qibla/${latitude}/${longitude}`);
    const responseObj = qibla.data;

    return {
      latitude: responseObj.latitude,
      longitude: responseObj.longitude,
      direction: responseObj.direction,
    };
  }
}

export const prayerService = new PrayerService(
  process.env.NEXT_PUBLIC_PRAYER_API_BASE_URL || "",
);
