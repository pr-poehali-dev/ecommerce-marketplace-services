import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const hotels = [
  { id: 1, name: "Radisson Blu Hotel Moscow", city: "Москва", stars: 5, price: 12500, rating: 4.9, reviews: 1243, img: "🏨", amenities: ["WiFi", "Бассейн", "Спа", "Ресторан"] },
  { id: 2, name: "Hyatt Regency Sochi", city: "Сочи", stars: 5, price: 18900, rating: 4.8, reviews: 987, img: "🌴", amenities: ["Пляж", "Бассейн", "WiFi", "Бар"] },
  { id: 3, name: "Marriott St. Petersburg", city: "Санкт-Петербург", stars: 5, price: 9800, rating: 4.7, reviews: 654, img: "🏰", amenities: ["WiFi", "Ресторан", "Бар", "Парковка"] },
  { id: 4, name: "Park Inn Казань", city: "Казань", stars: 4, price: 5200, rating: 4.5, reviews: 432, img: "🕌", amenities: ["WiFi", "Ресторан", "Конф-зал"] },
  { id: 5, name: "Hilton Garden Inn Новосибирск", city: "Новосибирск", stars: 4, price: 4900, rating: 4.6, reviews: 321, img: "🏙️", amenities: ["WiFi", "Ресторан", "Фитнес"] },
  { id: 6, name: "Azimut Hotel Самара", city: "Самара", stars: 4, price: 3800, rating: 4.4, reviews: 287, img: "🌅", amenities: ["WiFi", "Ресторан", "Парковка"] },
];

const tours = [
  { id: 1, dest: "Турция, Анталья", nights: 7, price: 45900, oldPrice: 62000, type: "Всё включено", img: "🇹🇷", dep: "05 апр" },
  { id: 2, dest: "ОАЭ, Дубай", nights: 5, price: 78500, oldPrice: 99000, type: "BB", img: "🇦🇪", dep: "10 апр" },
  { id: 3, dest: "Египет, Хургада", nights: 10, price: 52000, oldPrice: 71000, type: "Всё включено", img: "🇪🇬", dep: "15 апр" },
];

export default function TravelPage() {
  const [tab, setTab] = useState<"hotels" | "tours">("hotels");
  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen gradient-hero">
      {/* Banner */}
      <div className="relative overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/8cf314fe-5f91-42af-a450-9f057f936ad8/files/36cf78ce-d050-412b-8f04-2370e5d8cec2.jpg"
          alt="Travel"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3 text-center">
            ✈️ Путешествия
          </h1>
          <p className="text-white/70 mb-6 text-center">Отели, туры и авиабилеты по лучшим ценам</p>

          {/* Search */}
          <div className="glass rounded-2xl p-4 w-full max-w-2xl flex gap-3">
            <div className="flex-1 relative">
              <Icon name="MapPin" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <Input
                placeholder="Куда едем?"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl"
              />
            </div>
            <Button className="gradient-brand border-0 text-white rounded-xl gap-2 px-6">
              <Icon name="Search" size={16} />
              Найти
            </Button>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("hotels")}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${tab === "hotels" ? "gradient-brand text-white" : "glass text-white/60 hover:text-white"}`}
          >
            <Icon name="Hotel" size={14} className="inline mr-2" />
            Отели
          </button>
          <button
            onClick={() => setTab("tours")}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${tab === "tours" ? "gradient-brand text-white" : "glass text-white/60 hover:text-white"}`}
          >
            <Icon name="Plane" size={14} className="inline mr-2" />
            Туры
          </button>
        </div>

        {tab === "hotels" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotels.map((h) => (
              <div key={h.id} className="group glass rounded-2xl overflow-hidden card-hover border border-white/10 hover:border-white/20 cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 flex items-center justify-center text-7xl">
                  {h.img}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex">
                      {Array.from({ length: h.stars }).map((_, i) => (
                        <Icon key={i} name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-white/60 text-xs">
                      <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                      {h.rating} ({h.reviews})
                    </div>
                  </div>
                  <div className="text-white font-semibold mb-1">{h.name}</div>
                  <div className="flex items-center gap-1 text-white/50 text-sm mb-3">
                    <Icon name="MapPin" size={12} />
                    {h.city}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {h.amenities.map((a) => (
                      <span key={a} className="text-xs glass px-2 py-0.5 rounded-md text-white/60">{a}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-white font-bold text-lg">{h.price.toLocaleString()} ₽</span>
                      <span className="text-white/40 text-xs"> / ночь</span>
                    </div>
                    <Button size="sm" className="gradient-brand border-0 text-white rounded-lg">
                      Забронировать
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "tours" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tours.map((t) => (
              <div key={t.id} className="group glass rounded-2xl p-5 card-hover border border-white/10 hover:border-white/20 cursor-pointer">
                <div className="text-5xl mb-4 text-center">{t.img}</div>
                <div className="text-white font-bold text-lg mb-1">{t.dest}</div>
                <div className="flex gap-3 mb-3">
                  <span className="text-white/50 text-sm flex items-center gap-1">
                    <Icon name="Moon" size={12} /> {t.nights} ночей
                  </span>
                  <span className="text-white/50 text-sm">{t.type}</span>
                  <span className="text-white/50 text-sm flex items-center gap-1">
                    <Icon name="Calendar" size={12} /> {t.dep}
                  </span>
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-white font-bold text-xl">{t.price.toLocaleString()} ₽</span>
                  <span className="text-white/30 text-sm line-through">{t.oldPrice.toLocaleString()}</span>
                </div>
                <Button className="w-full gradient-brand border-0 text-white rounded-xl">
                  Выбрать тур
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
