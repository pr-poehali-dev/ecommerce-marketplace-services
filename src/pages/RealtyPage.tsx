import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const types = ["Купить", "Снять", "Новостройки", "Частный дом", "Участок", "Коммерческая"];

const listings = [
  { id: 1, title: "3-к квартира, 87 м²", addr: "Москва, ул. Тверская, 12", price: 18500000, floor: "7/12", type: "Новостройка", img: "🏢", rooms: 3, area: 87, metro: "Тверская" },
  { id: 2, title: "2-к квартира, 54 м²", addr: "Москва, Арбат, 5", price: 12900000, floor: "4/9", type: "Вторичка", img: "🏠", rooms: 2, area: 54, metro: "Арбатская" },
  { id: 3, title: "Студия, 32 м²", addr: "Москва, Мясницкая, 18", price: 7200000, floor: "3/16", type: "Новостройка", img: "🏙️", rooms: 1, area: 32, metro: "Чистые пруды" },
  { id: 4, title: "Коттедж 250 м², участок 12 сот.", addr: "Подмосковье, Рублёвка", price: 45000000, floor: "2 этажа", type: "Дом", img: "🏡", rooms: 6, area: 250, metro: "—" },
  { id: 5, title: "4-к квартира, 120 м²", addr: "Москва, Кутузовский пр., 30", price: 32000000, floor: "15/25", type: "Новостройка", img: "🏛️", rooms: 4, area: 120, metro: "Кутузовская" },
  { id: 6, title: "1-к квартира, 42 м²", addr: "Москва, Варшавское ш., 100", price: 6800000, floor: "9/17", type: "Вторичка", img: "🏘️", rooms: 1, area: 42, metro: "Южная" },
];

const mortgageRates = [
  { bank: "СберБанк", rate: "5.9%", term: "до 30 лет", payment: "от 28 500 ₽/мес", logo: "🟢" },
  { bank: "ВТБ", rate: "6.3%", term: "до 25 лет", payment: "от 31 200 ₽/мес", logo: "🔵" },
  { bank: "МегаБанк", rate: "5.5%", term: "до 30 лет", payment: "от 26 900 ₽/мес", logo: "⭐" },
  { bank: "Альфа-Банк", rate: "6.8%", term: "до 20 лет", payment: "от 34 100 ₽/мес", logo: "🔴" },
];

export default function RealtyPage() {
  const [activeType, setActiveType] = useState("Купить");

  return (
    <div className="min-h-screen gradient-hero">
      {/* Banner */}
      <div className="relative overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/8cf314fe-5f91-42af-a450-9f057f936ad8/files/76fc7c18-5a07-4cf0-849d-407666a3c651.jpg"
          alt="Realty"
          className="w-full h-64 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6">
          <div className="container max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-1">🏠 Недвижимость</h1>
            <p className="text-white/60">Купить, продать, снять — лучшие предложения на рынке</p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Type tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeType === t ? "gradient-brand text-white" : "glass text-white/60 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="glass rounded-2xl p-4 mb-8 border border-white/10">
          <div className="flex flex-wrap gap-3">
            <div className="flex-1 min-w-48 relative">
              <Icon name="MapPin" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input placeholder="Город, улица, метро..." className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
            </div>
            <Input placeholder="Цена от, ₽" className="w-36 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
            <Input placeholder="Цена до, ₽" className="w-36 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
            <select className="glass text-white text-sm rounded-xl px-3 py-2 border border-white/20 bg-transparent">
              <option value="" className="bg-gray-900">Комнат</option>
              <option value="1" className="bg-gray-900">1</option>
              <option value="2" className="bg-gray-900">2</option>
              <option value="3" className="bg-gray-900">3+</option>
            </select>
            <Button className="gradient-brand border-0 text-white rounded-xl gap-2 px-6">
              <Icon name="Search" size={16} />
              Найти
            </Button>
          </div>
        </div>

        {/* Listings */}
        <h2 className="text-xl font-display font-bold text-white mb-4">Объявления</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {listings.map((l) => (
            <div key={l.id} className="group glass rounded-2xl overflow-hidden card-hover border border-white/10 hover:border-white/20 cursor-pointer">
              <div className="h-44 bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 flex items-center justify-center text-7xl relative">
                {l.img}
                <div className="absolute top-3 left-3">
                  <span className="glass px-2 py-1 rounded-lg text-white/70 text-xs">{l.type}</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-white font-bold text-lg mb-1">{(l.price / 1000000).toFixed(1)} млн ₽</div>
                <div className="text-white/80 font-medium mb-1">{l.title}</div>
                <div className="flex items-center gap-1 text-white/50 text-sm mb-3">
                  <Icon name="MapPin" size={12} />
                  {l.addr}
                </div>
                <div className="flex gap-3 text-white/50 text-xs mb-3">
                  <span className="flex items-center gap-1"><Icon name="LayoutGrid" size={11} /> {l.rooms} комн.</span>
                  <span className="flex items-center gap-1"><Icon name="Maximize2" size={11} /> {l.area} м²</span>
                  <span className="flex items-center gap-1"><Icon name="Building" size={11} /> {l.floor} эт.</span>
                  {l.metro !== "—" && <span className="flex items-center gap-1"><Icon name="Train" size={11} /> {l.metro}</span>}
                </div>
                <Button className="w-full gradient-brand border-0 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mortgage */}
        <div className="glass rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-display font-bold text-white mb-1 flex items-center gap-2">
            <Icon name="Percent" size={20} className="text-brand-cyan" />
            Ипотека
          </h2>
          <p className="text-white/50 text-sm mb-5">Лучшие ставки от топ-банков. Одобрение за 10 минут</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {mortgageRates.map((m) => (
              <div key={m.bank} className="glass rounded-xl p-4 border border-white/10 hover:border-brand-blue/30 transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{m.logo}</span>
                  <span className="text-white/80 text-sm font-medium">{m.bank}</span>
                </div>
                <div className="text-3xl font-display font-bold text-white mb-1">{m.rate}</div>
                <div className="text-white/40 text-xs mb-1">{m.term}</div>
                <div className="text-brand-cyan text-sm font-medium">{m.payment}</div>
              </div>
            ))}
          </div>
          <Button className="mt-4 gradient-brand border-0 text-white rounded-xl gap-2">
            Подать заявку на ипотеку
            <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
