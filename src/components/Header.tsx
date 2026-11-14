import React, { useState } from 'react';
import { ArrowUpLeft, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'projects', label: 'الأعمال' },
  { id: 'about', label: 'عني' },
  { id: 'process', label: 'العملية' },
  { id: 'contact', label: 'تواصل' },
];

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F8F6]/95 backdrop-blur-md border-b border-[#DDE0E4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Studio Wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#171717] whitespace-nowrap shrink-0"
        >
          نَسَق | NASQ
        </a>

        {/* Zone 2: Portfolio RTL Navigation */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#62666D]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="relative py-1 hover:text-[#171717] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1px] after:bg-[#171717] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA (لنعمل معاً) + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[#171717] text-[#F8F8F6] text-xs font-medium hover:bg-[#171717]/90 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
          >
            <span>لنعمل معاً</span>
            <ArrowUpLeft className="w-3.5 h-3.5" strokeWidth={1.6} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-[#DDE0E4] text-[#171717]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="قائمة الجوال"
          className="lg:hidden border-t border-[#DDE0E4] bg-[#F8F8F6] px-4 py-4 flex flex-col gap-1"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="py-2.5 px-2 text-sm font-medium text-[#171717] hover:bg-[#DDE0E4]/40 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
