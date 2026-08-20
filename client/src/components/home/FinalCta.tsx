import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Final call-to-action band shown just before the Footer, encouraging
 * visitors to reach out. Styled with the existing primary/accent
 * palette to stay consistent with the rest of the site.
 */
export default function FinalCta() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.home.finalCta.heading}
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.home.finalCta.text}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        >
          <Link href="/contact">
            {t.home.finalCta.cta}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
