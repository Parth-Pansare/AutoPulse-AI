import { useState, type FormEvent } from "react";
import { ArrowLeft, Lock, Mail, ShieldCheck, Zap } from "lucide-react";
import "../styles/auth.css";

interface LoginProps {
  onNavigate: (page: string) => void;
}

export default function Login({ onNavigate }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    localStorage.setItem("autopulse_user", JSON.stringify({ email, remember }));
    localStorage.setItem("autopulse_authenticated", "true");
    onNavigate("setup");
  };

  return (
     <div className="auth-page auth-transition-page">
      <div className="auth-grid" />
      <div className="auth-glow auth-glow-blue" />
      <div className="auth-glow auth-glow-orange" />
      <div className="auth-container">
        <button
          className="back-button"
          type="button"
          onClick={() => onNavigate("home")}
        >
          <ArrowLeft size={17} /> Back to Home
        </button>
        <div className="auth-card">
          <div className="auth-brand">
            <div className="auth-brand-icon">
              <Zap size={22} />
            </div>
            <div>
              <div className="auth-brand-name">
                AutoPulse <span>AI</span>
              </div>
              <div className="auth-brand-subtitle">Vehicle Intelligence</div>
            </div>
          </div>
          <div className="auth-heading">
            <div className="auth-status">
              <span /> SECURE VEHICLE ACCESS
            </div>
            <h1>Welcome Back</h1>
            <p>Sign in to access your vehicle health command center.</p>
          </div>
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </div>
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="forgot-button"
                onClick={() =>
                  setError(
                    "Password recovery will be connected to the backend later.",
                  )
                }
              >
                Forgot password?
              </button>
            </div>
            {error && (
              <div className="auth-security" style={{ color: "#ff8b98" }}>
                <span>{error}</span>
              </div>
            )}
            <button type="submit" className="auth-submit">
              Sign In <Zap size={17} />
            </button>
          </form>
          <div className="auth-divider">
            <span>OR</span>
          </div>
          <div className="auth-security">
            <ShieldCheck size={17} />
            <span>
              Your vehicle data is protected with secure authentication.
            </span>
          </div>
          <p className="auth-switch">
            Don't have an account?{" "}
            <button type="button" onClick={() => onNavigate("register")}>
              Create Account
            </button>
          </p>
        </div>
        <p className="auth-footer">AutoPulse AI • Intelligent Vehicle Health</p>
      </div>
    </div>
  );
}
