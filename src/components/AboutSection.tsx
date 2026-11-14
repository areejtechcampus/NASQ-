import React from 'react';
import { Briefcase, Compass, Layers, Scissors } from 'lucide-react';

// TODO: استبدل هذا النص العام بخبراتك الفعلية وسنوات الممارسة الحقيقية عند توفرها
const EXPERIENCE_NOTES = [
  {
    icon: Compass,
    title: 'المنهج: التفاصيل الخفية قبل الشكل الظاهري',
    description:
      'أبدأ دائماً من البنية الداخلية للقطعة: وزن القماش، ميلان الكتف، ارتفاع الياقة، وموضع الدرزات. الشكل المتزن هو نتيجة طبيعية لهذه القرارات.',
  },
  {
    icon: Scissors,
    title: 'تطوير الباترون والعينات',
    description:
      'أعمل على ترجمة السكتش إلى باترون دقيق وعينات متدرجة، مع اختبار انسيابية القماش وتحمل التبطين في الحركة اليومية.',
  },
  {
    icon: Layers,
    title: 'أبحاث الخامات والألوان',
    description:
      'أختار الأنسجة وفق الكثافة والتهوية والملمس، وأبني لوحة ألوان هادئة تخدم سطح الخامة وتبرز تفاصيل التنفيذ.',
  },
  {
    icon: Briefcase,
    title: 'التعاونات والخبرة العملية',
    // TODO: أضف هنا أسماء العلامات أو الجهات التي تعاونت معها، أو الجوائز والاعتمادات إن وُجدت
    description:
      'أعمل بشكل مستقل وفي تعاونات إبداعية لتطوير قطع يومية ومعاطف شتوية من الفكرة الأولية حتى تسليم ملف العينة النهائي.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="border-b border-[#DDE0E4] bg-white scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Designer Bio Column */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-medium text-[#62666D]">منهج التصميم</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171717] leading-snug">
              عني
            </h2>
            <p className="text-sm sm:text-base text-[#62666D] leading-relaxed">
              أنا مصمم منتجات وأزياء في استوديو «نَسَق | NASQ». أؤمن أن التفاصيل الخفية تأتي قبل الشكل الظاهري؛ فارتفاع الياقة ووزن القماش ومكان الدرزة هي العناصر التي تحدّد حضور القطعة وجودتها.
            </p>
            <p className="text-sm text-[#62666D] leading-relaxed">
              أركّز في عملي على الملابس الشتوية والقطع اليومية، وأتعاون مع العلامات والمشاريع المستقلة لتحويل الأفكار إلى باترونات وعينات قابلة للتنفيذ بدقة عالية.
            </p>

            {/* TODO: حدّث هذا الجزء بمؤشرات خبرتك الحقيقية (عدد السنوات، العملاء، الجوائز) إن رغبت بعرض أرقام */}
            <div className="pt-5 border-t border-[#DDE0E4] space-y-2 text-xs text-[#62666D]">
              <div className="flex items-center justify-between">
                <span>التخصص</span>
                <span className="font-medium text-[#171717]">
                  تصميم المنتجات والأزياء · هندسة الباترون
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>التعاونات السابقة</span>
                <span className="font-medium text-[#171717]">
                  مشاريع مستقلة وتعاونات إبداعية
                </span>
              </div>
            </div>
          </div>

          {/* Designer Practice & Experience Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EXPERIENCE_NOTES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="border border-[#DDE0E4] bg-[#F8F8F6] p-6 space-y-3"
                >
                  <div className="w-9 h-9 border border-[#DDE0E4] bg-white flex items-center justify-center text-[#171717]">
                    <Icon className="w-4 h-4" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#62666D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
