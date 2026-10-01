'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-5xl">⚠️</span>
      <h2 className="text-2xl font-bold text-foreground">حدث خطأ غير متوقع</h2>
      <p className="text-muted-foreground">نعتذر، حدث خطأ أثناء تحميل الصفحة. حاول مرة أخرى.</p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        إعادة المحاولة
      </button>
    </div>
  )
}