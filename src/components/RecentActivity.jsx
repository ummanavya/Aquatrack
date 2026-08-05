import {
  FaTint,
  FaFileInvoiceDollar,
  FaExclamationTriangle,
  FaEnvelope,
} from "react-icons/fa";

import { formatDateTime } from "../utils/format";
import "../styles/recentActivity.css";

// Fallback demo data — only shown if no real alerts are passed in
// (e.g. while the dashboard is still loading, or in a fresh/empty account)
const DEMO_ACTIVITIES = [
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

// Maps a real alert's type to an icon + color, so live data
// renders with the same visual language as the demo data.
function getActivityMeta(alertType) {
  switch ((alertType || "").toUpperCase()) {
    case "LEAK_DETECTED":
    case "LEAK":
      return { icon: <FaExclamationTriangle />, color: "#dc3545" };

    case "HIGH_BILL":
      return { icon: <FaFileInvoiceDollar />, color: "#198754" };

    case "HIGH_USAGE":
      return { icon: <FaTint />, color: "#0dcaf0" };

    default:
      return { icon: <FaEnvelope />, color: "#0d6efd" };
  }
}

function RecentActivity({ alerts = [] }) {
  const activities =
    alerts.length > 0
      ? alerts.slice(0, 4).map((alert) => {
          const meta = getActivityMeta(alert.alertType);

          return {
            icon: meta.icon,
            color: meta.color,
            title: alert.alertType?.replace(/_/g, " ") || "Alert",
            description: alert.message || "No details available.",
            time: formatDateTime(alert.createdAt),
          };
        })
      : DEMO_ACTIVITIES;

  return (
    <div className="recent-activity-card">
      <h2 className="section-title">📋 Recent Activity</h2>

      <div className="activity-list">
        {activities.map((item, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-icon" style={{ background: item.color }}>
              {item.icon}
            </div>

            <div className="activity-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>

            <span className="activity-time">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;