import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SERVICES = [
  {
    id: "products",
    label: "Товары",
    icon: "ShoppingBag",
    path: "/products",
    cashback: 5,
    color: "#1a6dff",
    glow: "rgba(26,109,255,0.4)",
    desc: "Электроника, одежда, дом и всё что угодно",
    connected: true,
  },
  {
    id: "travel",
    label: "Путешествия",
    icon: "Plane",
    path: "/travel",
    cashback: 8,
    color: "#00d4ff",
    glow: "rgba(0,212,255,0.4)",
    desc: "Отели, туры, авиабилеты по всему миру",
    connected: true,
  },
  {
    id: "insurance",
    label: "Страхование",
    icon: "Shield",
    path: "/insurance",
    cashback: 6,
    color: "#00c896",
    glow: "rgba(0,200,150,0.4)",
    desc: "ОСАГО, КАСКО и страхование жизни",
    connected: false,
  },
  {
    id: "health",
    label: "Здоровье",
    icon: "Heart",
    path: "/health",
    cashback: 10,
    color: "#ff4d6d",
    glow: "rgba(255,77,109,0.4)",
    desc: "Врачи, клиники, анализы на дому",
    connected: true,
  },
  {
    id: "realty",
    label: "Недвижимость",
    icon: "Building2",
    path: "/realty",
    cashback: 3,
    color: "#7b2fff",
    glow: "rgba(123,47,255,0.4)",
    desc: "Квартиры, дома, ипотека онлайн",
    connected: false,
  },
  {
    id: "finance",
    label: "Финансы",
    icon: "Landmark",
    path: "/finance",
    cashback: 7,
    color: "#ff8c00",
    glow: "rgba(255,140,0,0.4)",
    desc: "МегаКошелёк, переводы, кредиты",
    connected: true,
  },
];

const TIERS = [
  { name: "Старт", min: 0, max: 10000, multiplier: 1, color: "#718096" },
  { name: "Серебро", min: 10000, max: 50000, multiplier: 1.5, color: "#a0aec0" },
  { name: "Золото", min: 50000, max: 150000, multiplier: 2, color: "#f6c90e" },
  { name: "Платина", min: 150000, max: 500000, multiplier: 3, color: "#00d4ff" },
  { name: "Бриллиант", min: 500000, max: Infinity, multiplier: 5, color: "#b794f4" },
];

const HISTORY = [
  { id: 1, service: "Путешествия", desc: "Отель Marriott, Сочи", amount: 18500, cashback: 1480, date: "22 мар", icon: "Plane", color: "#00d4ff" },
  { id: 2, service: "Здоровье", desc: "Консультация кардиолога", amount: 3200, cashback: 320, date: "20 мар", icon: "Heart", color: "#ff4d6d" },
  { id: 3, service: "Товары", desc: "iPhone 15 Pro", amount: 109990, cashback: 5499, date: "18 мар", icon: "ShoppingBag", color: "#1a6dff" },
  { id: 4, service: "Финансы", desc: "Перевод другу", amount: 5000, cashback: 350, date: "15 мар", icon: "Landmark", color: "#ff8c00" },
];

