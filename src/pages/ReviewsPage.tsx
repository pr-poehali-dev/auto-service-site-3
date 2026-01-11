import Header from '@/components/Header';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}
