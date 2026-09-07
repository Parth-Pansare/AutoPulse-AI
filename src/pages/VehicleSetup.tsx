import { useState } from "react";
import {
  CarFront,
  CheckCircle2,
  Link2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import "../styles/auth.css";

export default function VehicleSetup({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  const [manufacturer, setManufacturer] = useState("Tata");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("2025");
  const [fuel, setFuel] = useState("Petrol");
  const [saved, setSaved] = useState(false);

  const saveVehicle = () => {
    setSaved(true);
    window.setTimeout(() => onNavigate("dashboard"), 450);
  };

  return (
    <div className="auth-page">
      <div className="auth-grid" />
      <div className="auth-container wide">
        <div className="auth-card">
          <div className="auth-brand">
            <div className="auth-brand-icon">
              <CarFront />
            </div>
            <div>
              <div className="auth-brand-name">
                AutoPulse <span>AI</span>
              </div>
              <div className="auth-brand-subtitle">VEHICLE SETUP</div>
            </div>
          </div>
          <div className="auth-heading">
            <div className="auth-status">
              <span /> STEP 1 OF 1
            </div>
            <h1>Connect your vehicle</h1>
            <p>
              Add your vehicle details now. OBD-II connection can be completed
              when your adapter is ready.
            </p>
          </div>
          <div className="setup-grid">
            <label className="setup-field">
              Manufacturer
              <select
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              >
                <option>Tata</option>
                <option>Maruti Suzuki</option>
                <option>Hyundai</option>
                <option>Mahindra</option>
                <option>Other</option>
              </select>
            </label>
            <label className="setup-field">
              Model
              <input
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. Nexon"
              />
            </label>
            <label className="setup-field">
              Year
              <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </label>
            <label className="setup-field">
              Fuel Type
              <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Hybrid</option>
                <option>Electric</option>
              </select>
            </label>
          </div>
          <div className="obd-connect">
            <div>
              <Link2 size={21} />
              <div>
                <b>OBD-II Connection</b>
                <small>
                  Connect an ELM327 adapter later to stream live diagnostics.
                </small>
              </div>
            </div>
            <span className="tag orange">NOT CONNECTED</span>
          </div>
          <div className="auth-security">
            <ShieldCheck size={17} />
            <span>
              Vehicle information stays under your account and is ready for
              future diagnostics.
            </span>
          </div>
          {saved && (
            <div className="auth-security">
              <CheckCircle2 size={17} />
              <span>Vehicle saved. Opening your dashboard…</span>
            </div>
          )}
          <div className="setup-actions">
            <button
              className="secondary-btn"
              type="button"
              onClick={() => onNavigate("dashboard")}
            >
              Skip for now
            </button>
            <button
              className="primary-btn"
              type="button"
              onClick={saveVehicle}
              disabled={saved}
            >
              Save Vehicle <CheckCircle2 size={15} />
            </button>
          </div>
        </div>
        <p className="auth-footer">
          <Sparkles size={11} style={{ display: "inline" }} /> AutoPulse AI •
          Intelligent Vehicle Health
        </p>
      </div>
    </div>
  );
}
