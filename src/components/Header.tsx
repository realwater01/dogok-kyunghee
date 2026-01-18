"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  {
    title: "한의원소개",
    href: "/about",
    subMenu: [
      { title: "도곡경희한의원 소개", href: "/about/intro" },
      { title: "치료원리", href: "/about/principle" },
      { title: "오시는 길", href: "/about/location" },
    ],
  },
  {
    title: "수험생",
    href: "/student",
    subMenu: [
      { title: "집중력", href: "/student/focus" },
      { title: "자율신경실조", href: "/student/autonomic" },
    ],
  },
  {
    title: "어린이",
    href: "/children",
    subMenu: [
      { title: "ADHD, TIC, 불안", href: "/children/adhd-tic" },
      { title: "면역", href: "/children/immunity" },
      { title: "성장", href: "/children/growth" },
    ],
  },
  {
    title: "비염",
    href: "/rhinitis",
    subMenu: [
      { title: "비염ABC", href: "/rhinitis/abc" },
    ],
  },
  {
    title: "자율신경계",
    href: "/autonomic",
    subMenu: [
      { title: "만성두통, 어지러움, 피로", href: "/autonomic/headache" },
      { title: "공황장애, 불안, 실신", href: "/autonomic/panic" },
      { title: "감염, 염증", href: "/autonomic/infection" },
    ],
  },
  {
    title: "다이어트",
    href: "/diet",
    subMenu: [
      { title: "도곡환", href: "/diet/dogok" },
      { title: "수면비움환", href: "/diet/sleep" },
      { title: "도곡유지환", href: "/diet/maintain" },
    ],
  },
  {
    title: "보약",
    href: "/tonic",
    subMenu: [
      { title: "사향공진단", href: "/tonic/gongjindan" },
      { title: "달이다, 쌍화", href: "/tonic/ssanghwa" },
      { title: "체질별 보약", href: "/tonic/constitution" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-medium text-brown-dark tracking-tight font-title">도곡경희한의원</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(index)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors py-6 ${
                    activeSubmenu === index ? "text-accent" : "text-primary hover:text-accent"
                  }`}
                >
                  {item.title}
                  {item.subMenu.length > 0 && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeSubmenu === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.subMenu.length > 0 && (
                  <div
                    className={`absolute top-full left-0 transition-all duration-200 ${
                      activeSubmenu === index
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white rounded-2xl border min-w-[220px] dropdown-menu mt-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block text-[15px] text-gray-700 hover:text-accent transition-colors leading-relaxed mb-4 last:mb-0"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="text-lg font-medium text-brown-dark font-title">도곡경희한의원</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="메뉴 닫기"
              className="p-1"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 mb-4">
                <Link
                  href={item.href}
                  className="block text-base font-medium text-primary hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.subMenu.length > 0 && (
                  <div className="mt-3 ml-3 space-y-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block text-sm text-gray-500 hover:text-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 text-sm text-gray-400">
            <p className="mb-1">전화 상담: 02-XXX-XXXX</p>
            <p>평일 09:00 - 18:00</p>
          </div>
        </div>
      </div>
    </header>
  );
}
