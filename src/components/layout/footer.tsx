import Link from 'next/link';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">سفرنا</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">عنا</Link>
            <Link href="/contact" className="hover:text-foreground">اتصل بنا</Link>
            <Link href="/privacy" className="hover:text-foreground">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-foreground">شروط الخدمة</Link>
          </nav>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} سفرنا. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
