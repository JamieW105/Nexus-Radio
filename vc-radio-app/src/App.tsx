import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="main-bg">
      <header className="header">
        <h1>Nexus-Radio</h1>
        <p className="subtitle">Live VC Dispatch & Radio Integration</p>
      </header>
      <div className="actions">
        <button className="login-btn">Login with Discord</button>
        <button className="dispatch-btn">Dispatch Unit</button>
        <button className="log-btn">View Call Log</button>
      </div>
      <div className="radio-visualizer">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bar" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    </div>
  );
}