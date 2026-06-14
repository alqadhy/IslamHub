# IslamHub Architecture Desicions

## State Management Strategy

We are going to use **Redux** and **Redux toolkit** for global state management like `theme`, `language`, and `favorites`.

For local and page states like all **Surahs** or **Hadith collections**, we'll be fetching the required data from APIs and use TanStack to manage them.

In the case of `favorites`, we are going to store them in the localstorage while still using **Redux**.

---

## Data Fetching Strategy

**HomePage**
├── Ayah of Day
└── Hadith of Day

Fetched On:

- Initial page load

**QuranPage**
└── All Surahs

Fetched On:

- Initial page load

**SurahPage**
└── All Ayahs of the selected Surah

Fetched On:

- Surah is selected

**HadithPage**
└── All Hadith collections

Fetched On:

- Initial page load

**CollectionPage**
└── All Hadiths of the selected collections

Fetched On:

- Initial page load
- Pagination links are clicked

**PrayerTimesPage**
└── Prayer Times

Fetched On:

- Initial page load
- Location is updated

**SearchPage**
└── All search results (Ayahs and Hadiths)

Fetched On:

- Search button clicked

**FavoritesPage**
└── All saved items

Loaded On:

- Initial page load

---

## Route Layout Strategy

app
├── loading.tsx
├── error.tsx
├── layout.tsx
├── page.tsx
├── quran
│ ├── layout.tsx
│ ├── page.tsx
│ └── [surahNumber]
│ └── page.tsx
├── hadith
│ ├── page.tsx
│ └── [collectionID]
│ └── page.tsx
├── prayer-times
│ └── page.tsx
├── search
│ └── page.tsx
└── favorites
└── page.tsx

---

## Technologies and Libraries

**Technologies**

- React.js 19
- Next.js 16
- TypeScript
- Tailwind.css v4

**Libraries**

- TanStack Query
- Redux Toolkit
- Lucide React
- Sonner
- Date-fns
