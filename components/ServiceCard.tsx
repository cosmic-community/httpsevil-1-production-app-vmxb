import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const description = getMetafieldValue(service.metadata?.description)
  const price = getMetafieldValue(service.metadata?.price)
  const icon = getMetafieldValue(service.metadata?.icon) || '✨'
  const image = service.metadata?.image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
    >
      {image?.imgix_url ? (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex h-44 w-full items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 text-5xl">
          {icon}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-xl">
            {icon}
          </span>
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
        </div>

        {description && (
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}

        <div className="mt-2 flex items-center justify-between border-t border-border/60 pt-4">
          {price ? (
            <span className="text-sm font-bold text-primary">{price}</span>
          ) : (
            <span className="text-sm text-muted-foreground">تواصل للسعر</span>
          )}
          <span className="text-sm font-semibold text-foreground transition-transform group-hover:-translate-x-1">
            التفاصيل ←
          </span>
        </div>
      </div>
    </Link>
  )
}