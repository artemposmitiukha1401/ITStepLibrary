import Image from "next/image";

export interface Material {
  id: number;
  preview: string;
  title: string;
  author: string;
  year: number;
  description: string;
  categories: string[];
  url: string;
}

interface MaterialItemProps {
  material: Material;
  isEven: boolean;
}

const CategoryBadge = ({ label }: { label: string }) => (
  <span className="inline-block px-2.5 py-1 rounded-md bg-[#ECEEFF] text-[#5057D5] text-[11px] font-semibold tracking-wide">
    {label}
  </span>
);

const MaterialItem = ({ material, isEven }: MaterialItemProps) => (
  <div
    className={`border-b border-[#E0E2F0] last:border-b-0 ${isEven ? "bg-white" : "bg-[#F7F8FF]"
      }`}
  >
    <div className="md:hidden flex gap-3 px-4 py-4">
      <div className="shrink-0 w-14 rounded-md overflow-hidden bg-[#E0E4F0] relative h-18">
        <Image src={material.preview} alt={material.title} fill className="object-cover" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-bold text-[15px] text-[#171717] leading-snug">
            {material.title}
          </p>

          <a
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open PDF"
            className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#BA1A1A] text-white hover:bg-[#8f2922] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 2v6h6"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="5"
                y="20"
                fontSize="7"
                fontWeight="bold"
                fill="white"
                fontFamily="sans-serif"
              >
                PDF
              </text>
            </svg>
          </a>
        </div>

        <p className="text-[12px] text-[#7A7A7A]">
          {material.author}, {material.year}
        </p>

        <p className="text-[13px] text-[#444] leading-snug line-clamp-2">
          {material.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {material.categories.map((cat) => (
            <CategoryBadge key={cat} label={cat} />
          ))}
        </div>
      </div>
    </div>

    <div className="hidden md:grid grid-cols-[60px_100px_1fr_1fr_160px_80px] items-center">
      <div className="px-4 py-5 flex items-center justify-center text-blue-accent font-bold text-[18px]">
        {material.id}
      </div>

      <div className="px-4 py-4 flex items-center justify-center">
        <div className="w-16 h-20 rounded-md overflow-hidden bg-[#E0E4F0] relative">
          <Image src={material.preview} alt={material.title} fill className="object-cover" />
        </div>
      </div>

      <div className="px-4 py-5 flex flex-col justify-center">
        <p className="font-bold text-[18px] text-[#171717] leading-snug mb-1">
          {material.title}
        </p>
        <p className="text-[13px] text-[#7A7A7A]">
          {material.author}, {material.year}
        </p>
      </div>

      <div className="px-4 py-5 min-w-0 flex items-center text-[14px] text-black leading-snug">
        <p title={material.description} className="line-clamp-3 overflow-hidden break-words">
          {material.description}
        </p>
      </div>

      <div className="px-4 py-5 flex flex-col gap-1.5 items-center justify-center">
        {material.categories.map((cat) => (
          <CategoryBadge key={cat} label={cat} />
        ))}
      </div>

      <div className="px-4 py-5 flex items-center justify-center">
        <a
          href={material.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open PDF"
          className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#BA1A1A] text-white hover:bg-[#8f2922] transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2v6h6"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="5"
              y="20"
              fontSize="7"
              fontWeight="bold"
              fill="white"
              fontFamily="sans-serif"
            >
              PDF
            </text>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default MaterialItem;