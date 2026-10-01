import type { Metadata } from 'next'
import { getCosmic } from '@/lib/cosmic-preview'
import { getContactLinks } from '@/lib/cosmic'
import ContactLinksSection from '@/components/ContactLinksSection'

export const metadata: Metadata = {
  title: 'تواصل معنا | نكس كود',
  description: 'تواصل معنا عبر تلكرام أو وسائل التواصل الأخرى، فريقنا جاهز للرد على استفساراتك.',
}

export default async function ContactPage() {
  const { cosmic, previewToken } = await getCosmic()
  const contactLinks = await getContactLinks(cosmic, previewToken)

  return (
    <div className="px-4 pt-14 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">تواصل معنا</span>
        <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-5xl">تواصل معنا</h1>
        <p className="mt-4 text-muted-foreground">
          فريقنا جاهز دائماً للإجابة على استفساراتك ومساعدتك في اختيار الحل الأنسب لمشروعك.
        </p>
      </div>
      <ContactLinksSection contactLinks={contactLinks} showHeading={false} />
    </div>
  )
}