import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/CreateAccount.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserShield,
  FaTint,
  FaChartLine,
  FaBell,
  FaFileInvoiceDollar,
  FaShieldAlt,
} from "react-icons/fa";

import background from "../assets/bgimage.jpg";
import logo from "../images/logo.png";

export default function CreateAccount() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "RESIDENT",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      await api.post("/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      alert("Account Created Successfully");

      navigate("/login");

    } catch (err) {

      console.log(err);

      alert("Registration Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="createAccountPage"
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

      <div className="createContainer">

        {/* Left Side */}

        <div className="leftContent">

          <span className="tag">
            AI Powered Water Management
          </span>

          <h1>

            Create Your

            <span> AquaTrack </span>

            Account

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

        {/* Right Side Card */}

        <div className="registerCard">

          <h2>Create Account</h2>

          <p>
            Register your AquaTrack account
          </p>

          <form onSubmit={handleRegister}>
                        {/* Username */}

            <label>Username</label>

            <div className="inputGroup">

              <FaUser className="inputIcon" />

              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                required
              />

            </div>

            {/* Email */}

            <label>Email Address</label>

            <div className="inputGroup">

              <FaEnvelope className="inputIcon" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
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
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />

            </div>

            {/* Confirm Password */}

            <label>Confirm Password</label>

            <div className="inputGroup">

              <FaLock className="inputIcon" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />

            </div>

            {/* Account Type */}

            <label>Account Type</label>

            <div className="inputGroup">

              <FaUserShield className="inputIcon" />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="RESIDENT">
                  Resident
                </option>

                <option value="ADMIN">
                  Apartment Administrator
                </option>

              </select>

            </div>

            <button
              type="submit"
              className="registerButton"
              disabled={loading}
            >

              {loading
                ? "Creating Account..."
                : "Create Account"}

            </button>

            <div className="loginLink">

              Already have an account?

              <span onClick={() => navigate("/login")}>
                Login
              </span>

            </div>
                      </form>

        </div>

      </div>

    </div>

  );

}