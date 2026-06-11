"use client";
import { useState } from "react";
import MaterialItem from "../MaterialItem/MaterialItem";
import type { Material } from "../MaterialItem/MaterialItem";

const MOCK_DATA: Material[] = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  preview: "/book_preview.jpg",
  title: "Разработка на Python для профи",
  author: "Іван Іванов",
  year: 2023,
  description: "Углубленное изучение асинхронного...",
  categories: ["SOFTWARE", "BACK-END"],
  url: "#",
}));

const TOTAL = 482;
const PER_PAGE = 15;
const TOTAL_PAGES = Math.ceil(TOTAL / PER_PAGE);

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination = ({ current, total, onChange }: PaginationProps) => {
  const btn = (
    label: string | number,
    page: number,
    active = false,
    disabled = false
  ) => (
    <button
      key={`${label}-${page}`}
      onClick={() => !disabled && onChange(page)}
      disabled={disabled}
      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:text-[14px] font-semibold text-[13px] transition-colors
        ${
          active
            ? "bg-blue-accent text-white"
            : disabled
            ? "text-[#C0C0C0] cursor-default"
            : "text-[#444] hover:bg-[#ECEEFF] hover:text-blue-accent"
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="gap-0.5 sm:gap-1 flex items-center">
      <button
        onClick={() => current > 1 && onChange(current - 1)}
        disabled={current === 1}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-[#444] transition-colors hover:bg-[#ECEEFF] disabled:cursor-default disabled:text-[#C0C0C0]"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {btn(1, 1, current === 1)}
      {btn(2, 2, current === 2)}
      {btn(3, 3, current === 3)}
      {btn("...", -1, false, true)}
      {btn(total, total, current === total)}
      <button
        onClick={() => current < total && onChange(current + 1)}
        disabled={current === total}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-[#444] transition-colors hover:bg-[#ECEEFF] disabled:cursor-default disabled:text-[#C0C0C0]"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

const MaterialsList = () => {
  const [page, setPage] = useState(1);
  const headerCols = ["ID", "Прев'ю", "Назва та автор", "Опис", "Категорія", "URL"];

  return (
    <div>
      <div className="gap-2 mb-5 flex-col">
        <h2 className="font-title font-semibold text-[30px]">Каталог навчальних матеріалів</h2>
      <h4 className="font-title font-normal text-[18px]">Показано 1-15 із 482 документів</h4>
      </div>
      <div className="border-blue-accent bg-white col-span-12 h-fit w-full overflow-hidden rounded-[13px] border-2">
  
      <div className="md:grid bg-blue-accent hidden grid-cols-[60px_100px_1fr_1fr_160px_80px]">
        {headerCols.map((col) => (
          <div
            key={col}
            className="px-4 py-4 text-white font-bold font-title border-white/20 border-r text-center text-[18px] last:border-r-0"
          >
            {col}
          </div>
        ))}
      </div>

    
      <div className="md:hidden bg-blue-accent px-4 py-3">
        <p className="text-white font-bold font-title text-[18px]">Матеріали</p>
      </div>

    
      {MOCK_DATA.map((item, idx) => (
        <MaterialItem key={item.id} material={item} isEven={idx % 2 === 0} />
      ))}

      
      <div className="sm:flex-row gap-3 px-4 sm:px-5 py-4 bg-white flex flex-col items-center justify-between border-t border-[#E0E2F0]">
        <p className="sm:text-[14px] text-[13px] text-[#7A7A7A]">
          Показано {PER_PAGE} із {TOTAL} записів
        </p>
        <Pagination current={page} total={TOTAL_PAGES} onChange={setPage} />
      </div>
    </div>
    </div>
  );
};

export default MaterialsList;
