import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.expertise, href: '/expertise' },
    { label: t.nav.environment, href: '/environment' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/assets/images/emies-logo.png"
            alt="EMIES SARLU"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-sm md:text-base font-bold text-primary">EMIES</span>
            <span className="text-xs text-muted-foreground">{t.footer.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors duration-200 hover:text-primary',
                isActive(item.href) ? 'text-primary' : 'text-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button
            asChild
            variant="default"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link href="/contact">{t.nav.getInTouch}</Link>
          </Button>
        </div>

        {/* Mobile: Language Switcher + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              variant="default"
              className="w-full bg-primary hover:bg-primary/90 text-white mt-2"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.getInTouch}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
