import FiltersBar from "@/components/FiltersBar/FiltersBar";
import MaterialsList from "@/components/MaterialsList/MaterialsList";

export default function Home() {
  return (
    <main className="w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-10 gap-10 mx-auto flex w-full max-w-330 flex-col">
        <FiltersBar />
        <MaterialsList />
      </div>
    </main>
  );
}