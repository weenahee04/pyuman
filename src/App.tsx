import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsScreen from './screens/NewsScreen';
import ReportIssueScreen from './screens/ReportIssueScreen';
import IdCardScreen from './screens/IdCardScreen';
import AnnouncementDetailScreen from './screens/AnnouncementDetailScreen';
import PayslipScreen from './screens/PayslipScreen';
import BenefitsScreen from './screens/BenefitsScreen';
import ServicesScreen from './screens/ServicesScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import LeaveRequestScreen from './screens/LeaveRequestScreen';
import MaintenanceScreen from './screens/MaintenanceScreen';
import ContactHRScreen from './screens/ContactHRScreen';
import EvaluationScreen from './screens/EvaluationScreen';

export default function App() {
  return (
    <Router>
      <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-off-white overflow-x-hidden shadow-2xl pb-24">
        <Routes>
          <Route path="/" element={<NewsScreen />} />
          <Route path="/report-issue" element={<ReportIssueScreen />} />
          <Route path="/id-card" element={<IdCardScreen />} />
          <Route path="/announcement/:id" element={<AnnouncementDetailScreen />} />
          <Route path="/payslip" element={<PayslipScreen />} />
          <Route path="/benefits" element={<BenefitsScreen />} />
          <Route path="/services" element={<ServicesScreen />} />
          <Route path="/attendance" element={<AttendanceScreen />} />
          <Route path="/leave-request" element={<LeaveRequestScreen />} />
          <Route path="/maintenance" element={<MaintenanceScreen />} />
          <Route path="/contact-hr" element={<ContactHRScreen />} />
          <Route path="/evaluation" element={<EvaluationScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
