import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-background scroll-mt-20">
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
  );
}
