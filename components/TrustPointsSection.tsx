import type { TrustPoint } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TrustPointsSection({ trustPoints }: { trustPoints: TrustPoint[] }) {
  if (trustPoints.length === 0) return null

  return (
    <section className="border-y border-border/60 bg-card/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">لماذا تختارنا</span>
          <h2 className="mt-3 text-2xl font-extrabold text-foreground sm:text-4xl">
            نلتزم بالجودة والاحترافية في كل مشروع
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => {
            const heading = getMetafieldValue(point.metadata?.heading) || point.title
            const description = getMetafieldValue(point.metadata?.description)
            const icon = getMetafieldValue(point.metadata?.icon) || '✅'

            return (
              <div
                key={point.id}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background/60 p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-2xl">
                  {icon}
                </span>
                <h3 className="text-lg font-bold text-foreground">{heading}</h3>
                {description && (
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}