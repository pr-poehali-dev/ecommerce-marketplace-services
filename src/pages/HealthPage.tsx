import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const specialties = [
  { name: "Терапевт", icon: "Stethoscope", price: "от 800 ₽", color: "from-brand-coral to-brand-orange" },
  { name: "Кардиолог", icon: "HeartPulse", price: "от 1 200 ₽", color: "from-brand-coral to-brand-orange" },
  { name: "Невролог", icon: "Brain", price: "от 1 100 ₽", color: "from-brand-blue to-brand-violet" },
  { name: "Дерматолог", icon: "Sparkles", price: "от 900 ₽", color: "from-brand-violet to-brand-blue" },
  { name: "Педиатр", icon: "Baby", price: "от 800 ₽", color: "from-brand-green to-brand-cyan" },
  { name: "Стоматолог", icon: "Smile", price: "от 600 ₽", color: "from-brand-cyan to-brand-blue" },
  { name: "Офтальмолог", icon: "Eye", price: "от 1 000 ₽", color: "from-brand-orange to-brand-coral" },
  { name: "Психолог", icon: "MessageCircle", price: "от 2 000 ₽", color: "from-brand-violet to-brand-coral" },
];

const doctors = [
  { id: 1, name: "Иванова Анна Сергеевна", spec: "Терапевт", exp: 15, rating: 4.9, reviews: 432, price: 1200, avail: "Сегодня 14:00", img: "👩‍⚕️" },
  { id: 2, name: "Петров Михаил Иванович", spec: "Кардиолог", exp: 22, rating: 4.8, reviews: 287, price: 1800, avail: "Завтра 10:00", img: "👨‍⚕️" },
  { id: 3, name: "Смирнова Елена Петровна", spec: "Педиатр", exp: 12, rating: 4.9, reviews: 654, price: 900, avail: "Сегодня 16:30", img: "👩‍⚕️" },
  { id: 4, name: "Козлов Дмитрий Александрович", spec: "Невролог", exp: 18, rating: 4.7, reviews: 198, price: 1500, avail: "26 марта 11:00", img: "👨‍⚕️" },
];

const services = [
  { title: "Онлайн-консультация", desc: "Врач ответит в чате или по видео", price: "от 800 ₽", icon: "Video" },
  { title: "Анализы на дому", desc: "Медсестра приедет в удобное время", price: "от 500 ₽", icon: "Syringe" },
  { title: "Вызов врача на дом", desc: "Терапевт приедет в течение 2 часов", price: "от 2 500 ₽", icon: "Home" },
  { title: "Чекап организма", desc: "Комплексная диагностика здоровья", price: "от 4 900 ₽", icon: "ClipboardList" },
];

export default function HealthPage() {
  return (
    <div className="min-h-screen gradient-hero">
      {/* Banner */}
      <div className="relative glass-dark border-b border-white/10 py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/10 to-brand-orange/10" />
        <div className="container max-w-7xl mx-auto px-4 relative">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">❤️ Здоровье</h1>
          <p className="text-white/60">Врачи онлайн, анализы, клиники — всё для вашего здоровья</p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Quick services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {services.map((s) => (
            <div key={s.title} className="group glass rounded-2xl p-4 card-hover border border-white/10 hover:border-brand-coral/30 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-coral to-brand-orange flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Icon name={s.icon} size={18} className="text-white" />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{s.title}</div>
              <div className="text-white/50 text-xs mb-2">{s.desc}</div>
              <div className="text-brand-coral text-sm font-medium">{s.price}</div>
            </div>
          ))}
        </div>

        {/* Specialties */}
        <h2 className="text-xl font-display font-bold text-white mb-4">Специализации</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-10">
          {specialties.map((s) => (
            <button key={s.name} className="group glass rounded-xl p-3 text-center card-hover border border-white/10 hover:border-white/20">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                <Icon name={s.icon} size={16} className="text-white" />
              </div>
              <div className="text-white text-xs font-medium leading-tight">{s.name}</div>
              <div className="text-white/40 text-xs mt-0.5">{s.price}</div>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="glass rounded-2xl p-4 mb-6 border border-white/10 flex gap-3">
          <div className="flex-1 relative">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <Input placeholder="Найти врача по специальности или имени..." className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl" />
          </div>
          <Button className="gradient-brand border-0 text-white rounded-xl px-6">Найти</Button>
        </div>

        {/* Doctors */}
        <h2 className="text-xl font-display font-bold text-white mb-4">Доступные врачи</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.map((d) => (
            <div key={d.id} className="glass rounded-2xl p-5 border border-white/10 card-hover hover:border-white/20 flex gap-4">
              <div className="text-5xl shrink-0">{d.img}</div>
              <div className="flex-1">
                <div className="text-white font-semibold">{d.name}</div>
                <div className="text-white/50 text-sm mb-2">{d.spec} · {d.exp} лет опыта</div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center gap-1 text-white/60 text-xs">
                    <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                    {d.rating} ({d.reviews})
                  </span>
                  <span className="flex items-center gap-1 text-brand-green text-xs">
                    <Icon name="Clock" size={12} />
                    {d.avail}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">{d.price.toLocaleString()} ₽</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg">
                      <Icon name="Video" size={14} />
                    </Button>
                    <Button size="sm" className="gradient-brand border-0 text-white rounded-lg">
                      Записаться
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
