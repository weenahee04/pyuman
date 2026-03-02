import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function NewsScreen() {
  return (
    <>
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100 px-5 pt-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">ข่าวประกาศและแจ้งเตือน</h2>
          <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 transition-all outline-none" placeholder="ค้นหาประกาศหรือกิจกรรม..." type="text"/>
        </div>
      </div>

      <div className="px-5 pt-6 pb-4">
        <Link to="/announcement/1" className="block relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-lg group">
          <img alt="Office Policy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"/>
          <div className="absolute inset-0 news-gradient flex flex-col justify-end p-6">
            <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full w-fit mb-3 tracking-wider">NEW POLICY</span>
            <h3 className="text-white text-xl font-bold mb-2">ประกาศนโยบายการทำงานแบบ Hybrid ในพื้นที่สำนักงานใหม่</h3>
            <p className="text-white/80 text-xs line-clamp-2">พนักงานสามารถเริ่มใช้งานพื้นที่ Co-working space แห่งใหม่ได้ตั้งแต่วันจันทร์หน้าเป็นต้นไป...</p>
          </div>
        </Link>
      </div>

      <div className="flex gap-2 px-5 py-2 overflow-x-auto no-scrollbar">
        <button className="active-tab whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-all">ทั้งหมด</button>
        <button className="inactive-tab whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-all">ประกาศด่วน</button>
        <button className="inactive-tab whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-all">กิจกรรม</button>
        <button className="inactive-tab whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-all">รายงานข้อผิดพลาด</button>
      </div>

      <div className="px-5 space-y-4 mt-4 mb-8">
        <Link to="/announcement/2" className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex gap-4 active:scale-[0.98] transition-all">
          <div className="size-24 rounded-2xl overflow-hidden shrink-0">
            <img alt="Workshop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"/>
          </div>
          <div className="flex flex-col justify-between py-1 flex-1">
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">สัมมนาหัวข้อ: เทคโนโลยี AI เพื่อการทำงานในยุค 2024</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-slate-400">HR Team</span>
                <span className="text-[10px] text-slate-300">•</span>
                <span className="text-[10px] text-slate-400">2 ชั่วโมงที่แล้ว</span>
              </div>
            </div>
            <div className="text-primary text-[11px] font-bold flex items-center gap-1 mt-2">
              อ่านเพิ่มเติม <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </div>
          </div>
        </Link>

        <div className="bg-blue-50/50 rounded-3xl p-5 border border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">bug_report</span>
              <h3 className="font-bold text-blue-900 text-sm">อัปเดตการแก้ไขระบบ</h3>
            </div>
            <span className="text-[10px] font-bold text-blue-500 bg-white px-2 py-1 rounded-md border border-blue-100">TECHNICAL BLOG</span>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-[13px] font-bold text-slate-900 mb-1">สรุปการแก้ไขระบบเบิกจ่ายล่าช้า</p>
            <p className="text-[12px] text-slate-500 leading-relaxed mb-3">พบสาเหตุจากเซิร์ฟเวอร์ฐานข้อมูลขัดข้องเมื่อช่วงเช้า ทีมงานได้ดำเนินการแก้ไขและตรวจสอบความถูกต้องแล้ว...</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-5 rounded-full bg-slate-200"></div>
                <span className="text-[10px] text-slate-500">Dev Operations</span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">15 พ.ค. 2024</span>
            </div>
          </div>
        </div>

        <Link to="/announcement/3" className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex gap-4 active:scale-[0.98] transition-all">
          <div className="size-24 rounded-2xl overflow-hidden shrink-0">
            <img alt="Health" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=400"/>
          </div>
          <div className="flex flex-col justify-between py-1 flex-1">
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">โปรแกรมตรวจสุขภาพประจำปี สำหรับพนักงานทุกคน</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-slate-400">Admin Team</span>
                <span className="text-[10px] text-slate-300">•</span>
                <span className="text-[10px] text-slate-400">1 วันที่แล้ว</span>
              </div>
            </div>
            <div className="text-primary text-[11px] font-bold flex items-center gap-1 mt-2">
              อ่านเพิ่มเติม <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </div>
          </div>
        </Link>

        <Link to="/announcement/4" className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex gap-4 active:scale-[0.98] transition-all">
          <div className="size-24 rounded-2xl overflow-hidden shrink-0">
            <img alt="Meeting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"/>
          </div>
          <div className="flex flex-col justify-between py-1 flex-1">
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">ปรับเปลี่ยนเวลาการใช้งานห้องประชุมใหญ่ ชั้น 12</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-slate-400">Facility Mgt.</span>
                <span className="text-[10px] text-slate-300">•</span>
                <span className="text-[10px] text-slate-400">2 วันที่แล้ว</span>
              </div>
            </div>
            <div className="text-primary text-[11px] font-bold flex items-center gap-1 mt-2">
              อ่านเพิ่มเติม <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </div>
          </div>
        </Link>
      </div>
      <BottomNav />
    </>
  );
}
