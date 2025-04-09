import React from 'react';
import { Card, Col, Row } from 'antd';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Approved', value: 400 },
  { name: 'Review', value: 300 },
  { name: 'Rejected', value: 300 },
];
const COLORS = ['#00C49F', '#FFBB28', '#FF4D4F'];

const Dashboard: React.FC = () => (
  <div>
    <Row gutter={16}>
      <Col span={12}>
        <Card title="Customer Status Pie Chart">
          <PieChart width={400} height={300}>
            <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={100} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
