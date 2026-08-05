import React from "react";
import { TrendingUpRounded } from "@mui/icons-material";
import "../styles/kpiCards.css";

// Fallback palette used if a card doesn't specify its own color
const DEFAULT_COLORS = ["#1976D2", "#16A34A", "#F59E0B", "#DC2626"];

export default function KPICards({ cards }) {
  return (
    <div className="kpi-container">
      {cards.map((card, index) => (
        <div className="kpi-card" key={card.title || index}>
          <div className="kpi-title">{card.title}</div>

          <div className="kpi-value">{card.value}</div>

          <div
            className="kpi-icon"
            style={{
              background: card.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length],
            }}
          >
            {card.icon}
          </div>

          <div className="kpi-progress">
            <span style={{ width: `${Math.max(20, 80 - index * 10)}%` }} />
          </div>

          <div className="kpi-footer">
            <TrendingUpRounded style={{ color: "#16a34a", fontSize: 18 }} />
            <span style={{ color: "#16a34a", fontWeight: 700 }}>
              +{card.growth ?? index + 5}%
            </span>
            <span className="month-text">this month</span>
          </div>
        </div>
      ))}
    </div>
  );
}