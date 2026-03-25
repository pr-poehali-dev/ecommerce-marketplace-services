import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const tabs = [
  { id: "profile", label: "Профиль", icon: "User" },
  { id: "orders", label: "Заказы", icon: "Package" },
  { id: "favorites", label: "Избранное", icon: "Heart" },
  { id: "reviews", label: "Отзывы", icon: "Star" },
  { id: "bonuses", label: "Бонусы", icon: "Gift" },
];

const orders = [
  { id: "MG-2024-001", status: "Доставляется", date: "25 марта 2026", total: 154980, items: ["iPhone 16 Pro Max", "AirPods Pro 2"], statusColor: "bg-brand-blue" },
  { id: "MG-2024-002", status: "Получен", date: "18 марта 2026", total: 34990, items: ["Робот-пылесос Xiaomi"], statusColor: "bg-brand-green" },
  { id: "MG-2024-003", status: "Отменён", date: "10 марта 2026", total: 12990, items: ["Nike Air Max 270"], statusColor: "bg-brand-coral" },
];

const favorites = [
  { id: 1, name: "MacBook Air M3", price: 119990, img: "💻" },
  { id: 2, name: "PS5 Digital Edition", price: 49990, img: "🎮" },
  { id: 3, name: "Samsung QLED 65\"", price: 89990, img: "📺" },
];

export default function AccountPage() {
  const [active, setActive] = useState("profile");
  const [isLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
        <div className="glass rounded-2xl p-8 w-full max-w-md border border-white/10 text-center">
          <div className="text-6xl mb-4">👤</div>
          <h2 className="text-2xl font-display font-bold text-white mb-2">Вход в аккаунт</h2>
          <p className="text-white/50 mb-6">Войдите, чтобы делать покупки и управлять заказами</p>
          <div className="space-y-3">
            <Input placeholder="+7 (999) 000-00-00" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
            <Button className="w-full gradient-brand border-0 text-white rounded-xl py-3">
              Получить код
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero">
      {/* Banner */}
      <div className="relative glass-dark border-b border-white/10 py-8 overflow-hidden">
        <div className="absolute inset-0 gradient-brand opacity-5" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-white">Александр Петров</h1>
              <div className="flex items-center gap-3 text-white/50 text-sm mt-1">
                <span>+7 (999) 123-45-67</span>
                <span>·</span>
                <span className="flex items-center gap-1 text-brand-cyan">
                  <Icon name="Crown" size={14} />
                  Золотой статус
                </span>
              </div>
            </div>
            <div className="ml-auto glass rounded-xl px-4 py-2 text-center hidden md:block">
              <div className="text-white font-bold text-xl">3 420 ₽</div>
              <div className="text-white/40 text-xs">Бонусов</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-56 shrink-0">
            <nav className="space-y-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                    active === t.id
                      ? "gradient-brand text-white"
                      : "glass text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon name={t.icon} size={16} />
                  {t.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/10">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-brand-coral hover:bg-brand-coral/10 transition-all">
                  <Icon name="LogOut" size={16} />
                  Выйти
                </button>
              </div>
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            {active === "profile" && (
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-display font-bold text-white mb-5">Личные данные</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Имя</label>
                    <Input defaultValue="Александр" className="bg-white/10 border-white/20 text-white rounded-xl" />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Фамилия</label>
                    <Input defaultValue="Петров" className="bg-white/10 border-white/20 text-white rounded-xl" />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Телефон</label>
                    <Input defaultValue="+7 (999) 123-45-67" className="bg-white/10 border-white/20 text-white rounded-xl" />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Email</label>
                    <Input defaultValue="a.petrov@mail.ru" className="bg-white/10 border-white/20 text-white rounded-xl" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-white/60 text-sm mb-1.5 block">Адрес доставки</label>
                    <Input placeholder="Город, улица, дом, квартира" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
                  </div>
                </div>
                <Button className="mt-5 gradient-brand border-0 text-white rounded-xl">
                  Сохранить изменения
                </Button>
              </div>
            )}

            {active === "orders" && (
              <div className="space-y-3">
                {orders.map((o) => (
                  <div key={o.id} className="glass rounded-2xl p-5 border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-white font-medium">{o.id}</div>
                        <div className="text-white/40 text-sm">{o.date}</div>
                      </div>
                      <Badge className={`${o.statusColor} text-white border-0`}>{o.status}</Badge>
                    </div>
                    <div className="text-white/60 text-sm mb-3">
                      {o.items.join(", ")}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">{o.total.toLocaleString()} ₽</span>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {active === "favorites" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {favorites.map((f) => (
                  <div key={f.id} className="glass rounded-2xl p-4 border border-white/10 card-hover">
                    <div className="text-5xl text-center mb-3">{f.img}</div>
                    <div className="text-white font-medium text-sm mb-2">{f.name}</div>
                    <div className="text-white font-bold mb-3">{f.price.toLocaleString()} ₽</div>
                    <Button size="sm" className="w-full gradient-brand border-0 text-white rounded-lg">
                      В корзину
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {active === "bonuses" && (
              <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-6xl font-display font-bold text-white mb-1">3 420</div>
                  <div className="text-white/50">бонусных рублей</div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="glass rounded-xl p-3 text-center">
                    <div className="text-white font-bold text-xl">Gold</div>
                    <div className="text-white/40 text-xs">Статус</div>
                  </div>
                  <div className="glass rounded-xl p-3 text-center">
                    <div className="text-white font-bold text-xl">5%</div>
                    <div className="text-white/40 text-xs">Кешбэк</div>
                  </div>
                  <div className="glass rounded-xl p-3 text-center">
                    <div className="text-white font-bold text-xl">12</div>
                    <div className="text-white/40 text-xs">Заказов</div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">До статуса Platinum</span>
                    <span className="text-white">85 000 / 100 000 ₽</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full gradient-brand rounded-full" style={{ width: "85%" }} />
                  </div>
                  <div className="text-white/40 text-xs mt-2">Ещё 15 000 ₽ до Platinum</div>
                </div>
              </div>
            )}

            {(active === "reviews") && (
              <div className="glass rounded-2xl p-8 border border-white/10 text-center">
                <div className="text-5xl mb-3">⭐</div>
                <div className="text-white font-semibold mb-2">Отзывов пока нет</div>
                <div className="text-white/40 text-sm">После получения заказа оставьте отзыв о товаре</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
