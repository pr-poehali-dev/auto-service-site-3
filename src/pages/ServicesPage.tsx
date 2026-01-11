import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Services />
      </div>
      <Footer />
    </div>
  );
}
