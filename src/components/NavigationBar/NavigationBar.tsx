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

    
      <div className="hidden md:flex gap-10">
        {LINKS.map((item) => {
          if (item.dropdown) {
            return (
              <div key={item.id} className="relative group">
                <Link
                  href={item.link}
                  className="text-white font-title font-bold text-[20px] flex items-center gap-2"
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
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="min-w-[240px] rounded-[13px] bg-white shadow-lg border border-[#E0E2F0] py-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.id}
                        href={dropdownItem.link}
                        className="block px-5 py-3 text-black rounded-[13px] font-body text-[16px] font-semibold hover:bg-blue-accent hover:text-white transition-colors"
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
        className="md:hidden flex flex-col justify-center items-center w-12 h-12 gap-[6px] rounded-lg hover:bg-white/10 transition-colors"
      >
        <span
          className={`block h-[3px] w-8 bg-white rounded-full transition-all duration-300 origin-center ${
            menuOpen ? "rotate-45 translate-y-[9px]" : ""
          }`}
        />
        <span
          className={`block h-[3px] w-8 bg-white rounded-full transition-all duration-300 ${
            menuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block h-[3px] w-8 bg-white rounded-full transition-all duration-300 origin-center ${
            menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
          }`}
        />
      </button>

    
      <div
        className={`md:hidden absolute right-0 top-[calc(100%+12px)] w-[280px] rounded-[13px] bg-white shadow-xl border border-[#E0E2F0] overflow-hidden transition-all duration-300 z-50 ${
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
                    className="w-full flex items-center justify-between px-5 py-3 text-black font-body text-[16px] font-semibold hover:bg-[#F2F5FF] transition-colors"
                  >
                    {item.name}
                
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform duration-300 text-blue-accent ${
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
                    <div className="bg-[#F7F8FF] border-t border-[#E0E2F0]">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.id}
                          href={dropdownItem.link}
                          onClick={closeAll}
                          className="block pl-8 pr-5 py-2.5 text-[#444] font-body text-[15px] font-medium hover:bg-blue-accent hover:text-white transition-colors"
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
                className="block px-5 py-3 text-black font-body text-[16px] font-semibold hover:bg-[#F2F5FF] transition-colors"
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