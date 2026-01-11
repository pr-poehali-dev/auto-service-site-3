import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const features = [
    {
      icon: 'Wrench',
      title: 'Наши услуги',
      description: 'Полный спектр ремонта и обслуживания для вашего автомобиля',
      link: '/services'
    },
    {
      icon: 'Calculator',
      title: 'Калькулятор стоимости',
      description: 'Рассчитайте стоимость услуг онлайн за несколько кликов',
      link: '/calculator'
    },
    {
      icon: 'Star',
      title: 'Отзывы клиентов',
      description: 'Более 10,000 довольных клиентов доверяют нам',
      link: '/reviews'
    },
    {
      icon: 'Phone',
      title: 'Связаться с нами',
      description: 'Запишитесь на сервис или получите консультацию',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-bold text-secondary mb-6">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Выберите услугу и познакомьтесь с нашими возможностями
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link}
                className="group"
              >
                <Card className="p-8 hover:shadow-luxury transition-all duration-300 border-2 hover:border-primary/20 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-luxury-sm">
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
