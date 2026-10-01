import type { Metadata } from 'next'
import { getCosmic } from '@/lib/cosmic-preview'
import { getServices } from '@/lib/cosmic'
import ServicesSection from '@/components/ServicesSection'

export const metadata: Metadata = {
  title: 'خدماتنا | نكس كود',
  description: 'استعرض جميع خدماتنا البرمجية: سورسات تلكرام، برمجة مواقع، وبرمجة بوتات تلكرام مع استضافة دائمية.',
}

export default async function ServicesPage() {
  const { cosmic, previewToken } = await getCosmic()
  const services = await getServices(cosmic, previewToken)

  return (
    <div className="px-4 pt-14 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">خدماتنا</span>
        <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-5xl">خدماتنا البرمجية</h1>
        <p className="mt-4 text-muted-foreground">
          مجموعة متكاملة من الحلول البرمجية المصممة خصيصاً لتلبية احتياجات مشروعك الرقمي.
        </p>
      </div>
      <ServicesSection services={services} showHeading={false} />
    </div>
  )
}