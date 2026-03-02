import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function ServicesScreen() {
  const navigate = useNavigate();

  const services = [
    { icon: 'calendar_month', title: 'ประวัติการเข้างาน', desc: 'ตรวจสอบเวลาเข้า-ออกงาน', color: 'text-blue-500', bg: 'bg-blue-50', link: '/attendance' },
    { icon: 'event_available', title: 'ขออนุมัติลางาน', desc: 'ส่งคำขอลางานและติดตามสถานะ', color: 'text-emerald-500', bg: 'bg-emerald-50', link: '/leave-request' },
    { icon: 'build', title: 'แจ้งซ่อม/อุปกรณ์สำนักงาน', desc: 'แจ้งปัญหาอุปกรณ์ขัดข้อง', color: 'text-orange-500', bg: 'bg-orange-50', link: '/maintenance' },
    { icon: 'support_agent', title: 'ติดต่อ HR', desc: 'สอบถามข้อมูลหรือขอความช่วยเหลือ', color: 'text-purple-500', bg: 'bg-purple-50', link: '/contact-hr' },
    { icon: 'rate_review', title: 'แบบประเมินพนักงาน', desc: 'ทำแบบประเมินผลการปฏิบัติงาน', color: 'text-rose-500', bg: 'bg-rose-50', link: '/evaluation' },
    { icon: 'warning', title: 'แจ้งข้อผิดพลาดและปัญหา', desc: 'รายงานข้อผิดพลาดของระบบ', color: 'text-primary', bg: 'bg-blue-100/50', link: '/report-issue' },
  ];

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">เมนูบริการพนักงานทั้งหมด</h2>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      <div className="px-5 py-2 space-y-3 mb-8">
        {services.map((service, index) => {
          const content = (
            <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center ${service.color} shrink-0`}>
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-0.5">{service.title}</h4>
                  <p className="text-[11px] text-slate-500">{service.desc}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">arrow_forward_ios</span>
            </div>
          );

          return service.link ? (
            <Link key={index} to={service.link} className="block">
              {content}
            </Link>
          ) : (
            <div key={index}>
              {content}
            </div>
          );
        })}

        <div className="text-center mt-8 pb-8">
          <p className="text-xs text-slate-400 mb-2">ไม่พบเมนูที่คุณต้องการ?</p>
          <button className="text-sm font-bold text-primary">ค้นหาบริการเพิ่มเติม</button>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
