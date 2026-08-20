import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Concise company-introduction preview for the Home page.
 * Links to the full About page rather than duplicating its content.
 */
export default function AboutPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-96 border-l-4 border-accent order-2 lg:order-1">
            <img
              src="/manus-storage/industrial-maintenance_403910e1.png"
              alt="EMIES SARLU operations"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">{t.home.aboutPreview.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.home.aboutPreview.text}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/about">
                {t.home.aboutPreview.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
