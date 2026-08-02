import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";

import AdminDashboard from "./pages/AdminDashboard";
import ResidentDashboard from "./pages/ResidentDashboard";
import ResidentProfile from "./pages/ResidentProfile";
import ResidentWaterUsage from "./pages/ResidentWaterUsage";

export default function App() {

  return (

    <Routes>

      {/* Welcome */}

      <Route
        path="/"
        element={<Welcome />}
      />

      {/* Authentication */}

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

      {/* Resident */}

      <Route
        path="/resident-dashboard"
        element={<ResidentDashboard />}
      />

      <Route
        path="/resident-profile"
        element={<ResidentProfile />}
      />

      {/* Admin */}

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />
      <Route
  path="/resident-water-usage"
  element={<ResidentWaterUsage />}
/>

    </Routes>

  );

}