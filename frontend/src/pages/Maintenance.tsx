import { useState } from "react";
import {
  CalendarClock,
  CheckCircle2,
  Droplets,
  Filter,
  Wrench,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
const items = [
  ["Engine Oil", "Due in 1,200 km", "Recommended", "orange"],
  ["Brake Inspection", "Due in 2,400 km", "Scheduled", "green"],
  ["Air Filter", "Due in 4,800 km", "Recommended", "orange"],
];
export default function Maintenance({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  const [showForm, setShowForm] = useState(false);
  const [added, setAdded] = useState(false);
  return (
    <DashboardLayout
      page="maintenance"
      title="Maintenance"
      subtitle="Keep your vehicle ahead of its service schedule"
      onNavigate={onNavigate}
    >
      <div className="page-title-row">
        <div>
          <h2>Maintenance Planner</h2>
          <p>Simple reminders now, predictive maintenance later.</p>
        </div>
        <button
          type="button"
          className="primary-btn"
          onClick={() => setShowForm(true)}
        >
          <CalendarClock size={15} /> Add Service
        </button>
      </div>
      {showForm && (
        <div className="panel card" style={{ marginBottom: 14 }}>
          <h3>Add Service</h3>
          <div className="setup-grid">
            <label className="setup-field">
              Service
              <input placeholder="e.g. Engine Oil" />
            </label>
            <label className="setup-field">
              Due Date
              <input type="date" />
            </label>
          </div>
          <div className="setup-actions">
            <button
              type="button"
              className="secondary-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                setAdded(true);
                setShowForm(false);
              }}
            >
              Save Service
            </button>
          </div>
        </div>
      )}
      {added && (
        <div className="auth-security" style={{ marginBottom: 14 }}>
          Service reminder added successfully.
        </div>
      )}
      <div className="detail-grid">
        {items.map(([name, due, status, type], i) => (
          <div className="detail card" key={name}>
            <div className="metric-icon orange">
              <Wrench size={15} />
            </div>
            <span>{name}</span>
            <b>{due}</b>
            <small
              className={`tag ${type}`}
              style={{ display: "inline-block", marginTop: 8 }}
            >
              {status}
            </small>
          </div>
        ))}
      </div>
      <div className="panel card" style={{ marginTop: 14 }}>
        <h3>Maintenance History</h3>
        <div className="panel-sub">Recent completed services</div>
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Date</th>
              <th>Workshop</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Engine Oil</td>
              <td>12 Aug 2026</td>
              <td>AutoPulse Garage</td>
              <td>
                <span className="tag green">COMPLETED</span>
              </td>
            </tr>
            <tr>
              <td>Brake Service</td>
              <td>03 Jul 2026</td>
              <td>Local Service Center</td>
              <td>
                <span className="tag green">COMPLETED</span>
              </td>
            </tr>
            <tr>
              <td>Air Filter</td>
              <td>18 May 2026</td>
              <td>AutoPulse Garage</td>
              <td>
                <span className="tag green">COMPLETED</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
