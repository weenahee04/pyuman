import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function PayslipScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">สลิปเงินเดือนดิจิทัล</h2>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">share</span>
        </button>
      </div>

      <div className="px-5 py-2">
        {/* Blue Card */}
        <div className="bg-primary rounded-[32px] p-6 text-white shadow-lg shadow-blue-500/20 mb-6 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div>
              <p className="text-blue-200 text-xs mb-1">รอบเงินเดือน</p>
              <h3 className="text-xl font-bold">ตุลาคม 2566</h3>
            </div>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">ชำระแล้ว</span>
          </div>

          <div className="relative z-10">
            <p className="text-blue-200 text-xs mb-1">รายรับสุทธิ (Net Salary)</p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-4xl font-bold tracking-tight">45,250.00</h2>
              <span className="text-blue-200 font-medium">บาท</span>
            </div>
          </div>
        </div>

        {/* Earnings */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="material-symbols-outlined text-emerald-500">payments</span>
            <h3 className="font-bold text-slate-900">รายรับ (Earnings)</h3>
          </div>
          <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">เงินเดือนพื้นฐาน (Basic Salary)</span>
              <span className="font-bold text-slate-900">42,000.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">ค่าล่วงเวลา (OT)</span>
              <span className="font-bold text-slate-900">2,500.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">โบนัสพิเศษ (Bonus)</span>
              <span className="font-bold text-slate-900">3,000.00</span>
            </div>
            <div className="pt-4 border-t border-slate-100 border-dashed flex justify-between items-center">
              <span className="font-bold text-slate-900">รวมรายรับ</span>
              <span className="font-bold text-primary text-lg">47,500.00</span>
            </div>
          </div>
        </div>

        {/* Deductions */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="material-symbols-outlined text-rose-500">account_balance_wallet</span>
            <h3 className="font-bold text-slate-900">รายจ่าย (Deductions)</h3>
          </div>
          <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">ภาษีหัก ณ ที่จ่าย (Tax)</span>
              <span className="font-bold text-slate-900">1,500.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 text-sm">ประกันสังคม (Social Security)</span>
              <span className="font-bold text-slate-900">750.00</span>
            </div>
            <div className="pt-4 border-t border-slate-100 border-dashed flex justify-between items-center">
              <span className="font-bold text-slate-900">รวมรายจ่าย</span>
              <span className="font-bold text-rose-500 text-lg">2,250.00</span>
            </div>
          </div>
        </div>

        {/* Net Salary Box */}
        <div className="bg-blue-50/50 rounded-[24px] p-5 border border-blue-100 flex justify-between items-center mb-6">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-0.5">เงินรับสุทธิเข้าบัญชี</p>
            <p className="text-[10px] text-slate-400">ธนาคารกสิกรไทย (****1234)</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary">45,250.00</span>
            <span className="text-xs font-bold text-primary">THB</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-primary text-white font-bold py-4 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform mb-4">
          <span className="material-symbols-outlined text-lg">picture_as_pdf</span> ดาวน์โหลด PDF
        </button>
        <p className="text-center text-[10px] text-slate-400 mb-8">เอกสารฉบับนี้จัดทำโดยระบบอัตโนมัติ ไม่ต้องมีลายเซ็น</p>
      </div>
      <BottomNav />
    </>
  );
}
