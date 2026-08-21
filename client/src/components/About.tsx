import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * About Section - Professional Maritime Authority
 *
 * Design Notes:
 * - Emphasize operational expertise and global reach
 * - Mission/Vision with technical focus
 * - Real maritime imagery showcasing actual services
 * - Action-oriented copy
 */
export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.about.heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">{t.about.missionTitle}</h3>
                <p className="text-muted-foreground">
                  {t.about.missionText}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">{t.about.visionTitle}</h3>
                <p className="text-muted-foreground">
                  {t.about.visionText}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/contact">
                  {t.about.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80 border-l-4 border-accent">
              <img
                src="https://images.openai.com/static-rsc-4/jTuMaqFq_g4SonrDmw14jlOyFOy0YqepUPI-sQGIsRp1OlLQf6tEbICVNMN5bJXXKwJMWsVoddooLkj9UAU9znyJuGsFPu194N5e4FGLl0wAKLrKvsVyxHpMmqNGdmSCrCab35iVvWFKKVAyZcHCiNvQnuqY9QaIJprPMTb5XoHoSUpr4U24gUjL31kbkZW2?purpose=fullsize"
                alt="Industrial Maintenance Services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-64 md:h-80 border-l-4 border-accent">
              <img
                src="https://images.openai.com/static-rsc-4/zcnSvpEQhOLR_ar5YRRlURujBOfWP4_O9J8hNtJO223lI0Rvnxu3h2P52WGFixNSFoLDNozJqtl35g64JlRtFhsnOngIHyVQOftjsnphsTrO2UjYdsMcXOFZ9hX0LGHYi83rMxXY6UMOuhtww8y3zyGYIJHXlRnN3KkqbiCNfkhqnyL8VyKT4pLR9QwoXnBL?purpose=fullsize"
                alt="Vessel Inspection and Surveying"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
