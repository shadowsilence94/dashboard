// src/components/AppLayout.jsx
import { useState } from 'react';
import { Layout, theme, Card } from 'antd';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';

const { Content } = Layout;

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Card
            style={{
              borderRadius: borderRadiusLG,
              minHeight: '200px',
            }}
          >
            Content Here...
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}
