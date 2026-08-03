import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";

import AdminDashboard from "./pages/AdminDashboard";

import ResidentDashboard from "./pages/ResidentDashboard";
import ResidentProfile from "./pages/ResidentProfile";
import ResidentWaterUsage from "./pages/ResidentWaterUsage";
import ResidentBills from "./pages/ResidentBills";
import ResidentNotifications from "./pages/ResidentNotifications";

export default function App() {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }, []);

  return (
    <Routes>
      {/* Welcome */}
      <Route path="/" element={<Welcome />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Admin */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* Resident */}
      <Route path="/resident-dashboard" element={<ResidentDashboard />} />
      <Route path="/resident-profile" element={<ResidentProfile />} />
      <Route path="/resident-water-usage" element={<ResidentWaterUsage />} />
      <Route path="/resident-bills" element={<ResidentBills />} />
      <Route
        path="/resident-notifications"
        element={<ResidentNotifications />}
      />
    </Routes>
  );
}