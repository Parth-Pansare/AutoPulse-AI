import { useState } from "react";
import { Bell, Database, Lock, User, Wrench } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
export default function Settings({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  const [health, setHealth] = useState(true);
  const [maintenance, setMaintenance] = useState(true);
  return (
    <DashboardLayout
      page="settings"
      title="Settings"
      subtitle="Manage your AutoPulse account and preferences"
      onNavigate={onNavigate}
    >
      <div className="settings-grid">
        <section className="setting card">
          <User size={18} />
          <h3>Profile</h3>
          <p>Manage the account information used by AutoPulse.</p>
          <div className="setting-row">
            <span>Display name</span>
            <b>Parth</b>
          </div>
          <div className="setting-row">
            <span>Email</span>
            <b>owner@example.com</b>
          </div>
        </section>
        <section className="setting card">
          <Wrench size={18} />
          <h3>Vehicle</h3>
          <p>Configure the vehicle connected to your account.</p>
          <div className="setting-row">
            <span>Primary vehicle</span>
            <b>Tata Nexon</b>
          </div>
          <div className="setting-row">
            <span>OBD-II</span>
            <span className="tag orange">NOT CONNECTED</span>
          </div>
        </section>
        <section className="setting card">
          <Bell size={18} />
          <h3>Notifications</h3>
          <p>Choose which vehicle events you want to receive.</p>
          <div className="setting-row">
            <span>Health alerts</span>
            <button
              type="button"
              className={`toggle ${health ? "on" : ""}`}
              onClick={() => setHealth((v) => !v)}
              aria-label="Toggle health alerts"
            >
              <i />
            </button>
          </div>
          <div className="setting-row">
            <span>Maintenance reminders</span>
            <button
              type="button"
              className={`toggle ${maintenance ? "on" : ""}`}
              onClick={() => setMaintenance((v) => !v)}
              aria-label="Toggle maintenance reminders"
            >
              <i />
            </button>
          </div>
        </section>
        <section className="setting card">
          <Lock size={18} />
          <h3>Privacy & Security</h3>
          <p>
            Your future backend will control authentication, access, and data
            retention.
          </p>
          <div className="setting-row">
            <span>Two-factor authentication</span>
            <span className="tag orange">NOT SET</span>
          </div>
          <div className="setting-row">
            <span>Vehicle data sharing</span>
            <span className="tag green">PRIVATE</span>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
