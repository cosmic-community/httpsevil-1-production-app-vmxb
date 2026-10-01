# نكس كود - موقع خدمات برمجية
![App Preview](https://imgix.cosmicjs.com/ac0d7700-bd46-11f1-af12-19c569209b1c-autopilot-photo-1555066931-4365d14bab8c-1790824665704.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

موقع عربي احترافي باتجاه RTL لعرض خدمات برمجية (سورسات تلكرام، برمجة مواقع، بوتات تلكرام مع استضافة دائمية)، مبني على Next.js 16 ومدعوم بالكامل من Cosmic CMS.

## المزايا
- 🏠 صفحة رئيسية بقسم Hero وزر تواصل بارز
- 🛠️ قسم خدمات ديناميكي مع بطاقات تفصيلية
- 📄 صفحة تفاصيل مستقلة لكل خدمة
- ✅ قسم "لماذا تختارنا" (نقاط الثقة)
- 📞 صفحة تواصل تعرض روابط التواصل كأزرار واضحة
- 🌙 تصميم داكن عصري ومتجاوب بالكامل
- 🔒 TypeScript صارم مع معالجة آمنة للبيانات

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6abdd09e59463ea225acb859&clone_repository=6abdd32059463ea225acb8af)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: https://evil-1.vercel.app/
> انسخه
> وحطه ب ريبو"

### Code Generation Prompt

> Build a Next.js application for a company website called "httpsevil-1-production-app-vmxb". The content is managed in Cosmic CMS with the following object types: services, trust-points, contact-links. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: موقع عربي احترافي (اتجاه RTL، خطوط عربية واضحة) لعرض خدمات برمجية. الصفحات والأقسام: 1) صفحة رئيسية فيها قسم Hero يعرّف بالخدمات مع زر تواصل بارز. 2) قسم الخدمات يعرض كل الخدمات من نوع المحتوى الخاص بالخدمات (سورسات تلكرام، برمجة مواقع، برمجة بوتات تلكرام مع استضافة دائمية) ببطاقات فيها العنوان والوصف والتفاصيل. 3) صفحة تفاصيل لكل خدمة. 4) قسم نقاط الثقة (لماذا تختارنا) من نوع المحتوى الخاص بنقاط الثقة. 5) قسم/صفحة تواصل يعرض روابط التواصل (تلكرام وغيرها) من نوع المحتوى الخاص بروابط التواصل كأزرار واضحة. تصميم عصري داكن أنيق، متجاوب مع الجوال، وكل النصوص بالعربي.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## التقنيات المستخدمة
- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cosmic](https://www.cosmicjs.com/docs) كـ CMS

## البدء

### المتطلبات الأساسية
- Bun مثبت على جهازك
- حساب Cosmic مع Bucket يحتوي على أنواع المحتوى: services، trust-points، contact-links

### التثبيت

```bash
bun install
```

أضف متغيرات البيئة التالية:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

ثم شغّل مشروع التطوير:

```bash
bun run dev
```

## أمثلة على استخدام Cosmic SDK

```typescript
import { cosmic } from '@/lib/cosmic'

// جلب جميع الخدمات
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// جلب خدمة واحدة عبر الـ slug
const { object: service } = await cosmic.objects
  .findOne({ type: 'services', slug: 'telegram-sources' })
  .depth(1)
```

## تكامل Cosmic CMS
يستخدم هذا التطبيق [Cosmic](https://www.cosmicjs.com) كمصدر وحيد للمحتوى عبر ثلاثة أنواع محتوى:
- **services**: اسم الخدمة، الوصف، السعر، الأيقونة، الصورة، ترتيب العرض
- **trust-points**: العنوان، الوصف، الأيقونة، ترتيب العرض
- **contact-links**: التسمية، الرابط، نوع الرابط، زر رئيسي، ترتيب العرض

كل البيانات تُجلب من جانب الخادم (Server Components) وتُرتب تلقائياً حسب `display_order`.

## خيارات النشر
### Vercel
انشر المشروع مباشرة عبر [Vercel](https://vercel.com) وأضف متغيرات البيئة في إعدادات المشروع.

### Netlify
يمكن نشر التطبيق على [Netlify](https://www.netlify.com) مع تحديد أمر البناء `bun run build` ومجلد الإخراج `.next`.

تذكر إضافة متغيرات البيئة التالية في لوحة تحكم منصة الاستضافة:
`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
<!-- README_END -->