export default function IngoGoPage() {
  const [connected, setConnected] = useState<Set<string>>(
    new Set(SERVICES.filter((s) => s.connected).map((s) => s.id))
  );

  const balance = 12_840;
  const spent = 136_490;
  const currentTier = TIERS.find((t) => spent >= t.min && spent < t.max) || TIERS[0];
  const nextTier = TIERS[TIERS.indexOf(currentTier) + 1];
  const progressToNext = nextTier
    ? ((spent - currentTier.min) / (nextTier.min - currentTier.min)) * 100
    : 100;

  const toggle = (id: string) => {
    setConnected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #050a18 0%, #0a1428 40%, #0d1f3c 100%)",
      }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Animated orbs */}
        <div
          className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-20 blur-[80px]"
          style={{ background: "radial-gradient(circle, #1a6dff, transparent)" }}
        />
        <div
          className="absolute top-[40px] right-[-60px] w-[300px] h-[300px] rounded-full opacity-15 blur-[60px]"
          style={{ background: "radial-gradient(circle, #7b2fff, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-[600px] h-[200px] rounded-full opacity-10 blur-[80px] -translate-x-1/2"
          style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
        />

        <div className="container max-w-6xl mx-auto px-4 pt-14 pb-10 relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border"
              style={{
                background: "rgba(26,109,255,0.15)",
                borderColor: "rgba(26,109,255,0.4)",
                color: "#00d4ff",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#00d4ff" }}
              />
              Экосистема привилегий
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-center text-5xl md:text-7xl font-black mb-4 tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="text-white">Ingo</span>
            <span
              style={{
                background: "linear-gradient(90deg, #1a6dff, #00d4ff, #7b2fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GO
            </span>
          </h1>
          <p className="text-center text-white/50 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Все сервисы в одной экосистеме — и кешбэк до <strong className="text-white">10%</strong> на каждую покупку
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10">
            {[
              { label: "Баланс кешбэка", value: `${balance.toLocaleString("ru")} ₽`, icon: "Wallet", color: "#00d4ff" },
              { label: "Уровень", value: currentTier.name, icon: "Star", color: currentTier.color },
              { label: "Подключено", value: `${connected.size} / ${SERVICES.length}`, icon: "Zap", color: "#00c896" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4 text-center border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2"
                  style={{ background: `${s.color}22` }}
                >
                  <Icon name={s.icon} size={18} style={{ color: s.color }} />
                </div>
                <div className="text-white font-bold text-base leading-tight">{s.value}</div>
                <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center gap-3">
            <Button
              size="lg"
              className="rounded-2xl font-bold px-8 text-white border-0"
              style={{ background: "linear-gradient(135deg, #1a6dff, #7b2fff)" }}
            >
              <Icon name="Rocket" size={18} className="mr-2" />
              Подключить IngoGO
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl font-bold px-8 border-white/20 text-white hover:bg-white/10"
            >
              Условия
            </Button>
          </div>
        </div>
      </div>

      {/* Level progress */}
      <div className="container max-w-6xl mx-auto px-4 mb-10">
        <div
          className="rounded-3xl p-6 border"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-white/50 text-sm mb-1">Текущий уровень</div>
              <div
                className="text-2xl font-black"
                style={{ color: currentTier.color, fontFamily: "'Montserrat', sans-serif" }}
              >
                {currentTier.name}
              </div>
            </div>
            <div className="text-right">
              <div className="text-white/50 text-sm mb-1">Множитель кешбэка</div>
              <div className="text-2xl font-black text-white">×{currentTier.multiplier}</div>
            </div>
          </div>

          <div className="mb-3">
            <Progress value={progressToNext} className="h-3 rounded-full" />
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-white/40">
              Потрачено: <span className="text-white">{spent.toLocaleString("ru")} ₽</span>
            </span>
            {nextTier && (
              <span className="text-white/40">
                До уровня{" "}
                <span style={{ color: nextTier.color }}>{nextTier.name}</span>:{" "}
                <span className="text-white">{(nextTier.min - spent).toLocaleString("ru")} ₽</span>
              </span>
            )}
          </div>

          {/* All tiers */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="flex-1 min-w-[90px] rounded-xl p-3 text-center border transition-all"
                style={{
                  background: tier.name === currentTier.name ? `${tier.color}20` : "rgba(255,255,255,0.03)",
                  borderColor: tier.name === currentTier.name ? tier.color : "rgba(255,255,255,0.08)",
                }}
              >
                <div className="font-bold text-sm" style={{ color: tier.color }}>
                  {tier.name}
                </div>
                <div className="text-white/40 text-xs">×{tier.multiplier}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="container max-w-6xl mx-auto px-4 mb-10">
        <h2
          className="text-2xl font-black text-white mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Подключённые сервисы
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => {
            const on = connected.has(s.id);
            return (
              <div
                key={s.id}
                className="rounded-3xl p-5 border transition-all duration-300 group"
                style={{
                  background: on ? `${s.color}12` : "rgba(255,255,255,0.04)",
                  borderColor: on ? `${s.color}50` : "rgba(255,255,255,0.08)",
                  boxShadow: on ? `0 0 30px ${s.glow}` : "none",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${s.color}25` }}
                  >
                    <Icon name={s.icon} size={22} style={{ color: s.color }} />
                  </div>
                  <button
                    onClick={() => toggle(s.id)}
                    className="relative w-12 h-6 rounded-full transition-all duration-300"
                    style={{
                      background: on
                        ? `linear-gradient(90deg, ${s.color}, ${s.color}cc)`
                        : "rgba(255,255,255,0.15)",
                    }}
                  >
                    <span
                      className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300"
                      style={{ left: on ? "calc(100% - 22px)" : "2px" }}
                    />
                  </button>
                </div>

                <div className="mb-1 flex items-center gap-2">
                  <span className="text-white font-bold text-lg">{s.label}</span>
                  {on && (
                    <Badge
                      className="text-xs border-0 font-bold"
                      style={{ background: `${s.color}30`, color: s.color }}
                    >
                      Активен
                    </Badge>
                  )}
                </div>
                <p className="text-white/40 text-sm mb-4">{s.desc}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-2xl font-black"
                      style={{ color: on ? s.color : "rgba(255,255,255,0.3)" }}
                    >
                      {s.cashback}%
                    </span>
                    <span className="text-white/40 text-sm ml-1">кешбэк</span>
                  </div>
                  <Link to={s.path}>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="rounded-xl text-white/50 hover:text-white hover:bg-white/10 gap-1"
                    >
                      Открыть
                      <Icon name="ArrowRight" size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cashback history */}
      <div className="container max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-2xl font-black text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            История кешбэка
          </h2>
          <Button variant="ghost" className="text-white/40 hover:text-white gap-1">
            Все <Icon name="ChevronRight" size={16} />
          </Button>
        </div>

        <div className="space-y-3">
          {HISTORY.map((h) => (
            <div
              key={h.id}
              className="flex items-center gap-4 rounded-2xl p-4 border transition-all hover:border-white/20"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `${h.color}20` }}
              >
                <Icon name={h.icon} size={20} style={{ color: h.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold truncate">{h.desc}</div>
                <div className="text-white/40 text-sm">
                  {h.service} · {h.date}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-white/60 text-sm">{h.amount.toLocaleString("ru")} ₽</div>
                <div className="text-green-400 font-bold text-sm">+{h.cashback.toLocaleString("ru")} ₽</div>
              </div>
            </div>
          ))}
        </div>

        {/* Total cashback earned */}
        <div
          className="mt-6 rounded-3xl p-6 border text-center"
          style={{
            background: "linear-gradient(135deg, rgba(26,109,255,0.15), rgba(123,47,255,0.15))",
            borderColor: "rgba(26,109,255,0.3)",
          }}
        >
          <div className="text-white/50 text-sm mb-1">Всего заработано кешбэка</div>
          <div
            className="text-4xl font-black mb-2"
            style={{
              background: "linear-gradient(90deg, #1a6dff, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {(7649).toLocaleString("ru")} ₽
          </div>
          <div className="text-white/40 text-sm">за последние 30 дней</div>
          <Button
            className="mt-4 rounded-2xl font-bold text-white border-0"
            style={{ background: "linear-gradient(135deg, #1a6dff, #7b2fff)" }}
          >
            <Icon name="ArrowDownToLine" size={16} className="mr-2" />
            Вывести кешбэк
          </Button>
        </div>
      </div>
    </div>
  );
}