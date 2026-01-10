import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import PastEvent2025 from './PastEvent2025';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sankalana-2025" element={<PastEvent2025 />} />
      </Routes>
    </Router>
  );
}

export default App;
