import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function EvaluationScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">แบบประเมินพนักงาน</h2>
      </div>

      <div className="px-5 py-4 flex-1 mb-20">
        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900">รอบการประเมินปัจจุบัน</h3>
            <span className="bg-rose-50 text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-full">ด่วน</span>
          </div>
          <h4 className="text-lg font-bold text-primary mb-2">ประเมินผลงานประจำปี 2023</h4>
          <p className="text-xs text-slate-500 mb-4">กรุณาทำแบบประเมินตนเอง (Self-Evaluation) ให้แล้วเสร็จภายในวันที่ 15 พฤศจิกายน 2023</p>
          
          <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
            <div className="bg-primary h-2 rounded-full w-[0%]"></div>
          </div>
          <p className="text-[10px] text-slate-400 text-right mb-4">0% ดำเนินการ</p>

          <button className="w-full bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            เริ่มทำแบบประเมิน <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <h3 className="font-bold text-slate-900 mb-4 px-1">ประวัติการประเมิน</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between opacity-70">
            <div>
              <h4 className="font-bold text-slate-700 text-sm">ประเมินผลงานครึ่งปี 2023 (Mid-Year)</h4>
              <p className="text-[10px] text-slate-400 mt-1">เสร็จสิ้นเมื่อ: 10 ก.ค. 2023</p>
            </div>
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center justify-between opacity-70">
            <div>
              <h4 className="font-bold text-slate-700 text-sm">ประเมินผลงานประจำปี 2022</h4>
              <p className="text-[10px] text-slate-400 mt-1">เสร็จสิ้นเมื่อ: 12 พ.ย. 2022</p>
            </div>
            <span className="material-symbols-outlined text-emerald-500">check_circle</span>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
