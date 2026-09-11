import type { ReactNode } from "react";

import {
  Activity,
  ArrowRight,
  Bell,
  Brain,
  Car,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Play,
  PlugZap,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import autopulseLogo from "../assets/autopulse-logo.png";
import autopulseCar from "../assets/autopulse-car.png";

import "../styles/home.css";

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const navigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
    }
  };

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="landing-page">
      <div className="landing-grid" />

      <div className="landing-glow landing-glow-cyan" />
      <div className="landing-glow landing-glow-orange" />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="landing-header">
        <div className="landing-container navbar">

          <button
            type="button"
            className="logo-button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              src={autopulseLogo}
              alt="AutoPulse AI"
              className="landing-logo"
            />
          </button>

          <nav className="landing-nav">

            <button
              type="button"
              onClick={() => scrollTo("features")}
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => scrollTo("how-it-works")}
            >
              How It Works
            </button>

            <button
              type="button"
              onClick={() => scrollTo("pricing")}
            >
              Pricing
            </button>

            <button
              type="button"
              onClick={() => scrollTo("about")}
            >
              About
            </button>

          </nav>

          <div className="nav-actions">

            <button
              type="button"
              className="signin-button"
              onClick={() => navigate("login")}
            >
              Sign In
            </button>

            <button
              type="button"
              className="nav-cta"
              onClick={() => navigate("register")}
            >
              Get Started
              <ArrowRight size={17} />
            </button>

          </div>
        </div>
      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main>

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="hero-section">

          <div className="landing-container hero-container">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="hero-content">

              <div className="hero-badge">
                <span className="badge-dot" />
                AI-POWERED VEHICLE INTELLIGENCE
              </div>

              <h1 className="hero-title">
                Your Vehicle&apos;s
                <br />

                <span className="cyan">
                  Health,
                </span>{" "}

                Powered by{" "}

                <span className="orange">
                  AI
                </span>
              </h1>

              <p className="hero-text">
                Monitor. Understand. Prevent.
                <br />

                AutoPulse AI connects to your vehicle&apos;s OBD-II
                system to monitor health, detect issues, and predict
                maintenance before problems become expensive repairs.
              </p>


              <div className="hero-buttons">

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => navigate("register")}
                >
                  Get Started
                  <ArrowRight size={18} />
                </button>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => navigate("dashboard")}
                >
                  <Play size={16} />
                  Watch Demo
                </button>

              </div>


              <div className="trust-row">

                <div className="trust-item">
                  <ShieldCheck size={19} />
                  <span>Safe &amp; Secure</span>
                </div>

                <div className="trust-item">
                  <Activity size={19} />
                  <span>Real-Time Diagnostics</span>
                </div>

                <div className="trust-item">
                  <Wrench size={19} />
                  <span>Predictive Maintenance</span>
                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT VEHICLE VISUAL
            ================================================= */}

            <div className="hero-visual">

              {/* Car background glow */}

              <div className="car-glow" />

              <div className="car-ring car-ring-blue" />

              <div className="car-ring car-ring-orange" />


              {/* =================================================
                  CONNECTION LINES
              ================================================= */}

              <svg
                className="vehicle-connections"
                viewBox="0 0 720 480"
                preserveAspectRatio="none"
                aria-hidden="true"
              >

                {/* Vehicle Health → Car */}

                <path
                  className="connection-line health-line"
                  d="
                    M 145 85
                    C 145 145,
                      190 150,
                      285 188
                    C 315 200,
                      335 211,
                      350 235
                  "
                />


                {/* OBD-II → Car */}

                <path
                  className="connection-line obd-line"
                  d="
                    M 575 85
                    C 575 145,
                      550 158,
                      525 185
                    C 505 207,
                      500 220,
                      485 245
                  "
                />


                {/* Vehicle Health connection */}

                <circle
                  className="connection-node"
                  cx="350"
                  cy="235"
                  r="6"
                />

                <circle
                  className="connection-node-pulse"
                  cx="350"
                  cy="235"
                  r="12"
                />


                {/* OBD-II connection */}

                <circle
                  className="connection-node"
                  cx="485"
                  cy="245"
                  r="6"
                />

                <circle
                  className="connection-node-pulse"
                  cx="485"
                  cy="245"
                  r="12"
                />

              </svg>


              {/* =================================================
                  VEHICLE HEALTH CARD
              ================================================= */}

              <div className="vehicle-status-card health-status-card">

                <div className="status-card-icon health-icon">
                  <Activity size={20} />
                </div>

                <div className="status-card-content">

                  <span className="status-label">
                    VEHICLE HEALTH
                  </span>

                  <strong>
                    87 <small>/ 100</small>
                  </strong>

                  <span className="status-condition">
                    Good Condition
                  </span>

                </div>

                <span className="status-live-dot" />

              </div>


              {/* =================================================
                  OBD-II CONNECTED CARD
              ================================================= */}

              <div className="vehicle-status-card obd-status-card">

                <div className="status-card-icon obd-icon">
                  <Gauge size={20} />
                </div>

                <div className="status-card-content">

                  <span className="status-label">
                    OBD-II CONNECTED
                  </span>

                  <strong>
                    24 Parameters Live
                  </strong>

                  <span className="status-condition">
                    Real-Time Vehicle Data
                  </span>

                </div>

                <span className="status-live-dot" />

              </div>


              {/* =================================================
                  CAR IMAGE
              ================================================= */}

              <img
                src={autopulseCar}
                alt="Vehicle connected to AutoPulse AI"
                className="hero-car"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            FEATURES
        ===================================================== */}

        <section
          className="features-section"
          id="features"
        >

          <div className="landing-container">

            <div className="feature-grid">

              <FeatureCard
                icon={<Car size={23} />}
                title="Real-Time Diagnostics"
                text="Monitor critical vehicle parameters while you drive."
                type="cyan"
              />

              <FeatureCard
                icon={<Brain size={23} />}
                title="AI-Powered Insights"
                text="Understand vehicle problems in simple language."
                type="purple"
              />

              <FeatureCard
                icon={<Wrench size={23} />}
                title="Predictive Maintenance"
                text="Identify potential problems before they become costly."
                type="orange"
              />

              <FeatureCard
                icon={<Bell size={23} />}
                title="Instant Alerts"
                text="Get notified when your vehicle needs attention."
                type="red"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section
          className="how-section"
          id="how-it-works"
        >

          <div className="landing-container">

            <div className="how-heading">

              <div className="section-label">
                <span />
                HOW IT WORKS
              </div>

              <h2 className="section-title">
                From Vehicle Data{" "}
                <span>
                  to Intelligent Action
                </span>
              </h2>

              <p className="section-description">
                Four simple steps turn raw vehicle data into useful,
                understandable insights.
              </p>

            </div>


            <div className="process-flow">

              <ProcessStep
                number="01"
                icon={<PlugZap size={20} />}
                title="Connect"
                text="Plug in your OBD-II adapter."
                type="cyan"
              />

              <ProcessArrow />

              <ProcessStep
                number="02"
                icon={<Activity size={20} />}
                title="Monitor"
                text="Collect live vehicle data."
                type="purple"
              />

              <ProcessArrow />

              <ProcessStep
                number="03"
                icon={<Brain size={20} />}
                title="Analyze"
                text="AI identifies health patterns."
                type="orange"
              />

              <ProcessArrow />

              <ProcessStep
                number="04"
                icon={<CheckCircle2 size={20} />}
                title="Act"
                text="Get alerts and recommendations."
                type="green"
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section
          className="cta-section"
          id="pricing"
        >

          <div className="landing-container">

            <div className="cta-box">

              <div>

                <div className="section-label">
                  <span />
                  START YOUR JOURNEY
                </div>

                <h2>
                  Know Your Vehicle.
                  <br />

                  <span>
                    Drive With Confidence.
                  </span>
                </h2>

              </div>


              <button
                type="button"
                onClick={() => navigate("register")}
              >
                Start Monitoring
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer
          className="landing-footer"
          id="about"
        >

          <div className="landing-container footer-content">

            <div className="footer-brand">

              <img
                src={autopulseLogo}
                alt="AutoPulse AI"
              />

              <span>
                Your Vehicle&apos;s Health, Powered by AI
              </span>

            </div>

            <span className="copyright">
              © 2026 AutoPulse AI
            </span>

          </div>

        </footer>

      </main>

    </div>
  );
}


/* =========================================================
   FEATURE CARD
========================================================= */

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  text: string;
  type: string;
}

function FeatureCard({
  icon,
  title,
  text,
  type,
}: FeatureCardProps) {
  return (
    <div className={`feature-card ${type}`}>

      <div className="feature-icon">
        {icon}
      </div>

      <div className="feature-info">

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

      <ChevronRight
        size={18}
        className="feature-arrow"
      />

    </div>
  );
}


/* =========================================================
   PROCESS STEP
========================================================= */

interface ProcessStepProps {
  number: string;
  icon: ReactNode;
  title: string;
  text: string;
  type: string;
}

function ProcessStep({
  number,
  icon,
  title,
  text,
  type,
}: ProcessStepProps) {
  return (
    <div className={`process-step ${type}`}>

      <div className="process-icon">

        {icon}

        <span>
          {number}
        </span>

      </div>


      <div className="process-info">

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   PROCESS ARROW
========================================================= */

function ProcessArrow() {
  return (
    <div className="process-arrow">
      <ArrowRight size={19} />
    </div>
  );
}