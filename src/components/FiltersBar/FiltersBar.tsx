"use client";

import { useState, useRef } from "react";
import "./FiltersBar.css";
import FilterSelect, { type FilterOption } from "../FilterSelect/FilterSelect";

interface FilterItem {
  name: string;
  label: string;
  defaultValue: string;
  options: FilterOption[];
}

const filters: FilterItem[] = [
  {
    name: "institution",
    label: "Заклад",
    defaultValue: "all",
    options: [
      { label: "Усі заклади", value: "all" },
      { label: "Університет", value: "university" },
      { label: "Інститут", value: "institute" },
      { label: "Коледж", value: "college" },
      { label: "Онлайн-платформа", value: "online-platform" },
    ],
  },
  {
    name: "direction",
    label: "Напрям",
    defaultValue: "all",
    options: [
      { label: "Усі напрями", value: "all" },
      { label: "Гуманітарні науки", value: "humanities" },
      { label: "Соціальні науки", value: "social-sciences" },
      { label: "Право", value: "law" },
      { label: "Економіка", value: "economics" },
      { label: "Інформаційні технології", value: "it" },
    ],
  },
  {
    name: "discipline",
    label: "Дисципліна",
    defaultValue: "all",
    options: [
      { label: "Усі дисципліни", value: "all" },
      { label: "Історія України", value: "history-of-ukraine" },
      { label: "Політологія", value: "political-science" },
      { label: "Соціологія", value: "sociology" },
      { label: "Філософія", value: "philosophy" },
      { label: "Міжнародні відносини", value: "international-relations" },
    ],
  },
  {
    name: "language",
    label: "Мова",
    defaultValue: "all",
    options: [
      { label: "Усі мови", value: "all" },
      { label: "Українська", value: "uk" },
      { label: "Англійська", value: "en" },
      { label: "Польська", value: "pl" },
      { label: "Словацька", value: "sk" },
    ],
  },
];

const getDefaultFilters = () =>
  filters.reduce<Record<string, string>>((acc, filter) => {
    acc[filter.name] = filter.defaultValue;
    return acc;
  }, {});

const ClearFiltersButton = ({ onClick }: { onClick: () => void }) => {
  const [phase, setPhase] = useState<"idle" | "spinning" | "done">("idle");
  const [rippleKey, setRippleKey] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    if (phase !== "idle") return;

    setPhase("spinning");
    setRippleKey((k) => k + 1);
    onClick();

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setPhase("done");
      timeoutRef.current = setTimeout(() => setPhase("idle"), 900);
    }, 600);
  };

  const isSpinning = phase === "spinning";

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isSpinning}
      className={`clear-btn h-14 sm:w-auto sm:min-w-70 px-6 gap-3 text-white font-body font-semibold sm:text-[18px] flex w-full shrink-0 items-center justify-center rounded-[10px] bg-[#BA1A1A] text-[16px] ${phase}`}
    >
      {isSpinning && <span className="ripple" key={rippleKey} />}

      <span className="icon-wrap">
        <svg className="icon-funnel" width="21" height="21" viewBox="0 0 24 24" fill="none">
          <path d="M4 5H20L14 12V18L10 20V12L4 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M17 17L21 21M21 17L17 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <svg className="icon-spinner" width="21" height="21" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
          <path d="M12 3a9 9 0 0 1 9 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        <svg className="icon-check" width="21" height="21" viewBox="0 0 24 24" fill="none">
          <path className="check-path" d="M5 13l4.5 4.5L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <span className="btn-label">
        <span className="label-clear">Очистити фільтри</span>
        <span className="label-done">Фільтри очищено!</span>
      </span>
    </button>
  );
};

const FiltersBar = () => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>(getDefaultFilters);
  const [searchValue, setSearchValue] = useState("");

  const handleFilterChange = (name: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setSelectedFilters(getDefaultFilters());
    setSearchValue("");
  };

  return (
    <div className="border-blue-accent bg-white px-4 sm:px-5 py-4 col-span-12 h-fit w-full rounded-[13px] border-2">
      <div className="lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 grid grid-cols-2">
        {filters.map((filter) => (
          <FilterSelect
            key={filter.name}
            label={filter.label}
            value={selectedFilters[filter.name]}
            options={filter.options}
            onChange={(value) => handleFilterChange(filter.name, value)}
          />
        ))}
      </div>

      <div className="mt-4 sm:mt-5 sm:flex-row sm:items-center gap-3 sm:gap-6 flex flex-col items-stretch">
        <div className="min-w-0 relative flex-1">
          <span className="left-5 absolute top-1/2 -translate-y-1/2 text-[#7A7A7A]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L16.65 16.65M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <input
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Пошук за назвою, автором або описом..."
            className="h-14 focus:border-blue-accent ease-in-out bg-white pl-14 pr-5 sm:text-[15px] font-body w-full rounded-[10px] border-2 border-[#C6C8DD] text-[14px] text-[#171717] transition-all duration-300 outline-none placeholder:text-[#5F5F5F]"
          />
        </div>

        <ClearFiltersButton onClick={handleClear} />
      </div>
    </div>
  );
};

export default FiltersBar;
