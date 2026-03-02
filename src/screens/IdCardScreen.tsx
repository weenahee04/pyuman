import { useNavigate, Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function IdCardScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">บัตรพนักงานดิจิทัล</h2>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>

      <div className="px-5 py-2">
        {/* ID Card */}
        <div className="bg-gradient-to-br from-navy-deep to-primary rounded-[32px] p-6 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[200px]">fingerprint</span>
          </div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-xs font-bold tracking-widest text-blue-100">DIGITAL ID</span>
            </div>
            <div className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              ACTIVE
            </div>
          </div>

          <div className="flex gap-5 items-center relative z-10">
            <div className="w-24 h-28 bg-orange-300 rounded-2xl border-2 border-white/20 overflow-hidden shrink-0 flex items-end justify-center">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">สมชาย ใจดี</h3>
              <p className="text-blue-200 text-sm mb-4">Senior UI Designer</p>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-blue-300/80 font-bold tracking-wider">ID NUMBER</span>
                <span className="font-mono font-bold tracking-wider">EMP-202401</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-end relative z-10">
            <div>
              <span className="block text-[10px] text-blue-300/80 font-bold tracking-wider mb-0.5">ISSUE DATE</span>
              <span className="text-xs font-bold">01 / 2024</span>
            </div>
            <div className="text-right">
              <span className="text-blue-200/40 font-bold italic tracking-widest text-lg">HQ CORPORATE</span>
            </div>
          </div>
        </div>

        {/* Report Issue Box */}
        <div className="bg-white rounded-[32px] p-5 mt-6 border border-slate-100 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">error</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">แจ้งรายงานข้อผิดพลาด</h4>
              <p className="text-xs text-slate-500">พบปัญหาข้อมูลไม่ถูกต้องหรือการใช้งาน?</p>
            </div>
          </div>
          <Link to="/report-issue" className="w-full bg-primary text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-lg">send</span> ส่งรายงานใหม่
          </Link>
        </div>

        {/* History */}
        <div className="mt-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">ประวัติการแจ้งรายงาน</h3>
            <button className="text-xs font-bold text-primary bg-blue-50 px-3 py-1.5 rounded-full">ดูทั้งหมด</button>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                <span className="material-symbols-outlined">pending_actions</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">ข้อมูลตำแหน่งงานไม่ถูกต้อง</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">24 ต.ค. 2023 • 14:30</p>
              </div>
              <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100">Pending</span>
            </div>

            <div className="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">ขอเปลี่ยนรูปถ่ายประจำตัว</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">15 ก.ย. 2023 • 09:15</p>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">Resolved</span>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
