import FiltersBar from "@/components/FiltersBar/FiltersBar";
import HeroGallery from "@/components/HeroGallery/HeroGallery";
import MaterialsList from "@/components/MaterialsList/MaterialsList";

export default function Home() {
  return (
    <main className="w-full">
      {/* <HeroGallery /> */}

      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-10">
        <FiltersBar />
        <MaterialsList />
      </div>
    </main>
  );
}