import { useNavigate } from 'react-router-dom';

export default function AnnouncementDetailScreen() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center justify-between border-b border-slate-100">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">ประกาศบริษัท</h2>
        <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>

      <div className="w-full aspect-square bg-slate-100 flex items-center justify-center p-8">
        <div className="w-full h-full bg-white shadow-xl border-[12px] border-[#e8dcc7] flex items-center justify-center overflow-hidden">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Frame" className="w-full h-full object-cover opacity-90" />
        </div>
      </div>

      <div className="px-5 py-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-navy-deep text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider">INTERNAL</span>
          <span className="text-xs text-slate-400">24 ต.ค. 2023 • 5 นาทีในการอ่าน</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-6">
          แนวทางการปฏิบัติงานในสำนักงานรูปแบบใหม่ (Hybrid Work Policy 2024)
        </h1>

        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
          <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200" alt="HR" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">แผนกทรัพยากรบุคคล (HR)</h4>
            <p className="text-xs text-slate-500">Corporate Communication Team</p>
          </div>
        </div>

        <div className="prose prose-sm prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-6">
            เรียน พนักงานทุกท่าน เพื่อเป็นการส่งเสริมความยืดหยุ่นและประสิทธิภาพในการทำงานสูงสุด บริษัทมีความยินดีที่จะประกาศแนวทางการทำงานรูปแบบใหม่ที่จะเริ่มใช้ตั้งแต่วันที่ 1 มกราคม 2024 เป็นต้นไป
          </p>
          
          <h3 className="text-lg font-bold text-slate-900 mb-3">หลักการและเหตุผล</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            เราเชื่อมั่นว่าการสร้างสมดุลระหว่างชีวิตและการทำงานเป็นหัวใจสำคัญของความสำเร็จ ผลสำรวจจากพนักงานแสดงให้เห็นว่ารูปแบบ Hybrid Work ช่วยเพิ่มความพึงพอใจในการทำงานได้มากกว่า 40%
          </p>

          <h3 className="text-lg font-bold text-slate-900 mb-3">แนวทางปฏิบัติเบื้องต้น</h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2 mb-6 marker:text-slate-300">
            <li>พนักงานสามารถเข้าปฏิบัติงานที่สำนักงานอย่างน้อย 3 วันต่อสัปดาห์</li>
            <li>กำหนดวันประชุมทีมหลัก (Core Collaboration Days) ตามที่แต่ละแผนกกำหนด</li>
            <li>เบี้ยเลี้ยงการเดินทางจะคำนวณตามวันที่เข้าปฏิบัติงานจริง</li>
            <li>การใช้พื้นที่สำนักงานต้องทำการจองผ่านระบบล่วงหน้า</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            ทั้งนี้ หากพนักงานท่านใดมีข้อสงสัยเกี่ยวกับรายละเอียดเชิงลึก สามารถติดต่อสอบถามได้ที่ฝ่าย HR หรือผู้จัดการสายงานของท่านโดยตรง
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          <span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-500">#CompanyPolicy</span>
          <span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-500">#HybridWork</span>
          <span className="px-3 py-1.5 rounded-full border border-slate-200 text-xs text-slate-500">#2024Update</span>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-slate-500 hover:text-rose-500 transition-colors">
              <span className="material-symbols-outlined font-variation-fill text-slate-400">favorite</span>
              <span className="text-sm font-medium">124</span>
            </button>
            <button className="flex items-center gap-1.5 text-slate-500">
              <span className="material-symbols-outlined font-variation-fill text-slate-400">chat_bubble</span>
              <span className="text-sm font-medium">18</span>
            </button>
          </div>
          <button className="flex items-center gap-2 text-primary bg-blue-50 px-4 py-2 rounded-full text-sm font-bold">
            <span className="material-symbols-outlined text-[18px]">group_add</span> แชร์เข้ากลุ่ม
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3 bg-slate-50 p-2 pl-3 rounded-full border border-slate-100">
          <div className="w-8 h-8 rounded-full bg-navy-deep text-white flex items-center justify-center text-xs font-bold shrink-0">
            SJ
          </div>
          <input type="text" placeholder="แสดงความคิดเห็นของคุณ..." className="flex-1 bg-transparent border-none text-sm focus:ring-0 p-0 text-slate-700 placeholder:text-slate-400 outline-none" />
          <button className="text-primary font-bold text-sm px-3">ส่ง</button>
        </div>
      </div>
    </div>
  );
}
