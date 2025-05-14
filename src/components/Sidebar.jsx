// src/components/Sidebar.jsx

import React from 'react';
import {
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'User',
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
