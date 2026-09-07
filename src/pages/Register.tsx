import { useState, type FormEvent } from "react";
import { ArrowLeft, Lock, Mail, ShieldCheck, User, Zap } from "lucide-react";
import "../styles/auth.css";

interface RegisterProps {
  onNavigate: (page: string) => void;
}

export default function Register({ onNavigate }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !password || !confirm)
      return setError("Please complete all fields.");
    if (!email.includes("@"))
      return setError("Please enter a valid email address.");
    if (password.length < 6)
      return setError("Password must contain at least 6 characters.");
    if (password !== confirm) return setError("Passwords do not match.");
    if (!terms) return setError("Please accept the terms and privacy policy.");
    localStorage.setItem("autopulse_user", JSON.stringify({ name, email }));
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
        <div className="auth-card register-card">
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
              <span /> CREATE YOUR VEHICLE PROFILE
            </div>
            <h1>Get Started</h1>
            <p>
              Create your AutoPulse account and start monitoring your vehicle's
              health.
            </p>
          </div>
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <User size={18} />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  autoComplete="name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="register-email">Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  id="register-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="register-password">Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  id="confirm-password"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                />
              </div>
            </div>
            <label className="terms-checkbox">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <span>I agree to the AutoPulse terms and privacy policy.</span>
            </label>
            {error && (
              <div className="auth-security" style={{ color: "#ff8b98" }}>
                <span>{error}</span>
              </div>
            )}
            <button type="submit" className="auth-submit">
              Create Account <Zap size={17} />
            </button>
          </form>
          <div className="auth-security">
            <ShieldCheck size={17} />
            <span>
              Your account and vehicle information are securely protected.
            </span>
          </div>
          <p className="auth-switch">
            Already have an account?{" "}
            <button type="button" onClick={() => onNavigate("login")}>
              Sign In
            </button>
          </p>
        </div>
        <p className="auth-footer">AutoPulse AI • Intelligent Vehicle Health</p>
      </div>
    </div>
  );
}
