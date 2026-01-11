import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: location.state?.message || ''
  });

  useEffect(() => {
    if (location.state?.message) {
      setFormData(prev => ({ ...prev, message: location.state.message }));
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Contact 
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </div>
  );
}
