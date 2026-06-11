"use client";
import { useState, type ReactElement } from "react";
import MaterialItem from "../MaterialItem/MaterialItem";
import type { Material } from "../MaterialItem/MaterialItem";
const MOCK_DATA: Material[] = [
  {
    id: 1,
    preview: "/previews/preview_1.png",
    title: "Adobe Photoshop Classroom in a Book",
    author: "Andrew Faulkner, Conrad Chavez",
    year: 2020,
    description: "Книга про роботу з Adobe Photoshop, інструменти, техніки редагування та практичні вправи.",
    categories: ["DESIGN", "PHOTOSHOP"],
    url: "/materials/Adobe%20Photoshop%20Classroom%20in%20a%20Book%20(2020%20release)%20by%20Andrew%20Faulkner%2C%20Conrad%20Chavez.pdf",
  },
  {
    id: 2,
    preview: "/previews/preview_2.png",
    title: "Adobe Brandbook",
    author: "Adobe",
    year: 2024,
    description: "Матеріал про візуальну айдентику, бренд-стиль та правила використання елементів бренду Adobe.",
    categories: ["DESIGN", "BRANDING"],
    url: "/materials/adobe-brandbook.pdf",
  },
  {
    id: 3,
    preview: "/previews/preview_3.png",
    title: "Sass for Web Designers",
    author: "Dan Cederholm",
    year: 2013,
    description: "Книга про використання Sass у вебдизайні, організацію CSS-коду та покращення стилізації сайтів.",
    categories: ["WEB DESIGN", "FRONT-END"],
    url: "/materials/Dan%20Cederholm%20-%20Sass%20for%20Web%20Designers%20(10)%20-%202013.pdf",
  },
  {
    id: 4,
    preview: "/previews/preview_4.png",
    title: "Just Enough Research",
    author: "Erika Hall",
    year: 2013,
    description: "Книга про UX-дослідження, роботу з користувачами, збір даних і прийняття дизайн-рішень на основі досліджень.",
    categories: ["UX", "RESEARCH"],
    url: "/materials/Erika%20Hall%20-%20Just%20Enough%20Research%20(9)%20-%202013.pdf",
  },
  {
    id: 5,
    preview: "/previews/preview_5.png",
    title: "Graphic Design for the 21st Century",
    author: "Charlotte & Peter Fiell",
    year: 2024,
    description: "Книга про сучасний графічний дизайн, візуальну комунікацію, композицію та розвиток дизайну у XXI столітті.",
    categories: ["GRAPHIC DESIGN", "DESIGN"],
    url: "/materials/Graphic%20Design%20for%20the%2021st%20Century.pdf",
  },
  {
    id: 6,
    preview: "/previews/preview_6.png",
    title: "Content Strategy for Mobile",
    author: "Karen McGrane",
    year: 2012,
    description: "Книга про контент-стратегію для мобільних інтерфейсів, адаптацію контенту та UX для різних пристроїв.",
    categories: ["CONTENT", "UX"],
    url: "/materials/Karen%20McGrane%20-%20Content%20Strategy%20For%20Mobile%20(8)%20-%202012.pdf",
  },
  {
    id: 7,
    preview: "/previews/preview_7.png",
    title: "Masters of Design: Logos & Identity",
    author: "Unknown author",
    year: 2024,
    description: "Матеріал про логотипи, айдентику та роботи відомих дизайнерів у сфері брендингу.",
    categories: ["LOGO DESIGN", "BRANDING"],
    url: "/materials/Masters_of_design__logos__identity__a_collective_of_the_world_s_most_inspiring_logo_designers.pdf",
  },
  {
    id: 8,
    preview: "/previews/preview_8.png",
    title: "Portfolio",
    author: "Unknown author",
    year: 2024,
    description: "PDF-файл портфоліо з прикладами робіт або навчальних матеріалів.",
    categories: ["PORTFOLIO", "DESIGN"],
    url: "/materials/portfolio.pdf",
  },
  {
    id: 9,
    preview: "/previews/preview_9.png",
    title: "Responsible Responsive Design",
    author: "Scott Jehl",
    year: 2014,
    description: "Книга про responsive design, адаптивну верстку, продуктивність і створення сайтів для різних екранів.",
    categories: ["WEB DESIGN", "RESPONSIVE"],
    url: "/materials/Scott%20Jehl%20-%20Responsible%20Responsive%20Design%20(13)%20-%202014.pdf",
  },
];

const MATERIALS_PER_PAGE: number = 5;

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

interface PaginationButtonProps {
  label: string | number;
  page: number;
  isActive: boolean;
  isDisabled: boolean;
  onChange: (page: number) => void;
}

interface PaginationPageItem {
  type: "page";
  page: number;
}

interface PaginationEllipsisItem {
  type: "ellipsis";
  key: string;
}

type PaginationItem = PaginationPageItem | PaginationEllipsisItem;

const getTotalPages = (materialsCount: number, perPage: number): number =>
  Math.ceil(materialsCount / perPage);

const getPageStartIndex = (currentPage: number, perPage: number): number =>
  (currentPage - 1) * perPage;

