import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function ContactHRScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">ติดต่อ HR</h2>
      </div>

      <div className="px-5 py-4 flex-1 mb-20">
        <div className="bg-purple-50 rounded-3xl p-6 border border-purple-100 mb-6 text-center">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-3xl">support_agent</span>
          </div>
          <h3 className="font-bold text-purple-900 mb-1">HR Support Center</h3>
          <p className="text-xs text-purple-600/80">เวลาทำการ จันทร์ - ศุกร์ (09:00 - 18:00 น.)</p>
        </div>

        <div className="space-y-4 mb-8">
          <a href="tel:1234" className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-sm">โทรศัพท์ (ภายใน)</h4>
              <p className="text-[11px] text-slate-500">ต่อ 1234 หรือ 1235</p>
            </div>
            <span className="material-symbols-outlined text-slate-300">arrow_forward_ios</span>
          </a>

          <a href="mailto:hr@company.com" className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-sm">อีเมล</h4>
              <p className="text-[11px] text-slate-500">hr@company.com</p>
            </div>
            <span className="material-symbols-outlined text-slate-300">arrow_forward_ios</span>
          </a>

          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 text-sm">ส่งข้อความ</h4>
              <p className="text-[11px] text-slate-500">ฝากข้อความถึงทีม HR</p>
            </div>
            <span className="material-symbols-outlined text-slate-300">arrow_forward_ios</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          <h4 className="font-bold text-slate-900 text-sm mb-4">คำถามที่พบบ่อย (FAQ)</h4>
          <div className="space-y-3">
            <div className="pb-3 border-b border-slate-50">
              <p className="text-xs font-bold text-slate-700 mb-1">การเบิกค่ารักษาพยาบาลใช้เวลากี่วัน?</p>
              <p className="text-[11px] text-slate-500">ปกติใช้เวลาประมาณ 7-14 วันทำการ หลังจากเอกสารครบถ้วน</p>
            </div>
            <div className="pb-3 border-b border-slate-50">
              <p className="text-xs font-bold text-slate-700 mb-1">สิทธิลาพักร้อนเหลือยกยอดไปปีหน้าได้ไหม?</p>
              <p className="text-[11px] text-slate-500">สามารถยกยอดไปได้สูงสุด 5 วัน และต้องใช้ภายในไตรมาสแรกของปีถัดไป</p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
