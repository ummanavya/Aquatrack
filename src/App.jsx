import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />
    </Routes>
  );
}