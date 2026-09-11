import { useState } from "react";
import { AlertTriangle, CheckCircle2, Wrench } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const alerts = [
  [
    "Check tire pressure",
    "One maintenance recommendation is waiting for your attention.",
    "MEDIUM",
    "orange",
    AlertTriangle,
  ],
  [
    "Service reminder",
    "Engine oil service is due soon.",
    "INFO",
    "green",
    Wrench,
  ],
] as const;

export default function Alerts({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  const [read, setRead] = useState(false);
  return (
    <DashboardLayout
      page="alerts"
      title="Alerts & Notifications"
      subtitle="Important vehicle health events"
      onNavigate={onNavigate}
    >
      <div className="page-title-row">
        <div>
          <h2>Vehicle Alerts</h2>
          <p>
            {read
              ? "All current alerts have been marked as read."
              : "Review recommendations and diagnostic events."}
          </p>
        </div>
        <button
          type="button"
          className="secondary-btn"
          onClick={() => setRead(true)}
          disabled={read}
        >
          <CheckCircle2 size={15} /> {read ? "All Read" : "Mark all read"}
        </button>
      </div>
      <div className="alert-list">
        {alerts.map(([title, text, level, type, Icon]) => (
          <div className={`alert-item card ${read ? "read" : ""}`} key={title}>
            <div
              className="alert-icon"
              style={{
                color: type === "orange" ? "#ff9b4e" : "#2dd2a6",
                background:
                  type === "orange"
                    ? "rgba(255,155,78,.09)"
                    : "rgba(45,210,166,.08)",
              }}
            >
              <Icon size={18} />
            </div>
            <div style={{ flex: 1 }}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <span className={`tag ${type}`}>{level}</span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
