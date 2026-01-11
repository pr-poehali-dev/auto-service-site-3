import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const user = {
    name: 'Александр Петров',
    email: 'alexander@example.com',
    phone: '+7 (905) 123-45-67',
    carModel: 'BMW X5 2020',
    carNumber: 'А123БВ777',
    totalVisits: 12,
    totalSpent: 145600
  };

  const bookings = [
    {
      id: 1,
      date: '2026-01-15',
      time: '10:00',
      services: ['Замена масла', 'Диагностика двигателя'],
      status: 'confirmed',
      price: 4000
    },
    {
      id: 2,
      date: '2026-01-20',
      time: '14:30',
      services: ['Шиномонтаж'],
      status: 'pending',
      price: 2000
    }
  ];

  const orderHistory = [
    {
      id: 101,
      date: '2025-12-10',
      services: ['Замена тормозных колодок', 'Развал-схождение'],
      price: 6000,
      status: 'completed'
    },
    {
      id: 102,
      date: '2025-11-05',
      services: ['Замена масла', 'Замена свечей зажигания'],
      price: 4300,
      status: 'completed'
    },
    {
      id: 103,
      date: '2025-10-15',
      services: ['Диагностика двигателя', 'Ремонт системы охлаждения'],
      price: 5000,
      status: 'completed'
    }
  ];

  const statusLabels = {
    confirmed: { label: 'Подтверждено', color: 'bg-green-500' },
    pending: { label: 'Ожидает', color: 'bg-yellow-500' },
    completed: { label: 'Выполнено', color: 'bg-blue-500' }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl font-heading font-bold text-secondary mb-4">Личный кабинет</h1>
              <p className="text-xl text-muted-foreground">Управляйте вашими записями и профилем</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <Card className="animate-slide-up shadow-luxury">
                  <CardHeader className="text-center pb-4">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl font-heading bg-gradient-to-br from-primary to-accent text-white">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl font-heading">{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Phone" size={18} className="text-primary" />
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Car" size={18} className="text-primary" />
                      <div>
                        <div className="font-medium">{user.carModel}</div>
                        <div className="text-muted-foreground">{user.carNumber}</div>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-heading font-bold text-primary">{user.totalVisits}</div>
                          <div className="text-xs text-muted-foreground">Визитов</div>
                        </div>
                        <div>
                          <div className="text-3xl font-heading font-bold text-accent">{(user.totalSpent / 1000).toFixed(0)}к</div>
                          <div className="text-xs text-muted-foreground">Потрачено</div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Icon name="Settings" size={18} className="mr-2" />
                      Редактировать профиль
                    </Button>
                  </CardContent>
                </Card>

                <Card className="animate-slide-up shadow-luxury" style={{ animationDelay: '0.1s' }}>
                  <CardHeader>
                    <CardTitle className="text-lg font-heading flex items-center gap-2">
                      <Icon name="Award" size={20} className="text-accent" />
                      Статус клиента
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">VIP клиент</span>
                        <Badge className="bg-gradient-to-r from-primary to-accent">Премиум</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Скидка 15% на все услуги
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Tabs defaultValue="bookings" className="animate-fade-in">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="bookings">Активные записи</TabsTrigger>
                    <TabsTrigger value="history">История заказов</TabsTrigger>
                  </TabsList>

                  <TabsContent value="bookings" className="space-y-4">
                    {bookings.map((booking, index) => (
                      <Card 
                        key={booking.id} 
                        className="hover:shadow-luxury transition-all duration-300 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl font-heading mb-2">
                                Запись #{booking.id}
                              </CardTitle>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Icon name="Calendar" size={16} />
                                  {new Date(booking.date).toLocaleDateString('ru-RU', { 
                                    day: 'numeric', 
                                    month: 'long' 
                                  })}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Icon name="Clock" size={16} />
                                  {booking.time}
                                </div>
                              </div>
                            </div>
                            <Badge className={statusLabels[booking.status as keyof typeof statusLabels].color}>
                              {statusLabels[booking.status as keyof typeof statusLabels].label}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div>
                              <div className="text-sm font-medium mb-2">Услуги:</div>
                              <div className="flex flex-wrap gap-2">
                                {booking.services.map((service, idx) => (
                                  <Badge key={idx} variant="outline">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-3 border-t">
                              <div className="text-2xl font-heading font-bold text-primary">
                                {booking.price.toLocaleString('ru-RU')} ₽
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Icon name="Pencil" size={16} className="mr-1" />
                                  Изменить
                                </Button>
                                <Button variant="destructive" size="sm">
                                  <Icon name="X" size={16} className="mr-1" />
                                  Отменить
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    {bookings.length === 0 && (
                      <Card className="p-12 text-center">
                        <Icon name="CalendarX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground mb-4">У вас пока нет активных записей</p>
                        <Button>
                          <Icon name="Plus" size={18} className="mr-2" />
                          Записаться на услугу
                        </Button>
                      </Card>
                    )}
                  </TabsContent>

                  <TabsContent value="history" className="space-y-4">
                    {orderHistory.map((order, index) => (
                      <Card 
                        key={order.id}
                        className="hover:shadow-luxury-sm transition-all duration-300 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg font-heading mb-2">
                                Заказ #{order.id}
                              </CardTitle>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Icon name="Calendar" size={16} />
                                {new Date(order.date).toLocaleDateString('ru-RU', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric'
                                })}
                              </div>
                            </div>
                            <Badge className={statusLabels.completed.color}>
                              {statusLabels.completed.label}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="text-sm">
                              {order.services.map((service, idx) => (
                                <div key={idx} className="flex items-center gap-2 mb-1">
                                  <Icon name="CheckCircle2" size={14} className="text-green-600" />
                                  <span>{service}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t">
                              <div className="text-xl font-heading font-bold">
                                {order.price.toLocaleString('ru-RU')} ₽
                              </div>
                              <Button variant="outline" size="sm">
                                <Icon name="FileText" size={16} className="mr-1" />
                                Посмотреть чек
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
