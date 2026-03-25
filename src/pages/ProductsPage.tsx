import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Электроника", "Одежда", "Дом и сад", "Спорт", "Красота", "Игрушки"];

const products = [
  { id: 1, name: "iPhone 16 Pro Max 256GB", cat: "Электроника", price: 129990, oldPrice: 149990, rating: 4.9, reviews: 2341, badge: "Хит", img: "📱" },
  { id: 2, name: "MacBook Air M3 13\"", cat: "Электроника", price: 119990, oldPrice: 139990, rating: 4.8, reviews: 876, badge: "Новинка", img: "💻" },
  { id: 3, name: "Samsung 65\" QLED TV", cat: "Электроника", price: 89990, oldPrice: 109990, rating: 4.7, reviews: 543, badge: "-18%", img: "📺" },
  { id: 4, name: "AirPods Pro 2-го поколения", cat: "Электроника", price: 24990, oldPrice: 31990, rating: 4.9, reviews: 5612, badge: "-22%", img: "🎧" },
  { id: 5, name: "Кроссовки Nike Air Max", cat: "Одежда", price: 12990, oldPrice: 16990, rating: 4.6, reviews: 1243, badge: "-23%", img: "👟" },
  { id: 6, name: "Робот-пылесос Xiaomi", cat: "Дом и сад", price: 34990, oldPrice: 42990, rating: 4.7, reviews: 987, badge: "Хит", img: "🤖" },
  { id: 7, name: "PS5 Digital Edition", cat: "Электроника", price: 49990, oldPrice: 59990, rating: 4.8, reviews: 3421, badge: "-17%", img: "🎮" },
  { id: 8, name: "Умные часы Apple Watch 10", cat: "Электроника", price: 42990, oldPrice: 52990, rating: 4.8, reviews: 1876, badge: "Новинка", img: "⌚" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [sort, setSort] = useState("popular");

  const filtered = activeCategory === "Все" ? products : products.filter((p) => p.cat === activeCategory);

  return (
    <div className="min-h-screen gradient-hero">
      {/* Banner */}
      <div className="relative glass-dark border-b border-white/10 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-violet/20" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">🛍️ Товары</h1>
          <p className="text-white/60">12 миллионов товаров от проверенных продавцов</p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === c
                    ? "gradient-brand text-white"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-sm">Сортировка:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="glass text-white text-sm rounded-lg px-3 py-1.5 border border-white/20 bg-transparent"
            >
              <option value="popular" className="bg-gray-900">По популярности</option>
              <option value="price_asc" className="bg-gray-900">Цена ↑</option>
              <option value="price_desc" className="bg-gray-900">Цена ↓</option>
              <option value="rating" className="bg-gray-900">По рейтингу</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <div key={p.id} className="group glass rounded-2xl p-4 card-hover border border-white/10 hover:border-white/20 cursor-pointer">
              <div className="w-full aspect-square rounded-xl bg-white/5 flex items-center justify-center text-5xl mb-4 group-hover:scale-105 transition-transform">
                {p.img}
              </div>
              <Badge className="bg-brand-coral text-white border-0 text-xs mb-2">{p.badge}</Badge>
              <div className="text-white/50 text-xs mb-1">{p.cat}</div>
              <div className="text-white font-medium text-sm mb-2 line-clamp-2 leading-snug">{p.name}</div>
              <div className="flex items-center gap-1 mb-2">
                <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white/70 text-xs">{p.rating}</span>
                <span className="text-white/30 text-xs">({p.reviews})</span>
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-white font-bold">{p.price.toLocaleString()} ₽</span>
                <span className="text-white/30 text-xs line-through">{p.oldPrice.toLocaleString()}</span>
              </div>
              <Button size="sm" className="w-full gradient-brand border-0 text-white rounded-lg">
                <Icon name="ShoppingCart" size={14} className="mr-1" />
                В корзину
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
