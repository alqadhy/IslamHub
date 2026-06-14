# IslamHub | Version #1

## Project Overview

**IslamHub** is an islamic platform that allows the user to:

- Read and play Quran
- Browse and read Hadith from authentic collections
- See prayer times
- Find Qibla direction
- Save Surahs, Ayahs, and Hadiths to favorites
- Search for Ayahs or Hadiths
- Toggle light / dark mode
- Toggle AR / EN language

---

## Features List

**Global Settings**

- Theme toggle
- Language change

**HomePage `/`**

- Ayah of the day
- Hadith of the day

**QuranPage `/quran`**

- Surahs list
- Search Surah

**SurahPage `/quran/{surahNumber}`**

- Read Surah
- Play full Surah
- Play a specific Ayah
- Save full Surah to favorites
- Save specific Ayah to favorites

**HadithPage `/hadith`**

- List Hadiths collections

**CollectionPage `/hadith/{collectionID}`**

- List all Hadiths from the current collection
- Pagination pages and arrows
- Search Hadiths from the current collection

**PrayerTimesPage `/prayer-times`**

- Get user's location from the IP
- Update and change your location
- Prayer times list
- Next prayer highlighting
- Find Qibla direction

**SearchPage `/search`**

- Search for Ayahs and Hadiths
- Pagination pages and arrows

**FavoritesPage `/favorites`**

- View saved Surahs, Ayahs, and Hadiths
- Filtration bar to only show saved Surahs, Ayahs, or Hadiths

---

## Routes

| Route Path               | Page Component  |
| ------------------------ | --------------- |
| `/`                      | HomePage        |
| `/quran`                 | QuranPage       |
| `/quran/{surahNumber}`   | SurahPage       |
| `/hadith`                | HadithPage      |
| `/hadith/{collectionID}` | CollectionPage  |
| `/prayer-times`          | PrayerTimesPage |
| `/search`                | SearchPage      |
| `/favorites`             | FavoritesPage   |

---

## Folders Structure

src
├── app
├── components
├── constants
├── services
├── hooks
├── types
├── utils
├── styles
└── store

---

## Components Tree

**Layout Components**

RootLayout
├── Header
└── Footer

QuranLayout
└── SurahsList

**Pages Components**

HomePage
├── HeroSection
├── AyahOfDaySection
├── QuickAccessSection
└── HadithOfDaySection

QuranPage
└── PageHeading

SurahPage
├── BackToBtn
├── SurahOverviewSection
└── AyahsGrid

HadithPage
├── PageHeading
└── CollectionsGrid

CollectionPage
├── BackToBtn
└── CollectionOverview
└── SearchBarSection
└── HadithsGrid
└── Paginations

PrayerTimesPage
├── PageHeading
├── UpdateLocationSection
├── PrayerTimesTable
└── FindQiblaDirectionSection

SearchPage
├── PageHeading
├── SearchBar
└── SearchResultsSection

FavoritesPage
├── PageHeading
├── FiltrationBar
└── SavedItemsGrid

**Reusable Components**

ReusableUIComponents
├── MainBtn
├── SecondaryBtn
├── PageHeading
├── SearchBar
├── MainContainer
└── MainGrid

---

## Types

- Surah
- SurahDetails
- Ayah
- Collection
- Hadith
- PrayerTimes
- Favorite

---

## States

Global
├── theme
├── language
└── favorites

Page
└── searchKeyword

HomePage
├── ayahOfDay
└── hadithOfDay

SurahPage
├── currentSurah
├── isPlaying
└── isSurahSaved

HadithPage
└── currentCollection

CollectionPage
└── currentPaginationPage

PrayerTimesPage
├── currentLocation
├── prayerTimes
└── qiblaDirection

FavoritesPage
└── displayableFavorites

SearchPage
├── searchResults
└── displayableResults

---

## API Architecture

#### API Service Layer

services
├── quran.service.ts
├── hadith.service.ts
└── prayer.service.ts

#### Quran API

Base URL: `https://api.alquran.cloud/v1`

Endpoints:-

| Endpoint                                               | Response                                              |
| ------------------------------------------------------ | ----------------------------------------------------- |
| `/ayah/{ayahNumber}/editions/quran-uthmani,en.sahih`   | GET a specific Ayah in AR and EN                      |
| `/surah`                                               | GET all Surahs                                        |
| `/surah/{surahNumber}/editions/quran-uthmani,en.sahih` | GET all Ayahs of a specific Surah in AR and EN        |
| `/surah/{surahNumber}/ar.minshawi`                     | GET all playable Ayahs audio URLs of a specific Surah |
| `/search/{querey}/all/quran-simple-clean`              | GET all matching Ayahs in AR                          |
| `/search/{querey}/all/en.sahih`                        | GET all matching Ayahs in EN                          |

#### Hadith API

Base URL: `https://www.hadithapi.com/api/`
API Key: `$2y$10$0fK8GxfQWlnnrxU1UBEyeVGkmmXQlJXYU9ndROylSdLTKOfErS`

Endpoints:-

| Endpoint                                                 | Response                                         |
| -------------------------------------------------------- | ------------------------------------------------ |
| `/hadiths?book={collection}&hadithNumber={hadithNumber}` | GET a specific Hadith from a specific Collection |
| `/books`                                                 | GET all Hadith collections                       |
| `/hadiths?book={collection}`                             | GET all Hadiths of a specific collection         |
| `/hadiths?hadithArabic={querey}`                         | GET all matching Hadiths in AR                   |
| `/hadiths?hadithEnglish={querey}`                        | GET all matching Hadiths in EN                   |

#### Prayer Times API

Base URL: `https://api.aladhan.com/v1`

Endpoints:-

| Endpoint                                       | Response                 |
| ---------------------------------------------- | ------------------------ |
| `/timingsByCity?city={city}&country={country}` | GET today's prayer times |
| `/qibla/{latitude}/{longitude}`                | GET the Qibla direction  |

---

## UI Development Plan

1. Global Layout
   - Header
   - Footer
2. HomePage
3. QuranPage
4. SurahPage
5. HadithPage
6. CollectionPage
7. PrayerTimesPage
8. SearchPage
9. FavoritesPage
10. Dark Mode
11. AR/EN Language Switch
