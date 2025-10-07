import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-full flex items-center justify-center bg-slate-100">
      <div className="p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">Assistent Web</h1>
        <p className="text-slate-600">React + TS + Webpack + Tailwind</p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);


