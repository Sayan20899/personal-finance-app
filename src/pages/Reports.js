import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const data = [
  { name: 'Rent', value: 800 },
  { name: 'Groceries', value: 400 },
  { name: 'Entertainment', value: 300 },
];

const Reports = () => {
  return (
    <div className="reports">
      <h1>Spending Report</h1>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Reports;
