import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const types = [
  { id: "osago", label: "ОСАГО", icon: "Car", desc: "Обязательное страхование авто", price: "от 2 200 ₽", color: "from-brand-green to-brand-cyan" },
  { id: "kasko", label: "КАСКО", icon: "Shield", desc: "Защита вашего автомобиля", price: "от 18 000 ₽", color: "from-brand-blue to-brand-violet" },
  { id: "life", label: "Жизнь и здоровье", icon: "HeartPulse", desc: "Страхование от несчастных случаев", price: "от 1 200 ₽/год", color: "from-brand-coral to-brand-orange" },
  { id: "property", label: "Имущество", icon: "Home", desc: "Квартира, дом, дача", price: "от 800 ₽/год", color: "from-brand-violet to-brand-blue" },
  { id: "travel_ins", label: "Путешествия", icon: "Plane", desc: "ВЗР для поездок за рубеж", price: "от 300 ₽", color: "from-brand-cyan to-brand-blue" },
  { id: "mortgage", label: "Ипотека", icon: "Building2", desc: "Страхование заёмщика", price: "от 0.15% в год", color: "from-brand-orange to-brand-coral" },
];

const companies = [
  { name: "СберСтрахование", rating: 4.9, price: "2 340 ₽", logo: "🏦" },
  { name: "Альфастрахование", rating: 4.8, price: "2 480 ₽", logo: "🛡️" },
  { name: "РЕСО-Гарантия", rating: 4.7, price: "2 190 ₽", logo: "🔵" },
  { name: "Тинькофф Страхование", rating: 4.8, price: "2 620 ₽", logo: "🟡" },
];

export default function InsurancePage() {
  const [active, setActive] = useState("osago");
  const [plate, setPlate] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen gradient-hero">
      {/* Banner */}
      <div className="relative glass-dark border-b border-white/10 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 to-brand-cyan/10" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">🛡️ Страхование</h1>
          <p className="text-white/60">Оформите полис онлайн за 5 минут. ОСАГО, КАСКО, жизнь и имущество</p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Types */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`glass rounded-2xl p-4 text-left transition-all border ${
                active === t.id ? "border-brand-blue/50 bg-brand-blue/10" : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-2`}>
                <Icon name={t.icon} size={18} className="text-white" />
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">{t.label}</div>
              <div className="text-brand-cyan text-xs font-medium">{t.price}</div>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="glass rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-display font-bold text-white mb-5">
              Рассчитать {types.find((t) => t.id === active)?.label}
            </h2>

            {active === "osago" && (
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Гос. номер автомобиля</label>
                  <Input
                    placeholder="А000АА 77"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl uppercase"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Регион</label>
                    <Input placeholder="Москва" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl" />
                  </div>
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">Мощность, л.с.</label>
                    <Input placeholder="150" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Стаж вождения</label>
                  <select className="w-full glass text-white text-sm rounded-xl px-3 py-2.5 border border-white/20 bg-transparent">
                    <option value="1" className="bg-gray-900">Менее 1 года</option>
                    <option value="3" className="bg-gray-900">1–3 года</option>
                    <option value="5" className="bg-gray-900">3–5 лет</option>
                    <option value="10" className="bg-gray-900">Более 5 лет</option>
                  </select>
                </div>
                <Button
                  className="w-full gradient-brand border-0 text-white rounded-xl py-3"
                  onClick={() => setStep(2)}
                >
                  Рассчитать стоимость
                  <Icon name="Calculator" size={16} className="ml-2" />
                </Button>
              </div>
            )}

            {active !== "osago" && (
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Контактный телефон</label>
                  <Input placeholder="+7 (999) 000-00-00" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl" />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Сумма страхования</label>
                  <Input placeholder="1 000 000 ₽" className="bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl" />
                </div>
                <Button className="w-full gradient-brand border-0 text-white rounded-xl py-3" onClick={() => setStep(2)}>
                  Получить предложения
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            )}
          </div>

          {/* Results / Info */}
          <div>
            {step === 2 ? (
              <div className="space-y-3">
                <h3 className="text-white font-semibold mb-4">Лучшие предложения:</h3>
                {companies.map((c) => (
                  <div key={c.name} className="glass rounded-xl p-4 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{c.logo}</div>
                      <div>
                        <div className="text-white font-medium">{c.name}</div>
                        <div className="flex items-center gap-1 text-white/50 text-sm">
                          <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                          {c.rating}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">{c.price}</div>
                      <Button size="sm" className="gradient-brand border-0 text-white rounded-lg mt-1">
                        Оформить
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Info" size={18} className="text-brand-cyan" />
                  Как это работает
                </h3>
                <div className="space-y-4">
                  {[
                    { n: "01", text: "Введите данные и получите расчёт за 30 секунд" },
                    { n: "02", text: "Сравните предложения от топ-страховщиков" },
                    { n: "03", text: "Оплатите онлайн через PonyКошелёк" },
                    { n: "04", text: "Получите полис на email мгновенно" },
                  ].map((step) => (
                    <div key={step.n} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center shrink-0 text-white text-xs font-bold">
                        {step.n}
                      </div>
                      <p className="text-white/70 text-sm pt-1">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}