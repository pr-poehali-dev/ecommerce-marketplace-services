import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    category: "Электроника",
    price: 129990,
    oldPrice: 149990,
    rating: 4.9,
    reviews: 2341,
    badge: "Хит",
    badgeColor: "bg-brand-coral",
    img: "📱",
  },
  {
    id: 2,
    name: "MacBook Air M3",
    category: "Ноутбуки",
    price: 119990,
    oldPrice: 139990,
    rating: 4.8,
    reviews: 876,
    badge: "Новинка",
    badgeColor: "bg-brand-blue",
    img: "💻",
  },
  {
    id: 3,
    name: "Samsung QLED 65\"",
    category: "Телевизоры",
    price: 89990,
    oldPrice: 109990,
    rating: 4.7,
    reviews: 543,
    badge: "-18%",
    badgeColor: "bg-brand-green",
    img: "📺",
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    category: "Аксессуары",
    price: 24990,
    oldPrice: 31990,
    rating: 4.9,
    reviews: 5612,
    badge: "-22%",
    badgeColor: "bg-brand-violet",
    img: "🎧",
  },
];

const services = [
  {
    title: "ОСАГО онлайн",
    desc: "За 5 минут без очередей",
    price: "от 2 200 ₽",
    icon: "Car",
    path: "/insurance",
    gradient: "from-brand-green to-brand-cyan",
  },
  {
    title: "Консультация врача",
    desc: "Онлайн 24/7",
    price: "от 800 ₽",
    icon: "Stethoscope",
    path: "/health",
    gradient: "from-brand-coral to-brand-orange",
  },
  {
    title: "Ипотека 5.9%",
    desc: "Решение за 10 минут",
    price: "от 15 000 ₽/мес",
    icon: "Home",
    path: "/realty",
    gradient: "from-brand-blue to-brand-violet",
  },
];

export default function PromoSection() {
  return (
    <>
      {/* Hot deals */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                <span className="text-brand-coral text-sm font-medium">Горячие предложения</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Хиты продаж</h2>
            </div>
            <Link to="/products">
              <Button variant="ghost" className="text-white/60 hover:text-white gap-2">
                Все товары <Icon name="ArrowRight" size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className="group glass rounded-2xl p-4 card-hover border border-white/10 hover:border-white/20"
              >
                {/* Image placeholder */}
                <div className="w-full aspect-square rounded-xl bg-white/5 flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform">
                  {p.img}
                </div>

                <Badge className={`${p.badgeColor} text-white border-0 text-xs mb-2`}>
                  {p.badge}
                </Badge>

                <div className="text-white/50 text-xs mb-1">{p.category}</div>
                <div className="text-white font-medium text-sm mb-2 line-clamp-2 leading-snug">{p.name}</div>

                <div className="flex items-center gap-1 mb-2">
                  <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white/70 text-xs">{p.rating}</span>
                  <span className="text-white/30 text-xs">({p.reviews})</span>
                </div>

                <div className="flex items-end gap-2">
                  <span className="text-white font-bold">{p.price.toLocaleString()} ₽</span>
                  <span className="text-white/30 text-xs line-through">{p.oldPrice.toLocaleString()}</span>
                </div>

                <Button size="sm" className="w-full mt-3 gradient-brand border-0 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  В корзину
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Finance banner */}
      <section className="py-6">
        <div className="container max-w-7xl mx-auto px-4">
          <Link to="/finance">
            <div className="relative glass rounded-2xl p-6 md:p-8 overflow-hidden border border-white/10 hover:border-brand-blue/50 transition-colors group">
              <div className="absolute inset-0 gradient-brand opacity-10 group-hover:opacity-15 transition-opacity" />
              <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-brand-blue/10 blur-2xl" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Landmark" size={20} className="text-brand-cyan" />
                    <span className="text-brand-cyan font-medium">PonyБанк</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    Внутренний банк маркетплейса
                  </h3>
                  <p className="text-white/60">
                    Оплата, кредиты, кешбэк до 10% на все покупки. Без комиссий внутри платформы
                  </p>
                </div>
                <div className="flex gap-4 shrink-0">
                  <div className="glass rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl font-bold text-white">10%</div>
                    <div className="text-white/50 text-xs">Кешбэк</div>
                  </div>
                  <div className="glass rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl font-bold text-white">9.9%</div>
                    <div className="text-white/50 text-xs">Кредит</div>
                  </div>
                  <div className="glass rounded-xl px-4 py-3 text-center">
                    <div className="text-2xl font-bold text-white">0₽</div>
                    <div className="text-white/50 text-xs">Обслуживание</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Quick services */}
      <section className="py-6 pb-12">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Быстрые услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link key={s.path} to={s.path}>
                <div className="group glass rounded-2xl p-5 card-hover border border-white/10 hover:border-white/20 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon name={s.icon} size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">{s.title}</div>
                    <div className="text-white/50 text-sm">{s.desc}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-brand-cyan font-medium text-sm">{s.price}</div>
                    <Icon name="ChevronRight" size={16} className="text-white/30 ml-auto mt-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}