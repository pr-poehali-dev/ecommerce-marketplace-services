import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const slides = [
  {
    title: "Всё в одном месте",
    subtitle: "Товары, путешествия, страхование, здоровье, недвижимость и финансы",
    cta: "Начать покупки",
    ctaPath: "/products",
    bg: "https://cdn.poehali.dev/projects/8cf314fe-5f91-42af-a450-9f057f936ad8/files/4b755599-2808-4a04-a724-c10203a71c41.jpg",
    accent: "от 299 ₽",
    badge: "🔥 Хиты продаж",
  },
  {
    title: "Лучшие отели и туры",
    subtitle: "Горящие предложения по всему миру. Бронируй сейчас — плати потом",
    cta: "Смотреть туры",
    ctaPath: "/travel",
    bg: "https://cdn.poehali.dev/projects/8cf314fe-5f91-42af-a450-9f057f936ad8/files/36cf78ce-d050-412b-8f04-2370e5d8cec2.jpg",
    accent: "от 15 000 ₽",
    badge: "✈️ Горящие туры",
  },
  {
    title: "Квартиры и дома",
    subtitle: "Покупка, продажа и аренда недвижимости. Ипотека от 5.9%",
    cta: "Найти жильё",
    ctaPath: "/realty",
    bg: "https://cdn.poehali.dev/projects/8cf314fe-5f91-42af-a450-9f057f936ad8/files/76fc7c18-5a07-4cf0-849d-407666a3c651.jpg",
    accent: "от 2.5 млн ₽",
    badge: "🏠 Недвижимость",
  },
];

const stats = [
  { value: "12M+", label: "Товаров", icon: "Package" },
  { value: "850K", label: "Покупателей", icon: "Users" },
  { value: "4.9★", label: "Рейтинг", icon: "Star" },
  { value: "24/7", label: "Поддержка", icon: "Headphones" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 transition-all duration-1000">
        <img
          src={slide.bg}
          alt=""
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
      </div>

      {/* Animated circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-brand-blue/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-violet/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative container max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="text-sm text-white/90">{slide.badge}</span>
            <span className="h-1 w-1 rounded-full bg-brand-cyan" />
            <span className="text-sm text-brand-cyan font-medium">{slide.accent}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 animate-slide-up leading-tight">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 mb-8 animate-slide-up animate-delay-100 leading-relaxed">
            {slide.subtitle}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4 animate-slide-up animate-delay-200">
            <Link to={slide.ctaPath}>
              <Button size="lg" className="gradient-brand border-0 text-white px-8 py-3 text-base rounded-xl glow-blue hover:scale-105 transition-transform">
                {slide.cta}
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
            <Link to="/account">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-base rounded-xl">
                Войти
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-12 animate-fade-in animate-delay-300">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-brand-blue" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative glass-dark border-t border-white/10">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-blue/20 flex items-center justify-center shrink-0">
                  <Icon name={stat.icon} size={16} className="text-brand-cyan" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
                  <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
