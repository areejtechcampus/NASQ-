import React from 'react';
import { ArrowUpLeft } from 'lucide-react';
import {
  CONTACT_CITY,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '../config/contact';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer
      id="footer"
      className="bg-[#171717] text-[#F8F8F6] border-t border-[#171717]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F8F8F6]/15">
          {/* Studio Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-display text-2xl font-bold tracking-tight">
              نَسَق | NASQ
            </div>
            <p className="text-sm text-[#DDE0E4]/80 leading-relaxed max-w-md">
              بورتفوليو مصمم منتجات وأزياء يركّز على البنية، وزن القماش، والتفاصيل الخفية قبل الشكل الظاهري، مع استعراض تفاعلي 360° للقرارات التصميمية.
            </p>
          </div>

          {/* Portfolio Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#D5C5AF]">القائمة</h3>
            <ul className="space-y-2 text-sm text-[#DDE0E4]/85">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors"
                >
                  الأعمال
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  عني
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors"
                >
                  العملية
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  تواصل
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold text-[#D5C5AF]">لنعمل معاً</h3>
            <p className="text-xs text-[#DDE0E4]/80 leading-relaxed">
              متاح لطلبات التصميم، التعاون الإبداعي، والعمل الحر — {CONTACT_CITY}.
            </p>

            <div className="pt-1">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-mono-tabular text-[#F8F8F6] hover:text-[#D5C5AF] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-[#DDE0E4]/80">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-1 hover:text-[#D5C5AF] transition-colors"
              >
                <span>البريد</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#D5C5AF] transition-colors"
              >
                <span>انستقرام</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#D5C5AF] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDE0E4]/60">
          <span>© نَسَق | NASQ. جميع الحقوق محفوظة.</span>
          <span>بورتفوليو تصميم المنتجات والأزياء</span>
        </div>
      </div>
    </footer>
  );
};
