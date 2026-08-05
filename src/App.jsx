import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// ================= PUBLIC PAGES =================
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";

// ================= ADMIN PAGES =================
import AdminDashboard from "./pages/AdminDashboard";
import Apartments from "./pages/Apartments";
import Households from "./pages/Households";
import WaterUsage from "./pages/WaterUsage";
import Billing from "./pages/Billing";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// ================= RESIDENT PAGES =================
import ResidentDashboard from "./pages/ResidentDashboard";
import ResidentProfile from "./pages/ResidentProfile";
import ResidentWaterUsage from "./pages/ResidentWaterUsage";
import ResidentBills from "./pages/ResidentBills";
import ResidentNotifications from "./pages/ResidentNotifications";
import EcoRewards from "./pages/EcoRewards";
import Community from "./pages/Community";
import Support from "./pages/Support";
import ResidentSettings from "./pages/ResidentSettings";

export default function App() {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }, []);

  return (
    <Routes>

      {/* ================= PUBLIC ================= */}

      <Route path="/" element={<Welcome />} />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/create-account"
        element={<CreateAccount />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* ================= ADMIN ================= */}

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/apartments"
        element={<Apartments />}
      />

      <Route
        path="/households"
        element={<Households />}
      />

      <Route
        path="/water-usage"
        element={<WaterUsage />}
      />

      <Route
        path="/billing"
        element={<Billing />}
      />

      <Route
        path="/reports"
        element={<Reports />}
      />

      <Route
        path="/alerts"
        element={<Alerts />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />

      {/* ================= RESIDENT ================= */}

      <Route
        path="/resident-dashboard"
        element={<ResidentDashboard />}
      />

      <Route
        path="/resident-profile"
        element={<ResidentProfile />}
      />

      <Route
        path="/resident-water-usage"
        element={<ResidentWaterUsage />}
      />

      <Route
        path="/resident-bills"
        element={<ResidentBills />}
      />

      <Route
        path="/resident-notifications"
        element={<ResidentNotifications />}
      />

      <Route
        path="/eco-rewards"
        element={<EcoRewards />}
      />

      <Route
        path="/resident-community"
        element={<Community />}
      />

      <Route
        path="/resident-support"
        element={<Support />}
      />

      <Route
        path="/resident-settings"
        element={<ResidentSettings />}
      />

    </Routes>
  );
}