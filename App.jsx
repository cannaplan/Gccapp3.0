
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Greenhouse7030 } from './pages/Greenhouse7030';
import { BOM } from './pages/BOM';
import { Dashboard } from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/greenhouse/7030" element={<Greenhouse7030 />} />
        <Route path="/bom" element={<BOM />} />
        <Route path="/social" element={<div>Social Assets</div>} />
        <Route path="/dao" element={<div>Petition Tracker - 12k/120k</div>} />
      </Routes>
    </Router>
  );
}

export default App;
