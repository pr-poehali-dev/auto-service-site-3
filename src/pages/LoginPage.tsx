import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/icon';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, name: 'Александр Петров' });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted via-background to-muted p-4">
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <Card className="w-full max-w-md shadow-luxury animate-scale-in relative z-10">
        <CardHeader className="text-center">
          <Link to="/" className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-luxury-sm">
              <Icon name="Car" size={24} className="text-white" />
            </div>
            <span className="text-3xl font-heading font-bold text-secondary">AutoService</span>
          </Link>
          <CardTitle className="text-2xl font-heading">Вход в аккаунт</CardTitle>
          <CardDescription>Введите ваши данные для входа в личный кабинет</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-border" />
                <span className="text-muted-foreground">Запомнить меня</span>
              </label>
              <Link to="/forgot-password" className="text-primary hover:underline">
                Забыли пароль?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-luxury">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Ещё нет аккаунта?{' '}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Зарегистрироваться
              </Link>
            </p>
          </div>
          
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Или войти через</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <Button variant="outline" type="button">
              <Icon name="Mail" size={18} className="mr-2" />
              Google
            </Button>
            <Button variant="outline" type="button">
              <Icon name="Phone" size={18} className="mr-2" />
              Телефон
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
