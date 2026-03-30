import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const tabs = [
  { id: "wallet", label: "Кошелёк", icon: "Wallet" },
  { id: "credits", label: "Кредиты", icon: "CreditCard" },
  { id: "invest", label: "Инвестиции", icon: "TrendingUp" },
  { id: "transfers", label: "Переводы", icon: "ArrowLeftRight" },
];

const transactions = [
  { id: 1, title: "Покупка iPhone 16 Pro", amount: -129990, date: "Сегодня, 14:32", icon: "ShoppingBag", color: "text-brand-coral" },
  { id: 2, title: "Кешбэк за покупки", amount: +1300, date: "Сегодня, 14:32", icon: "Gift", color: "text-brand-green" },
  { id: 3, title: "Оплата ОСАГО", amount: -2340, date: "Вчера, 10:15", icon: "Shield", color: "text-brand-coral" },
  { id: 4, title: "Пополнение счёта", amount: +50000, date: "24 марта, 09:00", icon: "ArrowDownCircle", color: "text-brand-green" },
  { id: 5, title: "Бронирование отеля", amount: -12500, date: "23 марта, 16:44", icon: "Hotel", color: "text-brand-coral" },
];

const creditProducts = [
  { name: "Кредит наличными", rate: "от 9.9%", amount: "до 5 млн ₽", term: "до 7 лет", icon: "Banknote", color: "from-brand-blue to-brand-violet" },
  { name: "Кредитная карта", rate: "0% до 180 дней", amount: "до 500 000 ₽", term: "Беспроцентный период", icon: "CreditCard", color: "from-brand-violet to-brand-coral" },
  { name: "Рассрочка на маркетплейсе", rate: "0% рассрочка", amount: "до 150 000 ₽", term: "до 24 месяцев", icon: "ShoppingCart", color: "from-brand-green to-brand-cyan" },
  { name: "Ипотека", rate: "от 5.5%", amount: "до 50 млн ₽", term: "до 30 лет", icon: "Home", color: "from-brand-orange to-brand-coral" },
];

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState("wallet");
  const [amount, setAmount] = useState("");

  const balance = 47650;
  const cashback = 3420;

  return (
    <div className="min-h-screen gradient-hero">
      {/* Banner */}
      <div className="relative glass-dark border-b border-white/10 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/10 to-brand-blue/10" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">💳 Финансы</h1>
          <p className="text-white/60">PonyБанк — внутренний банк маркетплейса. Без комиссий, кешбэк до 10%</p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Balance cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass rounded-2xl p-5 border border-white/10 relative overflow-hidden md:col-span-1">
            <div className="absolute inset-0 gradient-brand opacity-10" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/60 text-sm flex items-center gap-2">
                  <Icon name="Wallet" size={16} />
                  PonyКошелёк
                </span>
                <span className="text-brand-cyan text-xs glass px-2 py-0.5 rounded-md">Активен</span>
              </div>
              <div className="text-4xl font-display font-bold text-white mb-1">
                {balance.toLocaleString()} ₽
              </div>
              <div className="text-white/40 text-sm">Доступно к расходованию</div>
              <div className="flex gap-2 mt-4">
                <Button size="sm" className="flex-1 gradient-brand border-0 text-white rounded-lg gap-1">
                  <Icon name="Plus" size={14} /> Пополнить
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 rounded-lg gap-1">
                  <Icon name="ArrowUp" size={14} /> Вывести
                </Button>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 border border-white/10">
            <div className="text-white/60 text-sm flex items-center gap-2 mb-4">
              <Icon name="Gift" size={16} className="text-brand-orange" />
              Кешбэк
            </div>
            <div className="text-4xl font-display font-bold text-white mb-1">{cashback.toLocaleString()} ₽</div>
            <div className="text-white/40 text-sm mb-3">Накоплено за всё время</div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Товары</span>
                <span className="text-brand-orange">5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Путешествия</span>
                <span className="text-brand-orange">7%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">Остальное</span>
                <span className="text-brand-orange">3%</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-5 border border-white/10">
            <div className="text-white/60 text-sm flex items-center gap-2 mb-4">
              <Icon name="TrendingUp" size={16} className="text-brand-green" />
              Накопления
            </div>
            <div className="text-4xl font-display font-bold text-white mb-1">0 ₽</div>
            <div className="text-white/40 text-sm mb-3">Вклад 8.5% годовых</div>
            <Button size="sm" className="w-full bg-brand-green/20 border border-brand-green/30 text-brand-green hover:bg-brand-green/30 rounded-lg">
              Открыть вклад
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === t.id ? "gradient-brand text-white" : "glass text-white/60 hover:text-white"
              }`}
            >
              <Icon name={t.icon} size={15} />
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "wallet" && (
          <div className="glass rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-white font-semibold">История операций</h3>
              <Button variant="ghost" size="sm" className="text-white/50 hover:text-white">
                Все <Icon name="ChevronRight" size={14} className="ml-1" />
              </Button>
            </div>
            {transactions.map((tr) => (
              <div key={tr.id} className="flex items-center gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <Icon name={tr.icon} size={18} className={tr.color} />
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">{tr.title}</div>
                  <div className="text-white/40 text-xs">{tr.date}</div>
                </div>
                <div className={`font-bold ${tr.amount > 0 ? "text-brand-green" : "text-white"}`}>
                  {tr.amount > 0 ? "+" : ""}{tr.amount.toLocaleString()} ₽
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "credits" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {creditProducts.map((c) => (
                <div key={c.name} className="glass rounded-2xl p-5 border border-white/10 card-hover hover:border-white/20">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shrink-0`}>
                      <Icon name={c.icon} size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold mb-1">{c.name}</div>
                      <div className="text-3xl font-display font-bold text-white mb-1">{c.rate}</div>
                      <div className="flex gap-3 text-white/50 text-xs mb-3">
                        <span>{c.amount}</span>
                        <span>·</span>
                        <span>{c.term}</span>
                      </div>
                      <Button size="sm" className="gradient-brand border-0 text-white rounded-lg">
                        Оформить
                        <Icon name="ArrowRight" size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "transfers" && (
          <div className="max-w-md">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-semibold mb-5">Перевод по номеру телефона</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Получатель</label>
                  <Input placeholder="+7 (999) 000-00-00" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Сумма</label>
                  <Input
                    placeholder="0 ₽"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl text-xl"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-sm mb-1.5 block">Комментарий</label>
                  <Input placeholder="Необязательно" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
                </div>
                <Button className="w-full gradient-brand border-0 text-white rounded-xl py-3">
                  Перевести
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "invest" && (
          <div className="glass rounded-2xl p-6 border border-white/10 text-center">
            <div className="text-6xl mb-4">📈</div>
            <h3 className="text-xl font-display font-bold text-white mb-2">Инвестиции скоро</h3>
            <p className="text-white/50 mb-6">Акции, облигации и ПИФы прямо на платформе. Запуск в апреле 2026</p>
            <Button className="gradient-brand border-0 text-white rounded-xl gap-2">
              <Icon name="Bell" size={16} />
              Уведомить о запуске
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}