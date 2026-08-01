import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/create-account"
        element={<CreateAccount />}
      />
      <Route
    path="/forgot-password"
    element={<ForgotPassword />}
/>
      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />
    </Routes>
    
  );
}