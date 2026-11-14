import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowUpLeft,
  Check,
  Mail,
  MapPin,
} from 'lucide-react';
import {
  buildMailtoUrl,
  CONTACT_CITY,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
} from '../config/contact';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('تصميم قطعة أو مجموعة كاملة');
  const [details, setDetails] = useState('');
  const [dispatchedMailtoUrl, setDispatchedMailtoUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const triggerMailto = (url: string): boolean => {
    try {
      const link = document.createElement('a');
      link.href = url;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedDetails = details.trim();

    if (!trimmedName || !trimmedEmail || !trimmedDetails) {
      setErrorMessage('يرجى تعبئة الاسم والبريد الإلكتروني وتفاصيل المشروع قبل الإرسال.');
      return;
    }

    if (!CONTACT_EMAIL) {
      setErrorMessage('لم يتم ضبط عنوان البريد الإلكتروني في الإعدادات بعد.');
      return;
    }

    const subject = `طلب تعاون تصميمي (${projectType}) — ${trimmedName}`;
    const body = [
      'مرحباً،',
      `الاسم: ${trimmedName}`,
      `البريد الإلكتروني: ${trimmedEmail}`,
      `نوع المشروع: ${projectType}`,
      '',
      'تفاصيل المشروع:',
      trimmedDetails,
    ].join('\n');

    const mailtoUrl = buildMailtoUrl(subject, body);
    const opened = triggerMailto(mailtoUrl);

    if (!opened) {
      setErrorMessage('تعذّر فتح تطبيق البريد تلقائياً. يمكنك مراسلتي مباشرة على البريد الظاهر في القسم.');
      return;
    }

    setDispatchedMailtoUrl(mailtoUrl);
  };

  return (
    <section
      id="contact"
      className="bg-white border-b border-[#DDE0E4] scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Designer Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-medium text-[#62666D]">تواصل</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#171717]">
                لنعمل معاً
              </h2>
              <p className="text-sm sm:text-base text-[#62666D] leading-relaxed">
                أستقبل طلبات تصميم المنتجات والأزياء، مشاريع التعاون الإبداعي، والعمل الحر مع العلامات والاستوديوهات المستقلة.
              </p>
            </div>

            <div className="border-t border-[#DDE0E4] pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#171717] mt-1 shrink-0" strokeWidth={1.6} />
                <div>
                  <div className="text-xs text-[#62666D]">البريد الإلكتروني</div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm font-medium text-[#171717] hover:underline font-mono-tabular"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#171717] mt-1 shrink-0" strokeWidth={1.6} />
                <div>
                  <div className="text-xs text-[#62666D]">المقر</div>
                  <div className="text-sm font-medium text-[#171717]">
                    {CONTACT_CITY} · متاح للعمل الحر والتعاون عن بُعد
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#DDE0E4] text-xs font-medium text-[#171717] hover:border-[#171717] transition-colors"
              >
                <span>انستقرام</span>
                <ArrowUpLeft className="w-3.5 h-3.5" strokeWidth={1.6} />
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#DDE0E4] text-xs font-medium text-[#171717] hover:border-[#171717] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpLeft className="w-3.5 h-3.5" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          {/* Real Mailto Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F8F6] border border-[#DDE0E4] p-6 sm:p-8">
            {dispatchedMailtoUrl ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-[#171717] text-[#F8F8F6] flex items-center justify-center">
                  <Check className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#171717]">
                  تم فتح رسالة البريد الإلكتروني
                </h3>
                <p className="text-sm text-[#62666D] max-w-md mx-auto leading-relaxed">
                  جهّزت مسودة الرسالة بتفاصيل مشروعك في تطبيق البريد الخاص بك. أكمِل الإرسال هناك وسأرد عليك قريباً.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={dispatchedMailtoUrl}
                    className="px-5 py-2.5 bg-[#171717] text-[#F8F8F6] text-xs font-semibold hover:bg-[#171717]/90 transition-colors"
                  >
                    إعادة فتح تطبيق البريد
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setDispatchedMailtoUrl(null);
                      setErrorMessage(null);
                      setName('');
                      setEmail('');
                      setDetails('');
                    }}
                    className="px-5 py-2.5 border border-[#171717] text-xs font-semibold text-[#171717] hover:bg-[#171717] hover:text-[#F8F8F6] transition-colors"
                  >
                    كتابة طلب جديد
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 p-3.5 border border-red-300 bg-red-50 text-xs text-red-800"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#171717]"
                    >
                      الاسم
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="اسمك أو اسم العلامة"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDE0E4] text-sm text-[#171717] placeholder:text-[#62666D]/60 focus:outline-none focus:border-[#171717]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#171717]"
                    >
                      البريد
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDE0E4] text-sm text-[#171717] placeholder:text-[#62666D]/60 focus:outline-none focus:border-[#171717]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-type"
                    className="block text-xs font-medium text-[#171717]"
                  >
                    نوع المشروع
                  </label>
                  <select
                    id="contact-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDE0E4] text-sm text-[#171717] focus:outline-none focus:border-[#171717]"
                  >
                    <option value="تصميم قطعة أو مجموعة كاملة">
                      تصميم قطعة أو مجموعة كاملة
                    </option>
                    <option value="هندسة باترون وتطوير عينة">
                      هندسة باترون وتطوير عينة
                    </option>
                    <option value="تعاون إبداعي مع علامة">
                      تعاون إبداعي مع علامة
                    </option>
                    <option value="استشارة خامات ومنتجات">
                      استشارة خامات ومنتجات
                    </option>
                    <option value="عمل حر">
                      عمل حر
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-details"
                    className="block text-xs font-medium text-[#171717]"
                  >
                    التفاصيل
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="اكتب نبذة عن المشروع، الجدول الزمني، وما ترغب في إنجازه..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DDE0E4] text-sm text-[#171717] placeholder:text-[#62666D]/60 focus:outline-none focus:border-[#171717] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#171717] text-[#F8F8F6] text-xs font-semibold hover:bg-[#171717]/90 transition-colors"
                >
                  <span>إرسال عبر البريد الإلكتروني</span>
                  <ArrowUpLeft className="w-4 h-4" strokeWidth={1.6} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
