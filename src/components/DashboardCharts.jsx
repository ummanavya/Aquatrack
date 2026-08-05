import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

import "../styles/dashboard.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

function DashboardCharts({ dashboard }) {

    const months = Array.isArray(dashboard?.months)
        ? dashboard.months
        : [];

    const monthlyUsage = Array.isArray(dashboard?.monthlyUsage)
        ? dashboard.monthlyUsage
        : [];

    /* ===========================
       Bar Chart
    =========================== */

    const barData = {
        labels: months,
        datasets: [
            {
                label: "Water Usage (Litres)",
                data: monthlyUsage,
                backgroundColor: [
                    "#1976D2",
                    "#42A5F5",
                    "#64B5F6",
                    "#90CAF9",
                    "#29B6F6",
                    "#26C6DA",
                    "#26A69A",
                    "#66BB6A",
                    "#9CCC65",
                    "#D4E157",
                    "#FFA726",
                    "#EF5350"
                ],
                borderRadius: 8
            }
        ]
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },

        scales: {

            y: {

                beginAtZero: true,

                ticks: {
                    color: "#555"
                },

                grid: {
                    color: "#E5E7EB"
                }

            },

            x: {

                ticks: {
                    color: "#555"
                },

                grid: {
                    display: false
                }

            }

        }

    };

    /* ===========================
       Pie Chart
    =========================== */

    const pieData = {
        labels: months,
        datasets: [
            {
                data: monthlyUsage,

                backgroundColor: [
                    "#1565C0",
                    "#1976D2",
                    "#1E88E5",
                    "#2196F3",
                    "#42A5F5",
                    "#64B5F6",
                    "#81D4FA",
                    "#4DD0E1",
                    "#26C6DA",
                    "#26A69A",
                    "#66BB6A",
                    "#FFA726"
                ],

                borderWidth: 2,
                borderColor: "#fff"

            }
        ]
    };

    const pieOptions = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                position: "bottom"

            }

        }

    };

    return (

        <div className="dashboard-charts">

            <div className="chart-card">

                <h3 className="chart-title">

                    Monthly Water Usage

                </h3>

                <div style={{ height: "350px" }}>

                    <Bar
                        data={barData}
                        options={barOptions}
                    />

                </div>

            </div>

            <div className="chart-card">

                <h3 className="chart-title">

                    Water Usage Distribution

                </h3>

                <div style={{ height: "350px" }}>

                    <Pie
                        data={pieData}
                        options={pieOptions}
                    />

                </div>

            </div>

        </div>

    );

}

export default DashboardCharts;