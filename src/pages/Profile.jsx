import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import "../styles/profile.css";

function Profile() {

    const [profile] = useState({
        name: "Administrator",
        email: "admin@gmail.com",
        role: "System Administrator",
        department: "Water Management",
        phone: "+91 98765 43210",
        location: "Hyderabad, India"
    });

    const [stats, setStats] = useState({
        apartments: 0,
        households: 0,
        bills: 0,
        waterUsage: 0
    });

    const [showEdit, setShowEdit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [username, setUsername] = useState(
        localStorage.getItem("username") || ""
    );

    const [email, setEmail] = useState(
        localStorage.getItem("email") || ""
    );

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: ""
    });

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {

        try {

            const apartmentResponse = await api.get("/api/apartments");
            const householdResponse = await api.get("/api/households");
            const billingResponse = await api.get("/api/billing-cycles");

            const waterUsage = billingResponse.data.reduce(
                (sum, bill) => sum + Number(bill.unitsConsumed),
                0
            );

            setStats({
                apartments: apartmentResponse.data.length,
                households: householdResponse.data.length,
                bills: billingResponse.data.length,
                waterUsage
            });

        } catch (error) {

            console.log(error);

        }

    };

    const updateProfile = async () => {

        try {

            const response = await api.put("/api/profile", {
                username,
                email
            });

            localStorage.setItem("username", response.data.username);
            localStorage.setItem("email", response.data.email);

            alert("Profile Updated Successfully");

            setShowEdit(false);

            window.location.reload();

        } catch (error) {

            console.log(error);

            alert("Unable to Update Profile");

        }

    };

    const changePassword = async () => {

        try {

            const response = await api.put(
                "/api/profile/password",
                passwordData
            );

            alert(response.data);

            setPasswordData({
                currentPassword: "",
                newPassword: ""
            });

            setShowPassword(false);

        } catch (error) {

            console.log(error);

            alert("Unable to change password");

        }

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

                <h1>👤 My Profile</h1>

                <p>
                    Manage your AquaTrack administrator account and personal information.
                </p>

            </div>

        </div>

        {/* ================= Hero Banner ================= */}

        <div className="profileBanner">

            <div className="profileAvatar">

                👨‍💼

            </div>

            <div className="profileDetails">

                <h2>{profile.name}</h2>

                <h4>{profile.role}</h4>

                <span className="onlineBadge">

                    🟢 Online

                </span>

            </div>

        </div>

        {/* ================= Statistics ================= */}

        <div className="statsGrid">

            <div className="statCard">

                <h3>🏢 Apartments</h3>

                <h1>{stats.apartments}</h1>

            </div>

            <div className="statCard">

                <h3>🏠 Households</h3>

                <h1>{stats.households}</h1>

            </div>

            <div className="statCard">

                <h3>💧 Water Usage</h3>

                <h1>{stats.waterUsage}</h1>

            </div>

            <div className="statCard">

                <h3>💰 Bills</h3>

                <h1>{stats.bills}</h1>

            </div>

        </div>

        {/* ================= Main Grid ================= */}

        <div className="profileGrid">

            {/* Personal Information */}

            <div className="infoCard">

                <h2>📋 Personal Information</h2>

                <div className="infoRow">

                    <span>Name</span>

                    <strong>{profile.name}</strong>

                </div>

                <div className="infoRow">

                    <span>Email</span>

                    <strong>{profile.email}</strong>

                </div>

                <div className="infoRow">

                    <span>Role</span>

                    <strong>{profile.role}</strong>

                </div>

                <div className="infoRow">

                    <span>Department</span>

                    <strong>{profile.department}</strong>

                </div>

                <div className="infoRow">

                    <span>Phone</span>

                    <strong>{profile.phone}</strong>

                </div>

                <div className="infoRow">

                    <span>Location</span>

                    <strong>{profile.location}</strong>

                </div>

            </div>

            {/* Recent Activity */}

            <div className="activityCard">

                <h2>📈 Recent Activity</h2>

                <ul className="activityList">

                    <li>✅ Logged into AquaTrack Dashboard</li>

                    <li>🏢 Managed Apartment Records</li>

                    <li>🏠 Updated Household Information</li>

                    <li>💧 Recorded Water Usage</li>

                    <li>💰 Generated Monthly Bills</li>

                    <li>📄 Viewed Reports Dashboard</li>

                    <li>🔔 Checked Alerts</li>

                </ul>

            </div>

        </div>

        {/* ================= Bottom Grid ================= */}

        <div className="profileGrid">

            {/* Account Settings */}

            <div className="settingsCard">

                <h2>⚙️ Account Settings</h2>

                <button
                    className="primaryBtn"
                    onClick={() => setShowEdit(true)}
                >
                    ✏ Edit Profile
                </button>

                <button
                    className="successBtn"
                    onClick={() => setShowPassword(true)}
                >
                    🔑 Change Password
                </button>

                <button
                    className="dangerBtn"
                    onClick={() => {

                        localStorage.removeItem("token");

                        alert("Logged out successfully.");

                        window.location.href="/login";

                    }}
                >
                    🚪 Logout
                </button>

            </div>

            {/* Support */}

            <div className="supportCard">

                <h2>📞 Support</h2>

                <p><strong>Email</strong><br/>support@aquatrack.com</p>

                <p><strong>Phone</strong><br/>+91 98765 43210</p>

                <p><strong>Website</strong><br/>www.aquatrack.com</p>

                <p><strong>Version</strong><br/>AquaTrack v1.0.0</p>

            </div>

        </div>

        {/* ================= Footer ================= */}

        <div className="profileFooter">

            <h2>AquaTrack</h2>

            <p>

                Smart Apartment Water Management System

            </p>

            <p>

                Monitor • Manage • Save Water

            </p>

            <hr />

            <p>

                © 2026 AquaTrack. All Rights Reserved.

            </p>

        </div>

    </div>

</div>

{/* ================= Edit Profile Modal ================= */}
{/* ================= Edit Profile Modal ================= */}

{showEdit && (

<div className="modalOverlay">

    <div className="modalCard">

        <h2>✏ Edit Profile</h2>

        <div className="modalBody">

            <label>Username</label>

            <input
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Enter Username"
            />

            <label>Email Address</label>

            <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter Email"
            />

        </div>

        <div className="modalButtons">

            <button
                className="primaryBtn"
                onClick={updateProfile}
            >
                Save Changes
            </button>

            <button
                className="dangerBtn"
                onClick={()=>setShowEdit(false)}
            >
                Cancel
            </button>

        </div>

    </div>

</div>

)}

{/* ================= Change Password Modal ================= */}

{showPassword && (

<div className="modalOverlay">

    <div className="modalCard">

        <h2>🔐 Change Password</h2>

        <div className="modalBody">

            <label>Current Password</label>

            <input
                type="password"
                value={passwordData.currentPassword}
                placeholder="Enter Current Password"
                onChange={(e)=>setPasswordData({

                    ...passwordData,

                    currentPassword:e.target.value

                })}
            />

            <label>New Password</label>

            <input
                type="password"
                value={passwordData.newPassword}
                placeholder="Enter New Password"
                onChange={(e)=>setPasswordData({

                    ...passwordData,

                    newPassword:e.target.value

                })}
            />

        </div>

        <div className="modalButtons">

            <button
                className="successBtn"
                onClick={changePassword}
            >
                Update Password
            </button>

            <button
                className="dangerBtn"
                onClick={()=>setShowPassword(false)}
            >
                Cancel
            </button>

        </div>

    </div>

</div>

)}

</>

);

}

export default Profile;