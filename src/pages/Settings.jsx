import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/settings.css";
import api from "../services/api";
import Swal from "sweetalert2";

function Settings({ mode, setMode }) {

    const username = localStorage.getItem("username");

    const [settings, setSettings] = useState({

        theme: "light",

        language: "English",

        emailNotifications: true,

        billingAlerts: true,

        waterUsageAlerts: true,

        leakAlerts: true,

        twoFactorEnabled: false,

        autoLogout: true,

        sessionTimeout: 30,

        tariffPlan: "Standard",

        billingCycle: "Monthly",

        waterUnit: "KL",

        currency: "INR",

        dailyThreshold: 500

    });

    useEffect(() => {

        loadSettings();

    }, []);

    useEffect(() => {

        document.body.classList.remove(
            "light-theme",
            "dark-theme"
        );

        if (settings.theme === "dark") {

            document.body.classList.add("dark-theme");

        } else {

            document.body.classList.add("light-theme");

        }

        localStorage.setItem(
            "theme",
            settings.theme
        );

        if (setMode) {
            setMode(settings.theme);
        }

    }, [settings.theme, setMode]);

    const loadSettings = async () => {

        try {

            const response = await api.get(
                `/api/resident-settings/${username}`
            );

            setSettings(prev => ({

                ...prev,

                ...response.data

            }));

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        const {

            name,

            value,

            checked,

            type

        } = e.target;

        setSettings(prev => ({

            ...prev,

            [name]:
                type === "checkbox"
                    ? checked
                    : value

        }));

    };

    const saveSettings = async () => {

        try {

            await api.put(

                `/api/resident-settings/${username}`,

                settings

            );

            localStorage.setItem(
                "theme",
                settings.theme
            );

            if (setMode) {
                setMode(settings.theme);
            }

            Swal.fire({

                icon: "success",

                title: "Settings Saved!",

                text: "Your preferences have been updated successfully.",

                confirmButtonColor: "#1976D2",

                timer: 2200,

                showConfirmButton: false

            });

        } catch (error) {

            console.error(error);

            Swal.fire({

                icon: "error",

                title: "Unable to Save",

                text: "Please try again later."

            });

        }

    };

    const resetSettings = () => {

        Swal.fire({

            title: "Reset Settings?",

            text: "Restore all settings to default values?",

            icon: "warning",

            showCancelButton: true,

            confirmButtonText: "Reset",

            confirmButtonColor: "#1976D2",

            cancelButtonColor: "#d33"

        }).then((result) => {

            if (result.isConfirmed) {

                setSettings({

                    theme: "light",

                    language: "English",

                    emailNotifications: true,

                    billingAlerts: true,

                    waterUsageAlerts: true,

                    leakAlerts: true,

                    twoFactorEnabled: false,

                    autoLogout: true,

                    sessionTimeout: 30,

                    tariffPlan: "Standard",

                    billingCycle: "Monthly",

                    waterUnit: "KL",

                    currency: "INR",

                    dailyThreshold: 500

                });

                Swal.fire(

                    "Reset Complete",

                    "Default settings restored.",

                    "success"

                );

            }

        });

    };

    const backupDatabase = () => {

        Swal.fire({

            icon: "info",

            title: "Backup Started",

            text: "Database backup has been initiated."

        });

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

                        Configure AquaTrack preferences, notifications,
                        security and water management settings.

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

                            <option value="light">
                                Light
                            </option>

                            <option value="dark">
                                Dark
                            </option>

                            <option value="system">
                                System Default
                            </option>

                        </select>

                    </div>

                    <div className="formGroup">

                        <label>Language</label>

                        <select
                            name="language"
                            value={settings.language}
                            onChange={handleChange}
                        >

                            <option value="English">
                                English
                            </option>

                            <option value="తెలుగు">
                                Telugu
                            </option>

                            <option value="Hindi">
                                Hindi
                            </option>

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
                            name="twoFactorEnabled"
                            checked={settings.twoFactorEnabled}
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

                        <label>

                            Session Timeout (Minutes)

                        </label>

                        <input
                            type="number"
                            name="sessionTimeout"
                            value={settings.sessionTimeout}
                            onChange={handleChange}
                        />

                    </div>

                </div>

            </div>

            {/* ================= Water Configuration ================= */}

            <div className="settingsCard">

                <h2>💧 Water Configuration</h2>

                <div className="formGrid">

                    <div className="formGroup">

                        <label>

                            Daily Water Threshold

                        </label>

                        <input
                            type="number"
                            name="dailyThreshold"
                            value={settings.dailyThreshold}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="formGroup">

                        <label>

                            Tariff Plan

                        </label>

                        <select
                            name="tariffPlan"
                            value={settings.tariffPlan}
                            onChange={handleChange}
                        >

                            <option>
                                Standard
                            </option>

                            <option>
                                Premium
                            </option>

                            <option>
                                Commercial
                            </option>

                        </select>

                    </div>

                    <div className="formGroup">

                        <label>

                            Billing Cycle

                        </label>

                        <select
                            name="billingCycle"
                            value={settings.billingCycle}
                            onChange={handleChange}
                        >

                            <option>
                                Monthly
                            </option>

                            <option>
                                Quarterly
                            </option>

                            <option>
                                Yearly
                            </option>

                        </select>

                    </div>

                    <div className="formGroup">

                        <label>

                            Water Unit

                        </label>

                        <select
                            name="waterUnit"
                            value={settings.waterUnit}
                            onChange={handleChange}
                        >

                            <option>
                                KL
                            </option>

                            <option>
                                Litres
                            </option>

                            <option>
                                Cubic Meter
                            </option>

                        </select>

                    </div>

                    <div className="formGroup">

                        <label>

                            Currency

                        </label>

                        <select
                            name="currency"
                            value={settings.currency}
                            onChange={handleChange}
                        >

                            <option>
                                INR
                            </option>

                            <option>
                                USD
                            </option>

                            <option>
                                EUR
                            </option>

                        </select>

                    </div>

                </div>

            </div>

            {/* ================= System Information ================= */}
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