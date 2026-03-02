import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function ReportIssueScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">แจ้งข้อผิดพลาดและปัญหา</h2>
      </div>

      <div className="px-5 py-4 flex-1">
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-700 mb-2">ประเภทของปัญหา</label>
          <div className="relative">
            <select className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 px-4 text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option value="">เลือกประเภทของปัญหา</option>
              <option value="hardware">อุปกรณ์ฮาร์ดแวร์</option>
              <option value="software">ระบบซอฟต์แวร์</option>
              <option value="network">เครือข่ายอินเทอร์เน็ต</option>
              <option value="other">อื่นๆ</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-700 mb-2">รายละเอียด</label>
          <textarea 
            className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[160px] resize-none"
            placeholder="กรุณาอธิบายรายละเอียดของปัญหาที่พบ..."
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-bold text-slate-700 mb-2">รูปภาพหลักฐาน</label>
          <div className="flex gap-3">
            <button className="w-28 h-28 rounded-3xl border-2 border-dashed border-slate-200 bg-white flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-3xl mb-1">add_a_photo</span>
              <span className="text-[10px] font-medium">เพิ่มรูปภาพ</span>
            </button>
            <div className="w-28 h-28 rounded-3xl border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-300">
              <span className="material-symbols-outlined text-3xl">image</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-3">สามารถแนบไฟล์ภาพได้สูงสุด 3 ไฟล์ (JPG, PNG)</p>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-primary text-white font-bold py-4 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
          ส่งรายงาน <span className="material-symbols-outlined text-lg">send</span>
        </button>
        <p className="text-center text-[11px] text-slate-400 mt-4 italic">ทีมงานจะตรวจสอบและดำเนินการแก้ไขภายใน 1-3 วันทำการ</p>
      </div>
      <BottomNav />
    </>
  );
}
