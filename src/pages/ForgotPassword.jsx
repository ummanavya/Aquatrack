import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/ForgotPassword.css";

import {
  FaEnvelope,
  FaTint,
  FaChartLine,
  FaBell,
  FaFileInvoiceDollar,
  FaShieldAlt,
} from "react-icons/fa";

import background from "../assets/bgimage.jpg";
import logo from "../images/logo.png";

export default function ForgotPassword() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await api.post("/auth/forgot-password", {

        email,

      });

      alert("Password reset link sent successfully.");

    } catch (err) {

      console.log(err);

      alert("Unable to send reset link.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      className="forgotPage"
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

      <div className="forgotContainer">

        {/* Left Side */}

        <div className="leftContent">

          <span className="tag">

            Password Recovery

          </span>

          <h1>

            Forgot Your

            <span> Password? </span>

          </h1>

          <p>

            Don't worry. Enter your registered
            email address and we'll send you
            a secure password reset link.

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

        <h2>Forgot Password</h2>

        <p>

          Enter your registered email address to receive a password reset link.

        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}

          <label>Email Address</label>

          <div className="inputGroup">

            <FaEnvelope className="inputIcon" />

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

          </div>

          <button
            type="submit"
            className="registerButton"
            disabled={loading}
          >

            {loading
              ? "Sending Reset Link..."
              : "Send Reset Link"}

          </button>

          <div className="loginLink">

            Remember your password?

            <span
              onClick={() => navigate("/login")}
            >
              Back to Login
            </span>

          </div>
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