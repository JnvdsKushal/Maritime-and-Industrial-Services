import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Concise expertise preview for the Home page — lists only the four
 * capability category names (not their full bullet lists), plus the
 * headline stat, with a CTA to the full Expertise page.
 */
export default function ExpertisePreview() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t.home.expertisePreview.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.home.expertisePreview.text}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/expertise">
                {t.home.expertisePreview.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-accent">
            <ul className="space-y-4">
              {t.expertise.capabilities.map((capability) => (
                <li key={capability.category} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-semibold">{capability.category}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-accent/30 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-accent">{t.expertise.stats[0].value}</span>
              <span className="text-foreground font-semibold">{t.expertise.stats[0].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
