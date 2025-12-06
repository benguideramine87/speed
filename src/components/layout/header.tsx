import Link from 'next/link';
import { Plane, BedDouble, Car, Bot, Globe, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const navLinks = [
    { href: "/flights", label: "رحلات جوية", icon: <Plane className="h-5 w-5" /> },
    { href: "/hotels", label: "فنادق", icon: <BedDouble className="h-5 w-5" /> },
    { href: "/transfers", label: "نقل", icon: <Car className="h-5 w-5" /> },
    { href: "/ai-recommendations", label: "توصيات الذكاء الاصطناعي", icon: <Bot className="h-5 w-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl">سفرنا</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">إنشاء حساب</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-6">
                  <Globe className="h-7 w-7 text-primary" />
                  <span className="font-bold text-xl">سفرنا</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 text-lg"
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="border-t pt-6 mt-6 flex flex-col gap-2">
                  <Button asChild variant="ghost" className="justify-start">
                    <Link href="/login">تسجيل الدخول</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">إنشاء حساب</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
