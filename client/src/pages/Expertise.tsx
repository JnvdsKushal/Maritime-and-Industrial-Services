import Header from '@/components/Header';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Footer';

export default function ExpertisePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}
