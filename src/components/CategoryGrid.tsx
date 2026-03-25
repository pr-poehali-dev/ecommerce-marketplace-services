import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const categories = [
  {
    label: "Товары",
    path: "/products",
    icon: "ShoppingBag",
    desc: "Электроника, одежда, дом",
    gradient: "from-brand-blue to-brand-violet",
    glow: "glow-blue",
    count: "12M+ товаров",
    emoji: "🛍️",
  },
  {
    label: "Путешествия",
    path: "/travel",
    icon: "Plane",
    desc: "Отели, туры, авиабилеты",
    gradient: "from-brand-cyan to-brand-blue",
    glow: "glow-blue",
    count: "50K+ отелей",
    emoji: "✈️",
  },
  {
    label: "Страхование",
    path: "/insurance",
    icon: "Shield",
    desc: "ОСАГО, КАСКО, здоровье",
    gradient: "from-brand-green to-brand-cyan",
    glow: "",
    count: "ОСАГО от 2 200 ₽",
    emoji: "🛡️",
  },
  {
    label: "Здоровье",
    path: "/health",
    icon: "Heart",
    desc: "Врачи, клиники, аптека",
    gradient: "from-brand-coral to-brand-orange",
    glow: "glow-coral",
    count: "5K+ специалистов",
    emoji: "❤️",
  },
  {
    label: "Недвижимость",
    path: "/realty",
    icon: "Building2",
    desc: "Квартиры, дома, участки",
    gradient: "from-brand-orange to-brand-coral",
    glow: "glow-coral",
    count: "200K+ объявлений",
    emoji: "🏠",
  },
  {
    label: "Финансы",
    path: "/finance",
    icon: "Landmark",
    desc: "Банк, кредиты, инвестиции",
    gradient: "from-brand-violet to-brand-blue",
    glow: "glow-violet",
    count: "Кредит от 9.9%",
    emoji: "💳",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-[#0d1b3e]/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Все категории
            </h2>
            <p className="text-white/50 mt-1">Всё что нужно — в одном месте</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className={`group relative glass rounded-2xl p-5 card-hover border border-white/10 hover:border-white/20 overflow-hidden ${cat.glow}`}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={cat.icon} size={22} className="text-white" />
              </div>

              {/* Content */}
              <div className="font-semibold text-white text-sm mb-1">{cat.label}</div>
              <div className="text-white/50 text-xs mb-2 leading-tight">{cat.desc}</div>
              <div className="text-white/30 text-xs font-medium">{cat.count}</div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="ArrowUpRight" size={16} className="text-white/50" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
