import { useEffect, useState } from "react";
import { Activity, Battery, Gauge, Thermometer, Zap } from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";
import HealthScore from "../components/HealthScore";
import MetricCard from "../components/MetricCard";

export default function Dashboard({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  const [dashboardVisible, setDashboardVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setDashboardVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      className={`dashboard-transition ${
        dashboardVisible ? "dashboard-transition-visible" : ""
      }`}
    >
      <DashboardLayout
        page="dashboard"
        title="Health Command Center"
        subtitle="Live overview of your vehicle health"
        onNavigate={onNavigate}
      >
        <div className="page-title-row">
          <div>
            <h2>Good evening 👋</h2>
            <p>
              Your vehicle is performing within healthy operating ranges.
            </p>
          </div>

          <button
            className="primary-btn"
            onClick={() => onNavigate("diagnostics")}
          >
            <Activity size={15} /> View Live Data
          </button>
        </div>

        <div className="dashboard-grid">
          <HealthScore />

          <div className="panel card">
            <h3>Health Trend</h3>
            <div className="panel-sub">Last 7 monitoring sessions</div>

            <div className="chart">
              {[52, 65, 61, 73, 68, 82, 87, 78, 91, 86, 94, 88].map(
                (h, i) => (
                  <div
                    className="chart-bar"
                    style={{ height: `${h}%` }}
                    key={i}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        <div className="metric-grid">
          <MetricCard
            label="Engine RPM"
            value="2,140"
            unit="rpm"
            icon={<Gauge />}
            trend="Stable"
          />

          <MetricCard
            label="Vehicle Speed"
            value="62"
            unit="km/h"
            icon={<Activity />}
            trend="Normal"
            type="blue"
          />

          <MetricCard
            label="Coolant Temp"
            value="87"
            unit="°C"
            icon={<Thermometer />}
            trend="Optimal"
            type="orange"
          />

          <MetricCard
            label="Battery Voltage"
            value="13.8"
            unit="V"
            icon={<Battery />}
            trend="Healthy"
          />
        </div>

        <div className="dashboard-grid">
          <div className="panel card">
            <h3>Recent Diagnostics</h3>
            <div className="panel-sub">Latest vehicle readings</div>

            <table className="table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Engine Load</td>
                  <td>42%</td>
                  <td>
                    <span className="tag green">NORMAL</span>
                  </td>
                </tr>

                <tr>
                  <td>Throttle Position</td>
                  <td>31%</td>
                  <td>
                    <span className="tag green">NORMAL</span>
                  </td>
                </tr>

                <tr>
                  <td>Fuel Level</td>
                  <td>68%</td>
                  <td>
                    <span className="tag green">GOOD</span>
                  </td>
                </tr>

                <tr>
                  <td>Intake Temperature</td>
                  <td>34°C</td>
                  <td>
                    <span className="tag green">NORMAL</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="panel card">
            <h3>Attention Required</h3>
            <div className="panel-sub">Things worth checking</div>

            <div className="alert-item" style={{ marginTop: 10 }}>
              <div
                className="alert-icon"
                style={{
                  background: "rgba(255,155,78,.09)",
                  color: "#ff9b4e",
                }}
              >
                <Zap size={17} />
              </div>

              <div>
                <h3>Check tire pressure</h3>
                <p>
                  One maintenance recommendation is waiting for your attention.
                </p>
              </div>
            </div>

            <button
              className="secondary-btn"
              style={{ marginTop: 12 }}
              onClick={() => onNavigate("alerts")}
            >
              View all alerts
            </button>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}