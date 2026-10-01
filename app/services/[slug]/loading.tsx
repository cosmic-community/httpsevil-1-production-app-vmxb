// app/services/[slug]/loading.tsx
export default function ServiceDetailLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary" />
    </div>
  )
}