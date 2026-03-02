import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { path: '/', icon: 'grid_view', label: 'หน้าแรก', fill: path === '/' },
    { path: '/services', icon: 'apps', label: 'บริการ', fill: path === '/services' },
    { path: '/id-card', icon: 'badge', label: 'ID Card', fill: path === '/id-card' },
    { path: '/payslip', icon: 'payments', label: 'เงินเดือน', fill: path === '/payslip' },
    { path: '/benefits', icon: 'card_giftcard', label: 'สวัสดิการ', fill: path === '/benefits' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 backdrop-blur-2xl border-t border-slate-100 h-20 px-4 flex items-center justify-between z-40 pb-safe">
      {navItems.map((item) => {
        const isActive = item.fill;
        return (
          <Link key={item.path} to={item.path} className={clsx("flex flex-col items-center gap-1 flex-1 cursor-pointer", isActive ? "text-primary" : "text-slate-400")}>
            <span className={clsx("material-symbols-outlined text-2xl", isActive && "font-variation-fill")} style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
              {item.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
