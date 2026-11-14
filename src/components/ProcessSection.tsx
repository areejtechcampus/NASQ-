import React from 'react';
import { CheckCircle2, Compass, Layers, PenTool, Scissors } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'الفكرة والبحث',
    description:
      'أحدّد المشكلة الوظيفية التي يجب أن تحلها القطعة، وأجمع المراجع البصرية ونسب الحركة المطلوبة.',
  },
  {
    step: '02',
    icon: PenTool,
    title: 'السكتش',
    description:
      'أرسم الخطوط الأولية لضبط التوازن بين الكتفين، الياقة، والطول العام دون إضافات تشتّت التصميم.',
  },
  {
    step: '03',
    icon: Scissors,
    title: 'الباترون',
    description:
      'أترجم السكتش إلى باترون دقيق يراعي ميلان الأكمام ومواضع الدرزات التي تمنح القطعة وقفتها.',
  },
  {
    step: '04',
    icon: Layers,
    title: 'الخامة والتبطين',
    description:
      'أختار وزن القماش ونوع التبطين ولوحة الألوان وفق سلوك النسيج وتفاعله مع الضوء والارتداء.',
  },
  {
    step: '05',
    icon: CheckCircle2,
    title: 'العينة والاختبار',
    description:
      'أفحص العينة على الجسم من كل الزوايا (360°) وأعدّل التفاصيل حتى الوصول إلى النتيجة النهائية.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="border-b border-[#DDE0E4] bg-[#F8F8F6] scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 lg:py-20">
        <div className="max-w-2xl space-y-2 mb-10">
          <p className="text-xs font-medium text-[#62666D]">منهج العمل</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171717]">
            العملية
          </h2>
          <p className="text-sm sm:text-base text-[#62666D] leading-relaxed">
            هكذا أنتقل في كل مشروع من الفكرة الأولية إلى العينة المعتمدة بخطوات واضحة ومترابطة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROCESS_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white border border-[#DDE0E4] p-6 flex flex-col justify-between gap-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tabular text-xs font-semibold text-[#62666D]">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 border border-[#DDE0E4] bg-[#F8F8F6] flex items-center justify-center text-[#171717]">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62666D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
