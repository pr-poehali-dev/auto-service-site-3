import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { services } from '@/components/Services';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const toggleService = (serviceId: number) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return services
      .filter(service => selectedServices.includes(service.id))
      .reduce((total, service) => total + service.priceValue, 0);
  };

  const totalPrice = calculateTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleBooking = () => {
    const serviceNames = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(', ');
    setFormData({ 
      ...formData, 
      message: `Хочу записаться на следующие услуги: ${serviceNames}. Общая стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽`
    });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Calculator 
        selectedServices={selectedServices}
        toggleService={toggleService}
        totalPrice={totalPrice}
        onBooking={handleBooking}
      />
      <About />
      <Reviews />
      <Contact 
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}
