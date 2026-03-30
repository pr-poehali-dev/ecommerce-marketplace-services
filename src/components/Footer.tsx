import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const links = {
  "Маркетплейс": [
    { label: "Товары", path: "/products" },
    { label: "Путешествия", path: "/travel" },
    { label: "Страхование", path: "/insurance" },
    { label: "Здоровье", path: "/health" },
    { label: "Недвижимость", path: "/realty" },
    { label: "Финансы", path: "/finance" },
  ],
  "Покупателям": [
    { label: "Корзина", path: "/cart" },
    { label: "Мои заказы", path: "/account/orders" },
    { label: "Личный кабинет", path: "/account" },
    { label: "Программа лояльности", path: "/account/loyalty" },
    { label: "Способы оплаты", path: "/finance" },
  ],
  "Продавцам": [
    { label: "Стать продавцом", path: "/seller" },
    { label: "Личный кабинет", path: "/seller/dashboard" },
    { label: "Тарифы", path: "/seller/pricing" },
  ],
  "Компания": [
    { label: "О нас", path: "/about" },
    { label: "Контакты", path: "/contacts" },
    { label: "Блог", path: "/blog" },
    { label: "Вакансии", path: "/jobs" },
  ],
};

const socials = [
  { icon: "MessageCircle", label: "Telegram", href: "#" },
  { icon: "Youtube", label: "YouTube", href: "#" },
  { icon: "Instagram", label: "VK", href: "#" },
];

export default function Footer() {
  return (
    <footer className="glass-dark border-t border-white/10 mt-auto">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">P</span>
              </div>
              <span className="text-white font-display font-bold text-xl">
                PONY<span className="gradient-text">EXPRESS</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Крупнейший российский маркетплейс товаров и услуг
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={s.label}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div className="text-white/70 font-semibold text-sm mb-3">{section}</div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-white/40 hover:text-white/80 text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-sm">
            © 2026 PonyExpress. Все права защищены
          </div>
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <span className="flex items-center gap-1.5">
              <Icon name="Lock" size={12} />
              Безопасные платежи
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="ShieldCheck" size={12} />
              Защита покупателя
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="Truck" size={12} />
              Доставка по России
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}