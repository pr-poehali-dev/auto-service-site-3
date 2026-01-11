import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import { services } from '@/components/Services';

export default function CalculatorPage() {
  const navigate = useNavigate();
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

  const handleBooking = () => {
    const serviceNames = services
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(', ');
    
    navigate('/contact', { 
      state: { 
        message: `Хочу записаться на следующие услуги: ${serviceNames}. Общая стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽`
      } 
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Calculator 
          selectedServices={selectedServices}
          toggleService={toggleService}
          totalPrice={totalPrice}
          onBooking={handleBooking}
        />
      </div>
      <Footer />
    </div>
  );
}
