import React from "react";

type StatsCardProps = {
  title: string;
  value: number;
};

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow text-center">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default StatsCard;
