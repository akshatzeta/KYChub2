import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/Dashboard';
import Customers from './component/Customer/Customer';
import Reports from './pages/Reports';

const { Content } = Layout;

const App: React.FC = () => (
  <Router>
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '24px 16px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  </Router>
);

export default App;