import { motion } from "framer-motion";

function DashboardCard({
    title,
    value,
    icon,
    color,
    subtitle,
    trend,
}) {
    return (
        <motion.div
            className="dashboard-card"
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            transition={{ duration: 0.25 }}
        >
            <div
                className="card-icon"
                style={{
                    background: color.background,
                    color: color.icon,
                }}
            >
                {icon}
            </div>

            <div className="card-info">
                <h4>{title}</h4>

                <h1>{value}</h1>

                <p>{subtitle}</p>

                {trend && (
                    <span className="card-trend">
                        {trend}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

export default DashboardCard;