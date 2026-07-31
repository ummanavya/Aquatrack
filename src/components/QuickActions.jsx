import {
    FaBuilding,
    FaHome,
    FaTint,
    FaFileInvoiceDollar,
    FaExclamationTriangle,
    FaChartBar,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function QuickActions() {

    const navigate = useNavigate();

    const actions = [

        {
            title: "Add Apartment",
            icon: <FaBuilding />,
            color: "#0D6EFD",
            route: "/apartments"
        },

        {
            title: "Add Household",
            icon: <FaHome />,
            color: "#198754",
            route: "/households"
        },

        {
            title: "Water Usage",
            icon: <FaTint />,
            color: "#0dcaf0",
            route: "/water-usage"
        },

        {
            title: "Generate Bills",
            icon: <FaFileInvoiceDollar />,
            color: "#fd7e14",
            route: "/billing"
        },

        {
            title: "Leak Alerts",
            icon: <FaExclamationTriangle />,
            color: "#dc3545",
            route: "/alerts"
        },

        {
            title: "Reports",
            icon: <FaChartBar />,
            color: "#6f42c1",
            route: "/reports"
        }

    ];

    return (

        <div className="quick-actions-card">

            <h2 className="section-title">
                ⚡ Quick Actions
            </h2>

            <div className="quick-actions-grid">

                {

                    actions.map((action,index)=>(

                        <div
                            key={index}
                            className="action-card"
                            onClick={()=>navigate(action.route)}
                        >

                            <div
                                className="action-icon"
                                style={{
                                    background:action.color
                                }}
                            >
                                {action.icon}
                            </div>

                            <h4>{action.title}</h4>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default QuickActions;