import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    title: 'Замена масла',
    description: 'Полная замена моторного масла и масляного фильтра. Используем только сертифицированные масла ведущих производителей.',
    price: '2 500 ₽',
    duration: '30 мин',
    icon: 'Droplets'
  },
  {
    id: 2,
    title: 'Диагностика двигателя',
    description: 'Компьютерная диагностика всех систем автомобиля. Выявление скрытых неисправностей на современном оборудовании.',
    price: '1 500 ₽',
    duration: '45 мин',
    icon: 'Settings'
  },
  {
    id: 3,
    title: 'Замена тормозных колодок',
    description: 'Замена передних и задних тормозных колодок. Проверка состояния тормозных дисков и суппортов.',
    price: '3 800 ₽',
    duration: '1 час',
    icon: 'CircleStop'
  },
  {
    id: 4,
    title: 'Шиномонтаж',
    description: 'Сезонная замена шин, балансировка колес. Хранение сезонных комплектов колес в отапливаемом помещении.',
    price: '2 000 ₽',
    duration: '40 мин',
    icon: 'Circle'
  },
  {
    id: 5,
    title: 'Ремонт подвески',
    description: 'Диагностика и ремонт ходовой части. Замена амортизаторов, рычагов, сайлентблоков и других элементов.',
    price: 'от 5 000 ₽',
    duration: '2-4 часа',
    icon: 'Wrench'
  },
  {
    id: 6,
    title: 'Кузовной ремонт',
    description: 'Устранение повреждений кузова любой сложности. Покраска в камере с профессиональным оборудованием.',
    price: 'от 8 000 ₽',
    duration: 'от 1 дня',
    icon: 'Paintbrush'
  }
];

const reviews = [
  {
    id: 1,
    name: 'Александр Петров',
    rating: 5,
    text: 'Отличный сервис! Быстро заменили масло, цены приемлемые. Мастера профессионалы своего дела.',
    date: '15 декабря 2025'
  },
  {
    id: 2,
    name: 'Мария Иванова',
    rating: 5,
    text: 'Обращаюсь сюда уже третий год. Всегда качественная работа, честные цены. Рекомендую!',
    date: '10 декабря 2025'
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    rating: 4,
    text: 'Хорошее обслуживание, квалифицированные специалисты. Немного задержались по времени, но результатом доволен.',
    date: '5 декабря 2025'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={32} className="text-primary" />
            <span className="text-2xl font-heading font-bold text-secondary">AutoService</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1">Работаем с 2010 года</Badge>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
              Профессиональный уход за вашим автомобилем
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Качественный ремонт и обслуживание автомобилей всех марок. Гарантия на все работы 6 месяцев.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на сервис
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl font-heading font-bold mb-2">15+</div>
              <div className="text-white/80">лет опыта</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-heading font-bold mb-2">10000+</div>
              <div className="text-white/80">довольных клиентов</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-heading font-bold mb-2">98%</div>
              <div className="text-white/80">положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-heading font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                AutoService — современный автосервис с 15-летним опытом работы. Мы специализируемся на профессиональном 
                обслуживании и ремонте автомобилей всех марок и моделей.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Наша команда состоит из высококвалифицированных мастеров с многолетним опытом. Мы используем только 
                качественные запчасти и современное диагностическое оборудование.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Гарантия на все виды работ 6 месяцев</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Оригинальные запчасти от проверенных поставщиков</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Прозрачное ценообразование без скрытых платежей</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">Комфортная зона ожидания с Wi-Fi и кофе</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-8 backdrop-blur-sm">
                <Icon name="Car" size={200} className="text-primary/20 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-heading">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-secondary mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary mb-1">Телефон</div>
                        <a href="tel:+74951234567" className="text-primary hover:underline">+7 (495) 123-45-67</a>
                        <div className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary mb-1">Адрес</div>
                        <div className="text-foreground">г. Москва, ул. Автомобильная, д. 10</div>
                        <div className="text-sm text-muted-foreground mt-1">5 минут от метро</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-secondary mb-1">Email</div>
                        <a href="mailto:info@autoservice.ru" className="text-primary hover:underline">info@autoservice.ru</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Телефон" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Сообщение" 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={28} className="text-primary" />
                <span className="text-xl font-heading font-bold">AutoService</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Профессиональный ремонт и обслуживание автомобилей с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
                <li><a href="#prices" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@autoservice.ru</li>
                <li>г. Москва, ул. Автомобильная, 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2025 AutoService. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
