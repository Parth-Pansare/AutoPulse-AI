import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const suggestions = [
  "Why is my engine temperature high?",
  "What should I service next?",
  "Explain my health score",
  "What does a DTC mean?",
];

export default function AIAssistant({
  onNavigate,
}: {
  onNavigate: (p: string) => void;
}) {
  const [messages, setMessages] = useState<
    { role: "ai" | "user"; text: string }[]
  >([
    {
      role: "ai",
      text: "Hello! I can help explain your vehicle health, diagnostics, and maintenance information.",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text = input) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: clean },
      {
        role: "ai",
        text: "Based on the current demo vehicle data, your health score is 87/100. I will use real OBD-II data and Ollama once the backend is connected.",
      },
    ]);
    setInput("");
  };

  return (
    <DashboardLayout
      page="ai"
      title="AI Assistant"
      subtitle="Ask AutoPulse about your vehicle"
      onNavigate={onNavigate}
    >
      <div className="ai-layout">
        <div className="ai-suggestions card">
          <div className="section-kicker">QUICK QUESTIONS</div>
          {suggestions.map((q) => (
            <button type="button" key={q} onClick={() => sendMessage(q)}>
              {q}
            </button>
          ))}
          <div className="auth-security" style={{ marginTop: 15 }}>
            <Sparkles size={15} />
            <span>
              AI answers use demo vehicle context until backend and Ollama
              integration are connected.
            </span>
          </div>
        </div>
        <div className="chat-panel card">
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div className={`message ${m.role}`} key={i}>
                <b>{m.role === "ai" ? "AutoPulse AI" : "You"}</b>
                <br />
                {m.text}
              </div>
            ))}
          </div>
          <form
            className="chat-input"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AutoPulse AI..."
            />
            <button type="submit" className="primary-btn">
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
