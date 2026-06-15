import { quranService } from "@/services/quran.service";

async function HomePage() {
  const randomAyah = await quranService.getRandomAyah();
  const allSurahs = await quranService.getAllSurahs();
  const fullSurah = await quranService.getFullSurah(3);
  const ayahAudio = await quranService.getAyahAudio(54);
  const surahAudio = await quranService.getSurahAudio(15);
  const arSearch = await quranService.searchAyahs("ar", "الله أكبر");
  const enSearch = await quranService.searchAyahs("en", "allah is the");

  console.log(fullSurah);

  return (
    <div className="test">
      <h1 className="text-primary font-inter">HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores
        hic cumque sapiente perspiciatis rerum assumenda sunt illum vero
        incidunt aliquid necessitatibus itaque placeat doloribus laborum, eos
        eius impedit tempora?
      </p>
    </div>
  );
}

export default HomePage;
