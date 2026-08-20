import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { environmentIcons } from '@/components/Environmental';

/**
 * Concise environmental/sustainability preview for the Home page.
 * Reuses the same initiative icons as the full Environment page.
 */
export default function EnvironmentPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-50/40 to-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.environmentPreview.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.home.environmentPreview.text}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
          {t.environment.initiatives.map((initiative, index) => {
            const Icon = environmentIcons[index];
            return (
              <div key={initiative.title} className="flex flex-col items-center text-center gap-2">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-foreground">{initiative.title}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link href="/environment">
              {t.home.environmentPreview.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
