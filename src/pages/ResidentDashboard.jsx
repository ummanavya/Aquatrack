import Navbar from "../components/Navbar";
import "../styles/residentDashboard.css";

function ResidentDashboard() {

    const resident = {
        username: "Navya",
        apartment: "Aqua Residency",
        house: "A-101",
        waterUsage: 1245,
        bill: 850,
        dueDate: "20 July 2026"
    };

    return (

        <>
            <Navbar />

            <div className="resident-container">

                <div className="resident-sidebar">

                    <h2>AquaTrack</h2>

                    <ul>

                        <li>🏠 Dashboard</li>

                        <li>👤 My Profile</li>

                        <li>💧 Water Usage</li>

                        <li>💰 Bills</li>

                        <li>🔔 Notifications</li>

                        <li
                            onClick={() => {
                                localStorage.removeItem("token");
                                window.location.href="/login";
                            }}
                        >
                            🚪 Logout
                        </li>

                    </ul>

                </div>

                <div className="resident-content">

                    <div className="welcome-box">

                        <h1>
                            Welcome {resident.username} 👋
                        </h1>

                        <p>
                            Manage your water usage and bills.
                        </p>

                    </div>

                    <div className="cards">

                        <div className="card">

                            <h2>🏢 Apartment</h2>

                            <h3>{resident.apartment}</h3>

                        </div>

                        <div className="card">

                            <h2>🏠 House</h2>

                            <h3>{resident.house}</h3>

                        </div>

                        <div className="card">

                            <h2>💧 Water Usage</h2>

                            <h3>{resident.waterUsage} Litres</h3>

                        </div>

                        <div className="card">

                            <h2>💰 Current Bill</h2>

                            <h3>₹ {resident.bill}</h3>

                        </div>

                    </div>

                    <div className="info-panel">

                        <h2>Billing Details</h2>

                        <p>

                            Your current bill is

                            <b> ₹ {resident.bill}</b>

                        </p>

                        <p>

                            Due Date :

                            <b> {resident.dueDate}</b>

                        </p>

                    </div>

                    <div className="info-panel">

                        <h2>Notifications</h2>

                        <ul>

                            <li>✅ Welcome to AquaTrack.</li>

                            <li>💧 Monitor your daily water usage.</li>

                            <li>💰 Pay your bill before due date.</li>

                        </ul>

                    </div>

                </div>

            </div>

        </>

    );

}

export default ResidentDashboard;