import Dashboard from "./pages/Dashboard";
import Diagnostics from "./pages/Diagnostics";
import Alerts from "./pages/Alerts";
import Finance from "./pages/Finance";
import Tips from "./pages/Tips";

export default function App() {
  return (
    <div>
      <h1>🚗 SmartCar MVP</h1>
      <Dashboard />
      <Diagnostics />
      <Alerts />
      <Finance />
      <Tips />
    </div>
  );
}