import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Expertise Section - Professional Maritime Authority
 *
 * Design Notes:
 * - Operational language: inspection, compliance, maintenance, monitoring
 * - Unified primary/accent color scheme
 * - Trust metrics with concrete numbers
 * - Technical capability groupings
 */
export default function Expertise() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.expertise.heading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.expertise.description}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {t.expertise.capabilities.map((capability) => (
            <Card
              key={capability.category}
              className="p-8 border-l-4 border-l-accent border border-border bg-gradient-to-br from-white to-muted/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {capability.category}
              </h3>
              <ul className="space-y-4">
                {capability.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Key Strengths - Trust Metrics */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 border-l-4 border-accent">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            {t.expertise.whyChoose}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.expertise.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-foreground font-semibold mb-2">{stat.label}</p>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
