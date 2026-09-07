import { Activity, Battery, Gauge, Thermometer, Zap } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
const rows = [
  ["Engine RPM", "2,140", "rpm", "NORMAL"],
  ["Vehicle Speed", "62", "km/h", "NORMAL"],
  ["Engine Load", "42", "%", "NORMAL"],
  ["Throttle Position", "31", "%", "NORMAL"],
  ["Coolant Temperature", "87", "°C", "OPTIMAL"],
  ["Battery Voltage", "13.8", "V", "HEALTHY"],
  ["Fuel Level", "68", "%", "GOOD"],
  ["Intake Air Temperature", "34", "°C", "NORMAL"],
];
export default function Diagnostics({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  return (
    <DashboardLayout
      page="diagnostics"
      title="Live Diagnostics"
      subtitle="Vehicle parameters from the OBD-II data layer"
      onNavigate={onNavigate}
    >
      <div className="page-title-row">
        <div>
          <h2>OBD-II Monitor</h2>
          <p>Demo data for the frontend. Hardware integration comes later.</p>
        </div>
        <span className="status-pill good">● SIMULATED CONNECTION</span>
      </div>
      <div className="metric-grid">
        <div className="metric-card card">
          <div className="metric-icon cyan">
            <Gauge />
          </div>
          <div className="metric-info">
            <span>RPM</span>
            <strong>2,140</strong>
          </div>
        </div>
        <div className="metric-card card">
          <div className="metric-icon blue">
            <Activity />
          </div>
          <div className="metric-info">
            <span>Speed</span>
            <strong>
              62<small>km/h</small>
            </strong>
          </div>
        </div>
        <div className="metric-card card">
          <div className="metric-icon orange">
            <Thermometer />
          </div>
          <div className="metric-info">
            <span>Coolant</span>
            <strong>
              87<small>°C</small>
            </strong>
          </div>
        </div>
        <div className="metric-card card">
          <div className="metric-icon cyan">
            <Battery />
          </div>
          <div className="metric-info">
            <span>Voltage</span>
            <strong>
              13.8<small>V</small>
            </strong>
          </div>
        </div>
      </div>
      <div className="panel card">
        <h3>Vehicle Parameters</h3>
        <div className="panel-sub">Current sample</div>
        <table className="table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
              <th>Unit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>
                  <span className="tag green">{r[3]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="panel card" style={{ marginTop: 14 }}>
        <h3>Diagnostic Trouble Codes</h3>
        <div className="empty-state">
          <Zap size={22} />
          <div>No active trouble codes</div>
          <small>
            AutoPulse will surface DTCs when an OBD-II adapter reports them.
          </small>
        </div>
      </div>
    </DashboardLayout>
  );
}
