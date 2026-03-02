import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function LeaveRequestScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">ขออนุมัติลางาน</h2>
      </div>

      <div className="px-5 py-4 flex-1 mb-20">
        {/* Leave Balance Summary */}
        <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar pb-2">
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm min-w-[100px] shrink-0">
            <p className="text-[10px] text-slate-500 mb-1">ลาพักร้อน</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-primary">8</span>
              <span className="text-[10px] text-slate-400">/ 12 วัน</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm min-w-[100px] shrink-0">
            <p className="text-[10px] text-slate-500 mb-1">ลากิจ</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-orange-500">3</span>
              <span className="text-[10px] text-slate-400">/ 5 วัน</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm min-w-[100px] shrink-0">
            <p className="text-[10px] text-slate-500 mb-1">ลาป่วย</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-emerald-500">28</span>
              <span className="text-[10px] text-slate-400">/ 30 วัน</span>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-bold text-slate-700 mb-2">ประเภทการลา</label>
          <div className="relative">
            <select className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 px-4 text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option value="">เลือกประเภทการลา</option>
              <option value="annual">ลาพักร้อน</option>
              <option value="personal">ลากิจ</option>
              <option value="sick">ลาป่วย</option>
              <option value="other">อื่นๆ</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">วันที่เริ่มลา</label>
            <div className="relative">
              <input type="date" className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 px-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">ถึงวันที่</label>
            <div className="relative">
              <input type="date" className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 px-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-700 mb-2">เหตุผลการลา</label>
          <textarea 
            className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[120px] resize-none"
            placeholder="ระบุเหตุผลการลา..."
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-slate-700 mb-2">เอกสารแนบ (ถ้ามี)</label>
          <button className="w-full border-2 border-dashed border-slate-200 bg-white rounded-2xl py-4 flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl mb-1">upload_file</span>
            <span className="text-[11px] font-medium">อัปโหลดใบรับรองแพทย์ หรือเอกสารอื่นๆ</span>
          </button>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-primary text-white font-bold py-4 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          ส่งคำขอ <span className="material-symbols-outlined text-lg">send</span>
        </button>
      </div>
      <BottomNav />
    </>
  );
}
