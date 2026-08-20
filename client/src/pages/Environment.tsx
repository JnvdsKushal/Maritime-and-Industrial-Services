import Header from '@/components/Header';
import Environmental from '@/components/Environmental';
import Footer from '@/components/Footer';

export default function EnvironmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Environmental />
      </main>
      <Footer />
    </div>
  );
}
