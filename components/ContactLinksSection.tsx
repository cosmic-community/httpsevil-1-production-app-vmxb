import type { ContactLink } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

function getLinkIcon(linkType: string, label: string): string {
  const text = `${linkType} ${label}`.toLowerCase()
  if (text.includes('telegram') || text.includes('تلكرام') || text.includes('تيليجرام')) return '✈️'
  if (text.includes('whatsapp') || text.includes('واتس')) return '🟢'
  if (text.includes('email') || text.includes('بريد') || text.includes('mail')) return '✉️'
  if (text.includes('phone') || text.includes('هاتف') || text.includes('اتصال')) return '📞'
  if (text.includes('instagram') || text.includes('انستغرام')) return '📷'
  if (text.includes('twitter') || text.includes('x.com') || text.includes('تويتر')) return '🐦'
  if (text.includes('discord') || text.includes('ديسكورد')) return '🎮'
  return '🔗'
}

interface ContactLinksSectionProps {
  contactLinks: ContactLink[]
  showHeading?: boolean
}

export default function ContactLinksSection({ contactLinks, showHeading = true }: ContactLinksSectionProps) {
  if (contactLinks.length === 0) {
    return (
      <section className="px-4 py-16 text-center sm:px-6">
        <p className="text-muted-foreground">لا توجد روابط تواصل متاحة حالياً.</p>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        {showHeading && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">تواصل معنا</span>
            <h2 className="mt-3 text-2xl font-extrabold text-foreground sm:text-4xl">
              نحن هنا للإجابة على جميع استفساراتك
            </h2>
            <p className="mt-4 text-muted-foreground">
              اختر وسيلة التواصل الأنسب لك وسنرد عليك في أقرب وقت ممكن.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => {
            const label = getMetafieldValue(link.metadata?.label) || link.title
            const url = getMetafieldValue(link.metadata?.url) || '#'
            const linkType = getMetafieldValue(link.metadata?.link_type)
            const isPrimary = Boolean(link.metadata?.primary_button)
            const icon = getLinkIcon(linkType, label)

            return (
              <a
                key={link.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 rounded-2xl border p-5 transition-all hover:-translate-y-0.5 ${
                  isPrimary
                    ? 'border-primary/60 bg-primary/10 hover:bg-primary/15'
                    : 'border-border bg-card/60 hover:border-primary/40'
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background/60 text-2xl">
                  {icon}
                </span>
                <div className="flex flex-1 flex-col text-right">
                  <span className="font-bold text-foreground">{label}</span>
                  {linkType && <span className="text-xs text-muted-foreground">{linkType}</span>}
                </div>
                <span className="text-lg text-muted-foreground">←</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}