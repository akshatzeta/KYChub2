import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  BarChartOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const isMobile = window.innerWidth < 768;

  const menuItems = [
    { key: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: '/customers', icon: <TeamOutlined />, label: 'Customers' },
    { key: '/reports', icon: <BarChartOutlined />, label: 'Reports' },
  ];

  return isMobile ? (
    <>
      <Button
        icon={<MenuOutlined />}
        style={{ margin: 12 }}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Credit UI"
        placement="left"
        closable
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['/']}
          onClick={({ key }) => {
            setVisible(false);
            navigate(key);
          }}
          items={menuItems}
        />
      </Drawer>
    </>
  ) : (
    <Sider collapsible>
      <div style={{ color: 'white', padding: 16, fontWeight: 'bold' }}>Credit UI</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['/']}
        onClick={({ key }) => navigate(key)}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
