import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import ExpertisePreview from '@/components/home/ExpertisePreview';
import EnvironmentPreview from '@/components/home/EnvironmentPreview';
import FinalCta from '@/components/home/FinalCta';

/**
 * EMIES SARLU Corporate Website
 *
 * Design Philosophy: Professional Maritime Authority
 * - Deep Ocean Blue (#0F3A66) for trust and maritime heritage
 * - Vibrant Teal (#00A8CC) for innovation and energy
 * - Clean typography with Playfair Display for headlines
 * - Asymmetric layouts with strategic white space
 * - Smooth animations and professional interactions
 *
 * Multi-page structure: the full About / Services / Expertise /
 * Environment / Contact content lives on its own dedicated route.
 * Home acts as an overview — Hero, then a short preview of each
 * section (reusing that section's own data/components) with a CTA
 * into the dedicated page, ending on a final contact CTA.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <ExpertisePreview />
        <EnvironmentPreview />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
