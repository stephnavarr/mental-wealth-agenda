import { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import './Header.css';

const { Header } = Layout;

const MyHeader = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = window.innerWidth <= 800;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header
      style={{ backgroundColor: 'white', margin: 0, height: isMobile ? '2vh' : 'auto' }}
    >
      {' '}
      {/* Apply custom background color */}
      <div className="logo" />
      {isMobile ? (
        <div className="menu-mobile">
          <Button style={{ border: 'none' }} onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={onClose}
            open={visible}
            width={200}
          >
            <Menu mode="inline" onClick={onClose}>
              <Menu.Item key="home">
                <Link to="/">The Agenda</Link>{' '}
              </Menu.Item>
              <Menu.Item key="episodes">
                <Link to="/episodes">Episodes</Link>
              </Menu.Item>
              <Menu.Item key="blog">
                <Link to="/blog">Blog</Link>
              </Menu.Item>
              {/* <Menu.Item key="about">
                <Link to="/about">About</Link>
              </Menu.Item> */}
            </Menu>
          </Drawer>
        </div>
      ) : (
        <div className="menu-desktop">
          <Menu mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home">
              The Agenda<Link to="/"></Link>
            </Menu.Item>

            <Menu.Item key="episodes">
              <Link to="/episodes">Episodes</Link>
            </Menu.Item>
            <Menu.Item key="blog">
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </Header>
  );
};

export default MyHeader;
