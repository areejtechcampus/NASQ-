// TODO: استبدل البريد الإلكتروني وروابط التواصل بحساباتك الحقيقية قبل النشر
export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || 'studio@nasq-design.com';

// TODO: استبدل بالمدينة التي تعمل منها
export const CONTACT_CITY =
  import.meta.env.VITE_CONTACT_CITY || 'الرياض';

// TODO: أضف رابط حسابك على انستقرام
export const INSTAGRAM_URL =
  import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/nasq.design';

// TODO: أضف رابط حسابك على LinkedIn
export const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/nasq-design';

export function buildMailtoUrl(
  subject: string,
  body: string,
  email: string = CONTACT_EMAIL
): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
