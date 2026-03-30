import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const nav = [
  { label: "Товары", path: "/products", icon: "ShoppingBag" },
  { label: "Путешествия", path: "/travel", icon: "Plane" },
  { label: "Страхование", path: "/insurance", icon: "Shield" },
  { label: "Здоровье", path: "/health", icon: "Heart" },
  { label: "Недвижимость", path: "/realty", icon: "Building2" },
  { label: "Финансы", path: "/finance", icon: "Landmark" },
  { label: "IngoGo", path: "/ingogo", icon: "Zap" },
];

export default function Header() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-white/10">
      {/* Top bar */}
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-lg font-display">P</span>
            </div>
            <span className="text-white font-display font-bold text-xl hidden sm:block">
              PONY<span className="gradient-text">EXPRESS</span>
            </span>
          </Link>

          {/* Search bar */}
          <div className={`flex-1 max-w-2xl mx-auto transition-all ${searchOpen ? "block" : "hidden md:block"}`}>
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <Input
                placeholder="Поиск товаров, услуг, отелей..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-brand-blue h-10 rounded-xl"
              />
              <Button size="sm" className="absolute right-1 top-1 gradient-brand border-0 text-white h-8 px-4 rounded-lg">
                Найти
              </Button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 ml-auto shrink-0">
            <button
              className="md:hidden text-white/70 hover:text-white p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Icon name="Search" size={20} />
            </button>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 relative px-3">
                <Icon name="ShoppingCart" size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center gradient-coral border-0 text-[10px]">
                  3
                </Badge>
              </Button>
            </Link>
            <Link to="/account" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 gap-2 px-3">
                <Icon name="User" size={20} />
                <span className="hidden lg:block text-sm">Войти</span>
              </Button>
            </Link>
            <Link to="/finance" className="hidden md:block">
              <Button size="sm" className="gradient-brand border-0 text-white gap-2 rounded-xl">
                <Icon name="Wallet" size={16} />
                <span className="hidden lg:block">Кошелёк</span>
                <span className="text-white/80 text-xs hidden lg:block">0 ₽</span>
              </Button>
            </Link>
            <button
              className="md:hidden text-white/70 hover:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Nav bar desktop */}
        <nav className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                location.pathname === item.path
                  ? "bg-brand-blue/20 text-brand-cyan"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon name={item.icon} size={15} />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 px-4 py-3">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? "bg-brand-blue/20 text-brand-cyan"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 mt-2 pt-2 flex gap-2">
              <Link to="/account" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 gap-2">
                  <Icon name="User" size={16} />
                  Войти
                </Button>
              </Link>
              <Link to="/finance" className="flex-1" onClick={() => setMobileOpen(false)}>
                <Button className="w-full gradient-brand border-0 text-white gap-2">
                  <Icon name="Wallet" size={16} />
                  Кошелёк
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}