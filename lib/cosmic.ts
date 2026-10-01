import { createBucketClient } from '@cosmicjs/sdk'
import type { Service, TrustPoint, ContactLink } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export type CosmicClient = typeof cosmic

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely converts any metadata field value (string, number, boolean, or
// legacy { key, value } object) into a plain string for rendering in JSX.
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

function sortByDisplayOrder<T extends { metadata?: { display_order?: number } }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const orderA = a.metadata?.display_order ?? 0
    const orderB = b.metadata?.display_order ?? 0
    return orderA - orderB
  })
}

export async function getServices(client: CosmicClient, previewToken?: string): Promise<Service[]> {
  try {
    const query = client.objects
      .find({ type: 'services' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const response = previewToken ? await query.status('any') : await query
    return sortByDisplayOrder(response.objects as Service[])
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('فشل تحميل الخدمات')
  }
}

export async function getServiceBySlug(
  client: CosmicClient,
  slug: string,
  previewToken?: string
): Promise<Service | null> {
  try {
    const query = client.objects
      .findOne({ type: 'services', slug })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const response = previewToken ? await query.status('any') : await query
    return (response.object as Service) ?? null
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('فشل تحميل الخدمة')
  }
}

export async function getTrustPoints(client: CosmicClient, previewToken?: string): Promise<TrustPoint[]> {
  try {
    const query = client.objects
      .find({ type: 'trust-points' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const response = previewToken ? await query.status('any') : await query
    return sortByDisplayOrder(response.objects as TrustPoint[])
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('فشل تحميل نقاط الثقة')
  }
}

export async function getContactLinks(client: CosmicClient, previewToken?: string): Promise<ContactLink[]> {
  try {
    const query = client.objects
      .find({ type: 'contact-links' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    const response = previewToken ? await query.status('any') : await query
    return sortByDisplayOrder(response.objects as ContactLink[])
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('فشل تحميل روابط التواصل')
  }
}