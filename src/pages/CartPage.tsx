import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const initialItems = [
  { id: 1, name: "iPhone 16 Pro Max 256GB", price: 129990, qty: 1, img: "📱", seller: "Apple Официальный" },
  { id: 2, name: "AirPods Pro 2-го поколения", price: 24990, qty: 1, img: "🎧", seller: "Apple Официальный" },
  { id: 3, name: "Кроссовки Nike Air Max 270", price: 12990, qty: 2, img: "👟", seller: "Nike Store" },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const setQty = (id: number, qty: number) => {
    if (qty < 1) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
    }
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount = Math.round(total * 0.05);

  return (
    <div className="min-h-screen gradient-hero py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
          <Icon name="ShoppingCart" size={28} className="text-brand-blue" />
          Корзина
          <span className="text-white/40 text-lg">({items.length} товара)</span>
        </h1>

        {items.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center border border-white/10">
            <div className="text-7xl mb-4">🛒</div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Корзина пуста</h2>
            <p className="text-white/50 mb-6">Добавьте товары, чтобы оформить заказ</p>
            <Link to="/products">
              <Button className="gradient-brand border-0 text-white rounded-xl">
                Перейти к товарам
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Items */}
            <div className="lg:col-span-2 space-y-3">
              {items.map((item) => (
                <div key={item.id} className="glass rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center text-4xl shrink-0">
                    {item.img}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1 line-clamp-2">{item.name}</div>
                    <div className="text-white/40 text-sm mb-2">Продавец: {item.seller}</div>
                    <div className="text-white font-bold text-lg">
                      {(item.price * item.qty).toLocaleString()} ₽
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 glass rounded-lg">
                      <button
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                      >
                        <Icon name="Minus" size={14} />
                      </button>
                      <span className="text-white font-medium w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                      >
                        <Icon name="Plus" size={14} />
                      </button>
                    </div>
                    <button
                      onClick={() => setQty(item.id, 0)}
                      className="text-white/30 hover:text-brand-coral transition-colors"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-5 border border-white/10 sticky top-24">
                <h3 className="text-white font-semibold mb-4">Ваш заказ</h3>
                <div className="space-y-2 mb-4">
                  {items.map((i) => (
                    <div key={i.id} className="flex justify-between text-sm">
                      <span className="text-white/60 truncate mr-2">{i.name.substring(0, 20)}...</span>
                      <span className="text-white shrink-0">{(i.price * i.qty).toLocaleString()} ₽</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-3 space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Товары ({items.reduce((s, i) => s + i.qty, 0)} шт.)</span>
                    <span className="text-white">{total.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Скидка 5%</span>
                    <span className="text-brand-green">-{discount.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Доставка</span>
                    <span className="text-brand-green">Бесплатно</span>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span className="text-white">Итого</span>
                  <span className="text-white">{(total - discount).toLocaleString()} ₽</span>
                </div>

                {/* Payment method */}
                <div className="glass rounded-xl p-3 mb-4 flex items-center gap-3 border border-brand-blue/30">
                  <Icon name="Wallet" size={18} className="text-brand-cyan" />
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">PonyКошелёк</div>
                    <div className="text-white/50 text-xs">Баланс: 47 650 ₽</div>
                  </div>
                  <Icon name="Check" size={16} className="text-brand-green" />
                </div>

                <Button className="w-full gradient-brand border-0 text-white rounded-xl py-3 text-base">
                  Оформить заказ
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <p className="text-white/30 text-xs text-center mt-2">
                  Кешбэк: +{Math.round((total - discount) * 0.05).toLocaleString()} ₽
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}