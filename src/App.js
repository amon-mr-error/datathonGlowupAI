import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateCampaign from "./components/CreateCampaign";
import Analytics from "./components/Analytics";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <Router>
      <div className="p-6">
        {/* Header with Navigation */}
        <header className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
          <h1 className="text-xl font-bold">GlowUp AI</h1>
          <nav>
            <Link to="/" className="mr-4 text-blue-500 hover:underline">
              Dashboard
            </Link>
            <Link to="/analytics" className="mr-4 text-blue-500 hover:underline">
              Analytics
            </Link>
            <Link to="/create-campaign" className="mr-4 text-blue-500 hover:underline">
              Create Campaign
            </Link>
            <Link to="/chatbot" className="text-blue-500 hover:underline">
              Chatbot
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="mt-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
