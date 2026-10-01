import { getCosmic } from '@/lib/cosmic-preview'
import { getServices, getTrustPoints, getContactLinks } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TrustPointsSection from '@/components/TrustPointsSection'
import ContactLinksSection from '@/components/ContactLinksSection'

export default async function HomePage() {
  const { cosmic, previewToken } = await getCosmic()

  const [services, trustPoints, contactLinks] = await Promise.all([
    getServices(cosmic, previewToken),
    getTrustPoints(cosmic, previewToken),
    getContactLinks(cosmic, previewToken),
  ])

  const primaryLink =
    contactLinks.find((link) => Boolean(link.metadata?.primary_button)) || contactLinks[0] || null

  return (
    <>
      <Hero primaryLink={primaryLink} />
      <ServicesSection services={services} />
      <TrustPointsSection trustPoints={trustPoints} />
      <ContactLinksSection contactLinks={contactLinks} />
    </>
  )
}