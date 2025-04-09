import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
  
  interface ChartData {
    month: string;
    income: number;
    expenses: number;
  }
  
  const IncomeExpenseChart = ({ data }: { data: ChartData[] }) => (
    <div className="rounded-lg border border-gray-200 shadow-sm p-4 bg-white dark:bg-[#1f1f1f]">
      <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="expenses" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  
  export default IncomeExpenseChart;
  