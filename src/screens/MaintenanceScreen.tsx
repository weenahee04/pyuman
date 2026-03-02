import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function MaintenanceScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">แจ้งซ่อม/อุปกรณ์สำนักงาน</h2>
      </div>

      <div className="px-5 py-4 flex-1 mb-20">
        <div className="mb-5">
          <label className="block text-sm font-bold text-slate-700 mb-2">หมวดหมู่</label>
          <div className="relative">
            <select className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 px-4 text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option value="">เลือกหมวดหมู่</option>
              <option value="it">อุปกรณ์ IT (คอมพิวเตอร์, ปริ้นเตอร์)</option>
              <option value="facility">อาคารสถานที่ (แอร์, หลอดไฟ, ห้องน้ำ)</option>
              <option value="furniture">เฟอร์นิเจอร์ (โต๊ะ, เก้าอี้)</option>
              <option value="other">อื่นๆ</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-bold text-slate-700 mb-2">สถานที่/จุดที่พบปัญหา</label>
          <input 
            type="text" 
            className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 px-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            placeholder="เช่น โต๊ะทำงาน 12A, ห้องประชุม 3"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-bold text-slate-700 mb-2">รายละเอียดปัญหา</label>
          <textarea 
            className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[120px] resize-none"
            placeholder="อธิบายอาการหรือปัญหาที่พบ..."
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-slate-700 mb-2">รูปภาพประกอบ</label>
          <div className="flex gap-3">
            <button className="w-24 h-24 rounded-2xl border-2 border-dashed border-slate-200 bg-white flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl mb-1">add_a_photo</span>
              <span className="text-[10px] font-medium">เพิ่มรูปภาพ</span>
            </button>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-4 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          ส่งแจ้งซ่อม <span className="material-symbols-outlined text-lg">build</span>
        </button>
      </div>
      <BottomNav />
    </>
  );
}
