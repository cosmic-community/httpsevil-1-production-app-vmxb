import Link from 'next/link'
import type { ContactLink } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface HeroProps {
  primaryLink: ContactLink | null
}

export default function Hero({ primaryLink }: HeroProps) {
  const ctaHref = primaryLink ? getMetafieldValue(primaryLink.metadata?.url) || '/contact' : '/contact'
  const isExternal = Boolean(primaryLink && ctaHref !== '/contact')

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          متاحون لاستقبال مشاريع جديدة
        </span>

        <h1 className="text-3xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          نبرمج حلولك الرقمية{' '}
          <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
            باحتراف وثقة
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          سورسات تلكرام جاهزة، برمجة مواقع عصرية، وبرمجة بوتات تلكرام مع استضافة دائمية — كل ما يحتاجه مشروعك
          الرقمي في مكان واحد وبأعلى معايير الجودة.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href={ctaHref}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            تواصل معنا الآن
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-border bg-card/60 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-card"
          >
            استعرض خدماتنا
          </Link>
        </div>
      </div>
    </section>
  )
}