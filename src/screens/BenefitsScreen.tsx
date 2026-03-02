import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function BenefitsScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">สวัสดิการและสิทธิประโยชน์</h2>
        <button className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
          <span className="material-symbols-outlined text-sm">info</span>
        </button>
      </div>

      <div className="px-5 py-2">
        {/* Blue Card */}
        <div className="bg-primary rounded-[32px] p-6 text-white shadow-lg shadow-blue-500/20 mb-8 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-20">
            <span className="material-symbols-outlined text-[120px]">featured_seasonal_and_gifts</span>
          </div>
          
          <div className="relative z-10">
            <p className="text-blue-200 text-sm mb-1">สิทธิ์ที่ใช้ไปในปีนี้</p>
            <div className="flex items-baseline gap-2 mb-4">
              <h2 className="text-5xl font-bold tracking-tight">85%</h2>
              <span className="text-blue-200 text-xs">เหลือสิทธิ์อีก 4 รายการ</span>
            </div>
            
            <div className="w-full h-2 bg-blue-900/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full w-[85%]"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="font-bold text-slate-900 text-lg">สวัสดิการของคุณ</h3>
          <button className="text-xs font-bold text-primary">ดูทั้งหมด</button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm flex flex-col h-full">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-4 shrink-0">
              <span className="material-symbols-outlined text-[20px]">medical_services</span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-2 leading-tight">ประกันสุขภาพ<br/>พรีเมียม</h4>
            <p className="text-[10px] text-slate-500 mb-4 flex-1">คุ้มครอง OPD/IPD ทั่วประเทศ</p>
            <button className="text-primary text-[11px] font-bold flex items-center gap-1 mt-auto">
              ดูรายละเอียด <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm flex flex-col h-full">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-4 shrink-0">
              <span className="material-symbols-outlined text-[20px]">savings</span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-2 leading-tight">กองทุนสำรองเลี้ยง<br/>ชีพ</h4>
            <p className="text-[10px] text-slate-500 mb-4 flex-1">สมทบสูงสุด 10% ของเงินเดือน</p>
            <button className="text-primary text-[11px] font-bold flex items-center gap-1 mt-auto">
              ดูรายละเอียด <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm flex flex-col h-full">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-4 shrink-0">
              <span className="material-symbols-outlined text-[20px]">school</span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-2 leading-tight">งบฝึกอบรมสัมมนา</h4>
            <p className="text-[10px] text-slate-500 mb-4 flex-1">30,000 บาท ต่อปีปฏิทิน</p>
            <button className="text-primary text-[11px] font-bold flex items-center gap-1 mt-auto">
              ดูรายละเอียด <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm flex flex-col h-full">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 mb-4 shrink-0">
              <span className="material-symbols-outlined text-[20px]">fitness_center</span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-2 leading-tight">ฟิตเนสรายเดือน</h4>
            <p className="text-[10px] text-slate-500 mb-4 flex-1">ส่วนลดสมาชิก Gym ชั้นนำ</p>
            <button className="text-primary text-[11px] font-bold flex items-center gap-1 mt-auto">
              ดูรายละเอียด <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Other Benefits */}
        <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between mb-8 active:scale-[0.98] transition-transform cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
              <span className="material-symbols-outlined">redeem</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">สวัสดิการอื่นๆ</h4>
              <p className="text-[10px] text-slate-400 mt-0.5">เบี้ยเลี้ยง, ของขวัญวันเกิด และอื่นๆ</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </div>
        </div>

      </div>
      <BottomNav />
    </>
  );
}
