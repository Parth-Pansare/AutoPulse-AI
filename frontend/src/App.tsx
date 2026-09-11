import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VehicleSetup from "./pages/VehicleSetup";
import Dashboard from "./pages/Dashboard";
import Vehicle from "./pages/Vehicle";
import Diagnostics from "./pages/Diagnostics";
import Maintenance from "./pages/Maintenance";
import Alerts from "./pages/Alerts";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";

type Page =
  | "home"
  | "login"
  | "register"
  | "setup"
  | "dashboard"
  | "vehicle"
  | "diagnostics"
  | "maintenance"
  | "alerts"
  | "ai"
  | "settings";

const validPages: Page[] = [
  "home",
  "login",
  "register",
  "setup",
  "dashboard",
  "vehicle",
  "diagnostics",
  "maintenance",
  "alerts",
  "ai",
  "settings",
];

function getPage(): Page {
  const hash = window.location.hash.replace(/^#\/?/, "").split("?")[0];
  return validPages.includes(hash as Page) ? (hash as Page) : "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const handleHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (nextPage: string) => {
    if (!validPages.includes(nextPage as Page)) return;
    if (window.location.hash === `#${nextPage}`) {
      setPage(nextPage as Page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = nextPage;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  switch (page) {
    case "login":
      return <Login onNavigate={navigate} />;
    case "register":
      return <Register onNavigate={navigate} />;
    case "setup":
      return <VehicleSetup onNavigate={navigate} />;
    case "dashboard":
      return <Dashboard onNavigate={navigate} />;
    case "vehicle":
      return <Vehicle onNavigate={navigate} />;
    case "diagnostics":
      return <Diagnostics onNavigate={navigate} />;
    case "maintenance":
      return <Maintenance onNavigate={navigate} />;
    case "alerts":
      return <Alerts onNavigate={navigate} />;
    case "ai":
      return <AIAssistant onNavigate={navigate} />;
    case "settings":
      return <Settings onNavigate={navigate} />;
    default:
      return <Home onNavigate={navigate} />;
  }
}
