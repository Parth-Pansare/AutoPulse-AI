import { useState } from "react";
import { CarFront, Fuel, Gauge, ShieldCheck, Wrench } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
export default function Vehicle({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  return (
    <DashboardLayout
      page="vehicle"
      title="My Vehicle"
      subtitle="Vehicle profile and connection status"
      onNavigate={onNavigate}
    >
      <div className="vehicle-hero card">
        <div className="vehicle-meta">
          <span className="tag green">PRIMARY VEHICLE</span>
          <h2>Tata Nexon</h2>
          <p>2024 • Petrol • OBD-II capable</p>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button
              className="primary-btn"
              onClick={() => onNavigate("diagnostics")}
            >
              <Gauge size={15} /> Open Diagnostics
            </button>
            <button
              type="button"
              className="secondary-btn"
              onClick={() => setEditing((v) => !v)}
            >
              <Wrench size={15} /> {editing ? "Close Edit" : "Edit Vehicle"}
            </button>
          </div>
        </div>
        <div className="vehicle-art">🚙</div>
        {editing && (
          <div className="panel card" style={{ marginTop: 14 }}>
            <h3>Edit Vehicle</h3>
            <div className="setup-grid">
              <label className="setup-field">
                Model
                <input defaultValue="Nexon" />
              </label>
              <label className="setup-field">
                Odometer
                <input defaultValue="18420" type="number" />
              </label>
            </div>
            <button
              type="button"
              className="primary-btn"
              style={{ marginTop: 12 }}
              onClick={() => setEditing(false)}
            >
              Save Changes
            </button>
          </div>
        )}
        <div className="detail-grid">
          <div className="detail card">
            <CarFront size={17} />
            <span>Vehicle ID</span>
            <b>AP-NX-2024</b>
          </div>
          <div className="detail card">
            <Fuel size={17} />
            <span>Fuel Type</span>
            <b>Petrol</b>
          </div>
          <div className="detail card">
            <ShieldCheck size={17} />
            <span>Connection</span>
            <b style={{ color: "#2dd2a6" }}>Ready for OBD-II</b>
          </div>
        </div>
        <div className="panel card" style={{ marginTop: 14 }}>
          <h3>Vehicle Profile</h3>
          <div className="panel-sub">
            Information used by AutoPulse for future health analysis.
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>Manufacturer</td>
                <td>Tata</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>Nexon</td>
              </tr>
              <tr>
                <td>Model Year</td>
                <td>2024</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>Petrol</td>
              </tr>
              <tr>
                <td>Current odometer</td>
                <td>18,420 km</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