const getPageMaterials = (
  materials: Material[],
  currentPage: number,
  perPage: number
): Material[] => {
  const startIndex: number = getPageStartIndex(currentPage, perPage);

  return materials.slice(startIndex, startIndex + perPage);
};

const getPaginationItems = (current: number, total: number): PaginationItem[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_unused: unknown, index: number): PaginationItem => ({
      type: "page",
      page: index + 1,
    }));
  }

  const visiblePages: Set<number> = new Set<number>([
    1,
    current - 1,
    current,
    current + 1,
    total,
  ]);
  const pageItems: PaginationPageItem[] = Array.from(visiblePages)
    .filter((pageNumber: number): boolean => pageNumber >= 1 && pageNumber <= total)
    .sort((firstPage: number, secondPage: number): number => firstPage - secondPage)
    .map((pageNumber: number): PaginationPageItem => ({
      type: "page",
      page: pageNumber,
    }));

  return pageItems.flatMap((item: PaginationPageItem, index: number): PaginationItem[] => {
    const previousItem: PaginationPageItem | undefined = pageItems[index - 1];

    if (previousItem !== undefined && item.page - previousItem.page > 1) {
      return [
        {
          type: "ellipsis",
          key: `ellipsis-${previousItem.page}-${item.page}`,
        },
        item,
      ];
    }

    return [item];
  });
};

const PaginationButton = ({
  label,
  page,
  isActive,
  isDisabled,
  onChange,
}: PaginationButtonProps): ReactElement => (
  <button
    onClick={() => !isDisabled && onChange(page)}
    disabled={isDisabled}
    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:text-[14px] font-semibold text-[13px] transition-colors
      ${isActive
        ? "bg-blue-accent text-white"
        : isDisabled
          ? "text-[#C0C0C0] cursor-default"
          : "text-[#444] hover:bg-[#ECEEFF] hover:text-blue-accent"
      }`}
  >
    {label}
  </button>
);

const Pagination = ({ current, total, onChange }: PaginationProps): ReactElement => {
  const paginationItems: PaginationItem[] = getPaginationItems(current, total);

  return (
    <div className="gap-0.5 sm:gap-1 flex items-center">
      <button
        onClick={() => current > 1 && onChange(current - 1)}
        disabled={current <= 1}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-[#444] transition-colors hover:bg-[#ECEEFF] disabled:cursor-default disabled:text-[#C0C0C0]"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {paginationItems.map((item: PaginationItem) =>
        item.type === "ellipsis" ? (
          <span
            key={item.key}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#C0C0C0]"
          >
            ...
          </span>
        ) : (
          <PaginationButton
            key={item.page}
            label={item.page}
            page={item.page}
            isActive={current === item.page}
            isDisabled={false}
            onChange={onChange}
          />
        )
      )}
      <button
        onClick={() => current < total && onChange(current + 1)}
        disabled={current >= total}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-[#444] transition-colors hover:bg-[#ECEEFF] disabled:cursor-default disabled:text-[#C0C0C0]"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
          <path d="M1 1l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

const MaterialsList = (): ReactElement => {
  const [page, setPage] = useState<number>(1);
  const totalMaterials: number = MOCK_DATA.length;
  const totalPages: number = getTotalPages(totalMaterials, MATERIALS_PER_PAGE);
  const currentPage: number = totalPages === 0 ? 0 : Math.min(page, totalPages);
  const visibleMaterials: Material[] =
    currentPage === 0 ? [] : getPageMaterials(MOCK_DATA, currentPage, MATERIALS_PER_PAGE);
  const firstVisibleMaterial: number =
    visibleMaterials.length === 0 ? 0 : getPageStartIndex(currentPage, MATERIALS_PER_PAGE) + 1;
  const lastVisibleMaterial: number = firstVisibleMaterial + visibleMaterials.length - 1;
  const headerCols = ["ID", "Прев'ю", "Назва та автор", "Опис", "Категорія", "URL"];

  return (
    <div>
      <div className="gap-2 mb-5 flex-col">
        <h2 className="font-title font-semibold text-[30px]">Каталог навчальних матеріалів</h2>
        <h4 className="font-title font-normal text-[18px]">Показано {firstVisibleMaterial}-{lastVisibleMaterial} із {totalMaterials} документів</h4>
      </div>
      <div className="border-blue-accent bg-white col-span-12 h-fit w-full overflow-hidden rounded-[13px] border-2">

        <div className="md:grid h bg-blue-accent hidden grid-cols-[60px_100px_1fr_1fr_160px_80px]">
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


        {visibleMaterials.map((item, idx) => (
          <MaterialItem key={item.id} material={item} isEven={idx % 2 === 0} />
        ))}


        <div className="sm:flex-row gap-3 px-4 sm:px-5 py-4 bg-white flex flex-col items-center justify-between border-t border-[#E0E2F0]">
          <p className="sm:text-[14px] text-[13px] text-[#7A7A7A]">
            Показано {visibleMaterials.length} із {totalMaterials} записів
          </p>
          {totalPages > 0 && <Pagination current={currentPage} total={totalPages} onChange={setPage} />}
        </div>
      </div>
    </div>
  );
};

export default MaterialsList;
