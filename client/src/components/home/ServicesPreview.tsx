import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceIcons, serviceColors } from '@/components/Services';

const FEATURED_COUNT = 3;

/**
 * Featured-services preview for the Home page. Reuses the same
 * service data, icons, and card styling as the full Services page —
 * just the first three entries, with a CTA to see the rest.
 */
export default function ServicesPreview() {
  const { t } = useLanguage();
  const featured = t.services.items.slice(0, FEATURED_COUNT);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.servicesPreview.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.home.servicesPreview.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <Card
                key={service.title}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent border border-border bg-white h-full"
              >
<div
  className={`w-fit h-fit p-3 rounded-lg bg-primary/10 ${serviceColors[index]} flex items-center justify-center mb-4`}
>
  <Icon className="w-6 h-6 shrink-0" />
</div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
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
            <Link href="/services">
              {t.home.servicesPreview.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
