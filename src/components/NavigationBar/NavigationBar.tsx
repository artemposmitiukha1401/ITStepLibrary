"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  {
    id: 1,
    name: "Головна",
    link: "/",
  },
  {
    id: 2,
    name: "Про нас",
    link: "/general",
    dropdown: [
      { id: 1, name: "Істрія, місія, візія", link: "/general" },
      { id: 2, name: "Ліцензія", link: "/license" },
      { id: 3, name: "Публічна інформація", link: "/public" },
      { id: 4, name: "Нормативні документи", link: "/documents" },
    ],
  },
  {
    id: 3,
    name: "Контакти",
    link: "/contacts",
  },
];

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) =>
    setOpenDropdown((prev) => (prev === id ? null : id));

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="relative">

    
      <div className="md:flex gap-10 hidden">
        {LINKS.map((item) => {
          if (item.dropdown) {
            return (
              <div key={item.id} className="group relative">
                <Link
                  href={item.link}
                  className="text-white font-title font-bold gap-2 flex items-center text-[20px]"
                >
                  {item.name}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <div className="left-0 pt-4 translate-y-2 group-hover:translate-y-0 invisible absolute top-full z-50 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <div className="bg-white shadow-lg py-2 min-w-[240px] rounded-[13px] border border-[#E0E2F0]">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.id}
                        href={dropdownItem.link}
                        className="px-5 py-3 text-black font-body font-semibold hover:bg-blue-accent hover:text-white block rounded-[13px] text-[16px] transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <Link
              key={item.id}
              href={item.link}
              className="text-white font-title font-bold text-[20px]"
            >
              {item.name}
            </Link>
          );
        })}
      </div>

    
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
        aria-expanded={menuOpen}
        className="md:hidden w-12 h-12 rounded-lg hover:bg-white/10 flex flex-col items-center justify-center gap-[6px] transition-colors"
      >
        <span
          className={`w-8 bg-white block h-[3px] origin-center rounded-full transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[9px]" : ""
          }`}
        />
        <span
          className={`w-8 bg-white block h-[3px] rounded-full transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`w-8 bg-white block h-[3px] origin-center rounded-full transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
          }`}
        />
      </button>

    
      <div
        className={`md:hidden right-0 bg-white shadow-xl absolute top-[calc(100%+12px)] z-50 w-[280px] overflow-hidden rounded-[13px] border border-[#E0E2F0] transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="py-2">
          {LINKS.map((item) => {
            if (item.dropdown) {
              const isOpen = openDropdown === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.id)}
                    className="px-5 py-3 text-black font-body font-semibold flex w-full items-center justify-between text-[16px] transition-colors hover:bg-[#F2F5FF]"
                  >
                    {item.name}
                
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`text-blue-accent transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-[#E0E2F0] bg-[#F7F8FF]">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.id}
                          href={dropdownItem.link}
                          onClick={closeAll}
                          className="pl-8 pr-5 py-2.5 font-body font-medium hover:bg-blue-accent hover:text-white block text-[15px] text-[#444] transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.link}
                onClick={closeAll}
                className="px-5 py-3 text-black font-body font-semibold block text-[16px] transition-colors hover:bg-[#F2F5FF]"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

    </nav>
  );
};

export default NavigationBar;
