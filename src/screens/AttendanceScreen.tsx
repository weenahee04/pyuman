import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { clsx } from 'clsx';

export default function AttendanceScreen() {
  const navigate = useNavigate();

  const attendanceData = [
    { date: '24 ต.ค. 2023', day: 'อังคาร', in: '08:45', out: '17:30', status: 'ปกติ', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { date: '23 ต.ค. 2023', day: 'จันทร์', in: '09:15', out: '18:00', status: 'สาย', statusColor: 'text-orange-600 bg-orange-50 border-orange-100' },
    { date: '20 ต.ค. 2023', day: 'ศุกร์', in: '08:50', out: '17:45', status: 'ปกติ', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    { date: '19 ต.ค. 2023', day: 'พฤหัสบดี', in: '-', out: '-', status: 'ลาพักร้อน', statusColor: 'text-blue-600 bg-blue-50 border-blue-100' },
    { date: '18 ต.ค. 2023', day: 'พุธ', in: '08:30', out: '17:30', status: 'ปกติ', statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  ];

  return (
    <>
      <div className="sticky top-0 z-30 bg-off-white/90 backdrop-blur-xl px-5 pt-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-slate-900">ประวัติการเข้างาน</h2>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700 border border-slate-100">
          <span className="material-symbols-outlined">filter_list</span>
        </button>
      </div>

      <div className="px-5 py-2 mb-20">
        {/* Month Selector */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between mb-6">
          <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">calendar_month</span>
            <span className="font-bold text-slate-900">ตุลาคม 2566</span>
          </div>
          <button className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] text-slate-500 mb-1">มาปกติ</p>
            <p className="text-xl font-bold text-emerald-500">18</p>
            <p className="text-[10px] text-slate-400">วัน</p>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] text-slate-500 mb-1">มาสาย</p>
            <p className="text-xl font-bold text-orange-500">2</p>
            <p className="text-[10px] text-slate-400">วัน</p>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm text-center">
            <p className="text-[10px] text-slate-500 mb-1">ลางาน</p>
            <p className="text-xl font-bold text-blue-500">1</p>
            <p className="text-[10px] text-slate-400">วัน</p>
          </div>
        </div>

        {/* Attendance List */}
        <div className="space-y-3">
          {attendanceData.map((item, index) => (
            <div key={index} className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex flex-col items-center justify-center border border-slate-100 shrink-0">
                  <span className="text-xs font-bold text-slate-900">{item.date.split(' ')[0]}</span>
                  <span className="text-[9px] text-slate-500">{item.day}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex items-center gap-1 text-slate-600">
                      <span className="material-symbols-outlined text-[14px] text-emerald-500">login</span>
                      <span className="text-xs font-bold">{item.in}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-600">
                      <span className="material-symbols-outlined text-[14px] text-rose-500">logout</span>
                      <span className="text-xs font-bold">{item.out}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400">{item.date}</p>
                </div>
              </div>
              <span className={clsx("text-[10px] font-bold px-2.5 py-1 rounded-full border", item.statusColor)}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
}
