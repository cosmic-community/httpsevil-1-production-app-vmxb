// app/services/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCosmic } from '@/lib/cosmic-preview'
import { getServiceBySlug, getContactLinks, getMetafieldValue } from '@/lib/cosmic'
import ContactLinksSection from '@/components/ContactLinksSection'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const { cosmic, previewToken } = await getCosmic()
  const service = await getServiceBySlug(cosmic, slug, previewToken)

  if (!service) {
    return { title: 'الخدمة غير موجودة | نكس كود' }
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const description = getMetafieldValue(service.metadata?.description)

  return {
    title: `${name} | نكس كود`,
    description: description.slice(0, 150),
    other: {
      'cosmic-context': JSON.stringify({ object_id: service.id, object_type: 'services' }),
    },
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const { cosmic, previewToken } = await getCosmic()

  const [service, contactLinks] = await Promise.all([
    getServiceBySlug(cosmic, slug, previewToken),
    getContactLinks(cosmic, previewToken),
  ])

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const description = getMetafieldValue(service.metadata?.description)
  const price = getMetafieldValue(service.metadata?.price)
  const icon = getMetafieldValue(service.metadata?.icon) || '✨'
  const image = service.metadata?.image

  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-foreground">
            خدماتنا
          </Link>
          <span>/</span>
          <span className="text-foreground">{name}</span>
        </nav>

        {image?.imgix_url && (
          <div className="mb-8 overflow-hidden rounded-3xl border border-border">
            <img
              src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
              alt={name}
              width={800}
              height={400}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
        )}

        <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card/40 p-6 sm:p-10">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-3xl">
              {icon}
            </span>
            <div>
              <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">{name}</h1>
              {price && <p className="mt-1 font-bold text-primary">{price}</p>}
            </div>
          </div>

          {description && (
            <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}

          <div className="mt-4 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">هل أنت مهتم بهذه الخدمة؟ تواصل معنا الآن.</p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              اطلب الخدمة الآن
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            → العودة لجميع الخدمات
          </Link>
        </div>
      </div>

      <ContactLinksSection contactLinks={contactLinks} />
    </div>
  )
}