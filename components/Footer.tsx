import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-lg font-bold text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              ⚡
            </span>
            نكس كود
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              الرئيسية
            </Link>
            <Link href="/services" className="hover:text-foreground">
              خدماتنا
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              تواصل معنا
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {year} نكس كود. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}