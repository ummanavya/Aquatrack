import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/settings.css";

function Settings({ mode, setMode }) {

    const [settings, setSettings] = useState({

    theme: localStorage.getItem("theme") || "light",

    emailNotifications: true,

    leakAlerts: true,

    billingAlerts: true,

    waterUsageAlerts: true,

    twoFactor: false,

    autoLogout: true,

    sessionTimeout: 30,

    tariffPlan: "Standard",

    billingCycle: "Monthly",

    waterUnit: "KL",

    currency: "INR"

});
useEffect(() => {

    const body = document.body;

    body.classList.remove("light-theme", "dark-theme");

    if (settings.theme === "dark") {

        body.classList.add("dark-theme");

    } else {

        body.classList.add("light-theme");

    }

    localStorage.setItem("theme", settings.theme);

}, [settings.theme]);
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setSettings(prev => ({

    ...prev,

    [name]: type === "checkbox" ? checked : value

}));

    };

    const saveSettings = async () => {

    try {

        // Call your backend here if you're already doing that
        // await api.put("/api/settings", ...);

        localStorage.setItem("theme", settings.theme);

        setMode(settings.theme);

        alert("Settings Saved Successfully!");

    } catch (error) {

        console.error(error);

        alert("Unable to save settings.");

    }

};

    const resetSettings = () => {

        if(window.confirm("Reset all settings to default?")){

            setSettings({

                theme: "light",

                emailNotifications: true,

                leakAlerts: true,

                billingAlerts: true,

                waterUsageAlerts: true,

                twoFactor: false,

                autoLogout: true,

                sessionTimeout: 30,

                tariffPlan: "Standard",

                billingCycle: "Monthly",

                waterUnit: "KL",

                currency: "INR"

            });

        }

    };

    const backupDatabase = () => {

        alert("Database Backup Started.");

    };
    return (

<>

<Navbar />

<div className="pageContainer">

    <Sidebar />

    <div className="mainContent">

        {/* ================= Header ================= */}

        <div className="pageHeader">

            <div>

                <h1>⚙️ Settings</h1>

                <p>
                    Configure AquaTrack preferences, security, notifications, and system settings.
                </p>

            </div>

        </div>

        {/* ================= Appearance ================= */}

        <div className="settingsCard">

            <h2>🌙 Appearance</h2>

            <div className="formGrid">

                <div className="formGroup">

                    <label>Theme</label>

                    <select
                        name="theme"
                        value={settings.theme}
                        onChange={handleChange}
                    >

                        <option value="light">Light</option>

                        <option value="dark">Dark</option>

                        <option value="system">System Default</option>

                    </select>

                </div>

            </div>

        </div>

        {/* ================= Notifications ================= */}

        <div className="settingsCard">

            <h2>🔔 Notifications</h2>

            <div className="toggleGroup">

                <label>

                    <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={settings.emailNotifications}
                        onChange={handleChange}
                    />

                    Email Notifications

                </label>

                <label>

                    <input
                        type="checkbox"
                        name="billingAlerts"
                        checked={settings.billingAlerts}
                        onChange={handleChange}
                    />

                    Billing Alerts

                </label>

                <label>

                    <input
                        type="checkbox"
                        name="waterUsageAlerts"
                        checked={settings.waterUsageAlerts}
                        onChange={handleChange}
                    />

                    Water Usage Alerts

                </label>

                <label>

                    <input
                        type="checkbox"
                        name="leakAlerts"
                        checked={settings.leakAlerts}
                        onChange={handleChange}
                    />

                    Leak Detection Alerts

                </label>

            </div>

        </div>

        {/* ================= Security ================= */}

        <div className="settingsCard">

            <h2>🔒 Security</h2>

            <div className="formGrid">

                <label className="checkboxLabel">

                    <input
                        type="checkbox"
                        name="twoFactor"
                        checked={settings.twoFactor}
                        onChange={handleChange}
                    />

                    Enable Two-Factor Authentication

                </label>

                <label className="checkboxLabel">

                    <input
                        type="checkbox"
                        name="autoLogout"
                        checked={settings.autoLogout}
                        onChange={handleChange}
                    />

                    Enable Auto Logout

                </label>

                <div className="formGroup">

                    <label>Session Timeout (Minutes)</label>

                    <input
                        type="number"
                        name="sessionTimeout"
                        value={settings.sessionTimeout}
                        onChange={handleChange}
                        min="5"
                    />

                </div>

            </div>

        </div>

        {/* ================= Water Configuration ================= */}

        <div className="settingsCard">

            <h2>💧 Water Configuration</h2>

            <div className="formGrid">

                <div className="formGroup">

                    <label>Default Tariff Plan</label>

                    <select
                        name="tariffPlan"
                        value={settings.tariffPlan}
                        onChange={handleChange}
                    >

                        <option>Standard</option>

                        <option>Premium</option>

                        <option>Commercial</option>

                    </select>

                </div>

                <div className="formGroup">

                    <label>Billing Cycle</label>

                    <select
                        name="billingCycle"
                        value={settings.billingCycle}
                        onChange={handleChange}
                    >

                        <option>Monthly</option>

                        <option>Quarterly</option>

                        <option>Yearly</option>

                    </select>

                </div>

                <div className="formGroup">

                    <label>Water Unit</label>

                    <select
                        name="waterUnit"
                        value={settings.waterUnit}
                        onChange={handleChange}
                    >

                        <option>KL</option>

                        <option>Litres</option>

                        <option>Cubic Meter</option>

                    </select>

                </div>

                <div className="formGroup">

                    <label>Currency</label>

                    <select
                        name="currency"
                        value={settings.currency}
                        onChange={handleChange}
                    >

                        <option>INR</option>

                        <option>USD</option>

                        <option>EUR</option>

                    </select>

                </div>

            </div>

        </div>
                {/* ================= System Information ================= */}

        <div className="settingsCard">

            <h2>ℹ️ System Information</h2>

            <div className="systemGrid">

                <div className="systemItem">

                    <span>Application</span>

                    <strong>AquaTrack</strong>

                </div>

                <div className="systemItem">

                    <span>Version</span>

                    <strong>v1.0.0</strong>

                </div>

                <div className="systemItem">

                    <span>Environment</span>

                    <strong>Production</strong>

                </div>

                <div className="systemItem">

                    <span>Database</span>

                    <strong>PostgreSQL</strong>

                </div>

                <div className="systemItem">

                    <span>Backend</span>

                    <strong>Spring Boot</strong>

                </div>

                <div className="systemItem">

                    <span>Frontend</span>

                    <strong>React + Vite</strong>

                </div>

            </div>

        </div>

        {/* ================= Action Buttons ================= */}

        <div className="settingsActions">

            <button
                className="primaryBtn"
                onClick={saveSettings}
            >
                💾 Save Settings
            </button>

            <button
                className="warningBtn"
                onClick={resetSettings}
            >
                🔄 Reset Defaults
            </button>

            <button
                className="successBtn"
                onClick={backupDatabase}
            >
                💽 Backup Database
            </button>

        </div>

        {/* ================= Footer ================= */}

        <div className="settingsFooter">

            <h2>AquaTrack</h2>

            <p>

                Smart Apartment Water Management System

            </p>

            <p>

                Configure • Secure • Manage

            </p>

            <hr />

            <p>

                © 2026 AquaTrack. All Rights Reserved.

            </p>

        </div>

    </div>

</div>

</>

);

}

export default Settings;