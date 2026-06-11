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
    <div className="flex flex-col gap-2 w-full">
      <label className="font-body text-[14px] sm:text-[15px] font-semibold text-[#171717]">
        {label}
      </label>

      <div className="relative w-full">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full h-14 appearance-none rounded-[10px] border-2 border-[#C6C8DD] bg-white px-4 pr-11 text-[14px] sm:text-[15px] font-body text-[#171717] outline-none transition-all duration-300 ease-in-out focus:border-blue-accent cursor-pointer"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black">
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