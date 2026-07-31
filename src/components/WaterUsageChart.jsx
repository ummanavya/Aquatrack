import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", usage: 320 },
  { month: "Feb", usage: 410 },
  { month: "Mar", usage: 385 },
  { month: "Apr", usage: 470 },
  { month: "May", usage: 510 },
  { month: "Jun", usage: 455 },
  { month: "Jul", usage: 620 },
  { month: "Aug", usage: 575 },
  { month: "Sep", usage: 540 },
  { month: "Oct", usage: 610 },
  { month: "Nov", usage: 645 },
  { month: "Dec", usage: 690 },
];

function WaterUsageChart() {
  return (
    <div style={{ width: "100%", height: 360 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0D6EFD" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#0D6EFD" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="usage"
            stroke="#0D6EFD"
            strokeWidth={3}
            fill="url(#waterGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WaterUsageChart;