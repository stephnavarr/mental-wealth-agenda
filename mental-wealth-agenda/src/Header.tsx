import { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css';

const { Header } = Layout;

const MyHeader = () => {
  const [visible, setVisible] = useState(false);
  const isMobile = window.innerWidth <= 768; // Define the breakpoint (example: 768px)

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header>
      <div className="logo" />
      {isMobile ? (
        <div className="menu-mobile">
          <Button type="primary" onClick={showDrawer}>
            Menu
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
                <Link to="/">Home</Link>{' '}
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
            <Menu.Item key="home">Home<Link to="/"></Link></Menu.Item>

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
