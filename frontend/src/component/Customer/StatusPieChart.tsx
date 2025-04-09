import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomerData } from '../customerTypes';

const pieColors = ['#52c41a', '#faad14', '#f5222d']; 

const StatusPieChart = ({ customers }: { customers: CustomerData[] }) => {
  const statusCounts = customers.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(statusCounts).map(([status, value]) => ({
    name: status,
    value,
  }));

  return (
    <div className="rounded-lg border border-gray-200 shadow-sm p-4 bg-white dark:bg-[#1f1f1f]">
      <h2 className="text-xl font-semibold mb-4">Customer Status Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((_, index) => (
              <Cell key={index} fill={pieColors[index % pieColors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusPieChart;
