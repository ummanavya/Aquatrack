import {
    FaTint,
    FaFileInvoiceDollar,
    FaExclamationTriangle,
    FaEnvelope,
} from "react-icons/fa";

const activities = [
    {
        icon: <FaTint />,
        title: "Water usage updated",
        description: "Apartment A-101 submitted today's reading.",
        time: "10 minutes ago",
        color: "#0dcaf0",
    },
    {
        icon: <FaFileInvoiceDollar />,
        title: "Bill Generated",
        description: "Invoice generated for Apartment B-205.",
        time: "35 minutes ago",
        color: "#198754",
    },
    {
        icon: <FaExclamationTriangle />,
        title: "Leak Alert",
        description: "Possible leak detected in Apartment C-301.",
        time: "1 hour ago",
        color: "#dc3545",
    },
    {
        icon: <FaEnvelope />,
        title: "Email Notification",
        description: "Monthly bill email sent successfully.",
        time: "2 hours ago",
        color: "#0d6efd",
    },
];

function RecentActivity() {
    return (
        <div className="recent-activity-card">

            <h2 className="section-title">
                📋 Recent Activity
            </h2>

            <div className="activity-list">

                {activities.map((item, index) => (

                    <div
                        className="activity-item"
                        key={index}
                    >

                        <div
                            className="activity-icon"
                            style={{ background: item.color }}
                        >
                            {item.icon}
                        </div>

                        <div className="activity-content">

                            <h4>{item.title}</h4>

                            <p>{item.description}</p>

                        </div>

                        <span className="activity-time">
                            {item.time}
                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default RecentActivity;