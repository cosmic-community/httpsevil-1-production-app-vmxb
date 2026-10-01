import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-6xl">🔍</span>
      <h2 className="text-2xl font-bold text-foreground">الصفحة غير موجودة</h2>
      <p className="text-muted-foreground">عذراً، الصفحة التي تبحث عنها غير متوفرة.</p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
      >
        العودة للرئيسية
      </Link>
    </div>
  )
}