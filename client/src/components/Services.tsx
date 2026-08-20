import { Card } from '@/components/ui/card';
import {
  Anchor,
  Wrench,
  Shield,
  Leaf,
  BookOpen,
  Zap,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Services Section - Professional Maritime Authority
 *
 * Design Notes:
 * - Unified color scheme: Primary (Ocean Blue) and Accent (Teal) only
 * - Staggered 2-column layout for visual rhythm
 * - Left-border accent on cards for technical/industrial feel
 * - Copy emphasizes operational language: inspection, compliance, maintenance, response
 *
 * Icons stay fixed per service slot; text comes from translations so
 * the Home page's ServicesPreview can reuse the same icon/color
 * pairing for its featured subset without duplicating content.
 */
export const serviceIcons = [Anchor, Shield, Wrench, Zap, Leaf, BookOpen];
export const serviceColors = ['text-primary', 'text-accent', 'text-primary', 'text-accent', 'text-primary', 'text-accent'];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.services.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid - Staggered 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            const isStaggered = index % 2 === 1;
            return (
              <div
                key={service.title}
                className={isStaggered ? 'md:mt-8' : ''}
              >
                <Card
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent border border-border bg-white h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${serviceColors[index]} flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Additional Services - Technical Focus */}
        <div className="mt-16 pt-16 border-t-2 border-accent/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {t.services.extra.map((item) => (
              <div key={item.title} className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
