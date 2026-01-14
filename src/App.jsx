import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PastEvent2025 from './PastEvent2025';
import PastEvent2024 from './PastEvent2024';
import AdminLogin from './AdminLogin';
import SponsorshipForm from './SponsorshipForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sankalana-2025" element={<PastEvent2025 />} />
        <Route path="/sankalana-2024" element={<PastEvent2024 />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/sponsors" element={<SponsorshipForm />} />
      </Routes>
    </Router>
  );
}

export default App;
