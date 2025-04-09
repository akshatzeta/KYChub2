import { useEffect, useState } from 'react';
import { fetchCustomers, updateCustomerStatus } from '../axios';
import { CustomerData } from '../customerTypes';
import CustomerTable from './CustomerTable';
import IncomeExpenseChart from './IncomeExpenseChart';
import StatusPieChart from './StatusPieChart';

const Customer = () => {
  const [customers, setCustomers] = useState<CustomerData[]>([]);

  useEffect(() => {
    fetchCustomers().then(setCustomers);
  }, []);

  const handleStatusUpdate = (id: string, status: string) => {
    updateCustomerStatus(id, status).then(() => {
      setCustomers((prev) =>
        prev.map((c) => (c.customerId === id ? { ...c, status } : c))
      );
    });
  };

  const chartData =
    customers[0]?.incomeHistory?.map((income, index) => ({
      month: `M${index + 1}`,
      income,
      expenses: customers[0].expenseHistory?.[index] || 0,
    })) || [];

  return (
    <div className="p-4 space-y-8 bg-transparent">
      <CustomerTable customers={customers} onStatusChange={handleStatusUpdate} />
      {chartData.length > 0 && (
        <div className="flex flex-col gap-4 items-stretch">
          <IncomeExpenseChart data={chartData} />
          <StatusPieChart customers={customers} />
        </div>
      )}
    </div>
  );
};

export default Customer;
