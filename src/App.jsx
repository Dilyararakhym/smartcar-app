import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Diagnostics from "./pages/Diagnostics";
import Alerts from "./pages/Alerts";
import Finance from "./pages/Finance";
import Tips from "./pages/Tips";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>🚗 SmartCar MVP</h1>

        {/* Навигация */}
        <nav style={{ display: "flex", gap: "10px" }}>
          <Link to="/">Dashboard</Link>
          <Link to="/diagnostics">Diagnostics</Link>
          <Link to="/alerts">Alerts</Link>
          <Link to="/finance">Finance</Link>
          <Link to="/tips">Tips</Link>
        </nav>

        <hr />

        {/* Роуты */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}