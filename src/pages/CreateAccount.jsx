import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/login.css";

import {
    FaUser,
    FaEnvelope,
    FaLock
} from "react-icons/fa";

import background from "../images/welcome-bg.jpg";
import logo from "../images/logo.png";

function CreateAccount() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "RESIDENT"
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            alert("Passwords do not match");
            return;

        }

        try {

            await api.post("/auth/register", {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                role: formData.role
            });

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    };

    return (

        <div
            className="loginPage"
            style={{
                backgroundImage:
                    `linear-gradient(rgba(0,35,80,.72), rgba(0,70,140,.60)), url(${background})`
            }}
        >

            <div className="loginLogo">

                <img
                    src={logo}
                    alt="Logo"
                />

                <div>

                    <h2>AquaTrack</h2>

                    <span>Water Management System</span>

                </div>

            </div>

            <div className="loginCard">

                <div className="loginIcon">

                    <img
                        src={logo}
                        alt="Logo"
                    />

                </div>

                <h1>Create Account</h1>

                <p>Create your AquaTrack account</p>

                <form onSubmit={handleRegister}>
                                    <label>Username</label>

                    <div className="inputBox">

                        <FaUser className="inputIcon" />

                        <input
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <label>Email Address</label>

                    <div className="inputBox">

                        <FaEnvelope className="inputIcon" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <label>Password</label>

                    <div className="inputBox">

                        <FaLock className="inputIcon" />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <label>Confirm Password</label>

                    <div className="inputBox">

                        <FaLock className="inputIcon" />

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <label>Role</label>

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "14px",
                            marginTop: "10px",
                            marginBottom: "20px",
                            borderRadius: "10px",
                            border: "1px solid #ccc"
                        }}
                    >
                        <option value="RESIDENT">Resident</option>
                        <option value="ADMIN">Admin</option>
                    </select>

                    <button
                        type="submit"
                        className="loginBtn"
                    >
                        Create Account
                    </button>

                </form>

                <div
                    className="registerText"
                    style={{ marginTop: "20px" }}
                >

                    Already have an account?

                    <span
                        onClick={() => navigate("/login")}
                        style={{
                            color: "#0d6efd",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        {" "}Login
                    </span>

                </div>

            </div>

        </div>

    );

}

export default CreateAccount;
                