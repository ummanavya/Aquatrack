import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import api from "../services/api";
import "../styles/Login.css";

import {
  FaEnvelope,
  FaLock,
  FaTint,
  FaChartLine,
  FaBell,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import background from "../assets/bgimage.jpg";
import logo from "../images/logo.png";

export default function Login() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("householdId", response.data.householdId);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);

      if (response.data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/resident-dashboard");
      }

    } catch (err) {

      console.log(err);
      alert("Invalid Email or Password");

    } finally {

      setLoading(false);

    }

  };

  const handleGoogleSuccess = async (credentialResponse) => {

    try {

      const response = await api.post("/auth/google", {
        token: credentialResponse.credential,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("householdId", response.data.householdId);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);

      if (response.data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/resident-dashboard");
      }

    } catch (error) {

      console.error(error);
      alert("Google Login Failed");

    }

  };

  const handleGoogleError = () => {

    alert("Google Sign-In Failed");

  };

  return (
    <div
  className="loginPage"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(8,20,45,.78),
        rgba(8,20,45,.60)
      ),
      url(${background})
    `,
  }}
>

  <div className="overlay"></div>

  {/* Top Logo */}

  <div className="topBrand">

    <img
      src={logo}
      alt="AquaTrack"
    />

    <div>

      <h2>AquaTrack</h2>

      <span>
        Smart Water Management System
      </span>

    </div>

  </div>

  <div className="loginContainer">

    {/* Left Side */}

    <div className="leftContent">

      <span className="tag">

        AI Powered Water Management

      </span>

      <h1>

        Welcome Back to

        <span> AquaTrack </span>

      </h1>

      <p>

        Monitor water consumption,
        automate apartment billing,
        receive instant leak alerts
        and manage your residential
        community through one
        intelligent platform.

      </p>

      <div className="featureGrid">

        <div className="featureCard">

          <FaTint />

          Smart Water Monitoring

        </div>

        <div className="featureCard">

          <FaChartLine />

          Live Analytics

        </div>

        <div className="featureCard">

          <FaBell />

          Leak Detection

        </div>

        <div className="featureCard">

          <FaFileInvoiceDollar />

          Auto Billing

        </div>

        <div className="featureCard">

          <FaShieldAlt />

          Secure Access

        </div>

      </div>

    </div>

    {/* Right Side */}

    <div className="registerCard">

      <h2>Welcome Back</h2>

      <p>

        Sign in to continue using AquaTrack

      </p>

      <form onSubmit={handleLogin}>
        {/* Email */}

<label>Email Address</label>

<div className="inputGroup">

  <FaEnvelope className="inputIcon" />

  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    value={formData.email}
    onChange={handleChange}
    autoComplete="email"
    required
  />

</div>

{/* Password */}

<label>Password</label>

<div className="inputGroup">

  <FaLock className="inputIcon" />

  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter your password"
    value={formData.password}
    onChange={handleChange}
    autoComplete="current-password"
    required
  />

  <span
    className="passwordToggle"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>

</div>

{/* Remember Me */}

<div className="loginOptions">

  <label className="rememberMe">

    <input
      type="checkbox"
      name="rememberMe"
      checked={formData.rememberMe}
      onChange={handleChange}
    />

    Remember Me

  </label>

  <span
    className="forgotPassword"
    onClick={() => navigate("/forgot-password")}
  >
    Forgot Password?
  </span>

</div>

{/* Sign In */}

<button
  type="submit"
  className="registerButton"
  disabled={loading}
>

  {loading ? "Signing In..." : "Sign In"}

</button>

{/* Divider */}

<div className="divider">

  <span>OR</span>

</div>

{/* Google Login */}

<div
  style={{
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  }}
>

  <GoogleLogin
    onSuccess={handleGoogleSuccess}
    onError={handleGoogleError}
    useOneTap={false}
  />

</div>
{/* Create Account */}

<div className="loginLink">

  Don't have an account?

  <span
    onClick={() => navigate("/create-account")}
  >
    Create Account
  </span>

</div>

{/* Back Home */}

<button
  type="button"
  className="homeButton"
  onClick={() => navigate("/")}
>

  Back to Home

</button>

</form>

</div>

</div>

</div>

);
}