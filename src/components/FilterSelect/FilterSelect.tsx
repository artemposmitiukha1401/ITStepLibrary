"use client";

export interface FilterOption {
  label: string;
  value: string;
}

interface FilterSelectProps {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
}

const FilterSelect = ({ label, value, options, onChange }: FilterSelectProps) => {
  return (
    <div className="gap-2 flex w-full flex-col">
      <label className="font-body sm:text-[15px] font-semibold text-[14px] text-[#171717]">
        {label}
      </label>

      <div className="relative w-full">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-14 bg-white px-4 pr-11 sm:text-[15px] font-body ease-in-out focus:border-blue-accent w-full cursor-pointer appearance-none rounded-[10px] border-2 border-[#C6C8DD] text-[14px] text-[#171717] transition-all duration-300 outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="right-4 text-black pointer-events-none absolute top-1/2 -translate-y-1/2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default FilterSelect;