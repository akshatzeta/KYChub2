import { Table, Tag, Select, Progress } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { calculateRiskScore } from './customerUtils';
import { CustomerData } from '../customerTypes';

const { Option } = Select;

interface Props {
  customers: CustomerData[];
  onStatusChange: (id: string, status: string) => void;
}

const CustomerTable = ({ customers, onStatusChange }: Props) => {
  const columns: ColumnsType<CustomerData> = [
    { title: 'Name', dataIndex: 'name', responsive: ['sm', 'md', 'lg'] },
    { title: 'Income', dataIndex: 'monthlyIncome', responsive: ['md', 'lg'] },
    { title: 'Credit Score', dataIndex: 'creditScore', responsive: ['md', 'lg'] },
    {
      title: 'Risk',
      key: 'riskScore',
      responsive: ['sm', 'md', 'lg'],
      render: (_, record) => {
        const risk = calculateRiskScore(record);
        const color = risk > 70 ? 'red' : risk > 40 ? 'orange' : 'green';
        return (
          <div className="flex items-center gap-2">
            <Progress percent={Math.round(risk)} strokeColor={color} showInfo={false} />
            <Tag color={color}>{Math.round(risk)}%</Tag>
          </div>
        );
      },
    },
    {
      title: 'Status',
      key: 'status',
      responsive: ['sm', 'md', 'lg'],
      render: (_, record) => (
        <Select
          defaultValue={record.status}
          onChange={(val) => onStatusChange(record.customerId, val)}
          className="w-full md:w-auto"
        >
          <Option value="Review">Review</Option>
          <Option value="Approved">Approved</Option>
          <Option value="Rejected">Rejected</Option>
        </Select>
      ),
    },
  ];

  return (
    <div className="rounded-lg border border-gray-200 shadow-sm p-4 bg-white dark:bg-[#1f1f1f] overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Customer Risk</h2>
      <Table
        dataSource={customers}
        columns={columns}
        rowKey="customerId"
        pagination={{ pageSize: 5 }}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};

export default CustomerTable;
