import type { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'

interface ServicesSectionProps {
  services: Service[]
  showHeading?: boolean
}

export default function ServicesSection({ services, showHeading = true }: ServicesSectionProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {showHeading && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">خدماتنا</span>
            <h2 className="mt-3 text-2xl font-extrabold text-foreground sm:text-4xl">
              حلول برمجية متكاملة تناسب احتياجاتك
            </h2>
            <p className="mt-4 text-muted-foreground">
              من سورسات تلكرام الجاهزة إلى برمجة المواقع والبوتات المتقدمة، نقدم لك كل ما تحتاجه لإطلاق مشروعك.
            </p>
          </div>
        )}

        {services.length === 0 ? (
          <p className="text-center text-muted-foreground">لا توجد خدمات متاحة حالياً.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}