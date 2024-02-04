import { Layout, Button, Typography } from 'antd';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Title level={1}>The Mental Wealth Agenda</Title>
          <Paragraph>
            Explore articles and podcasts dedicated to mental well-being and
            health.
          </Paragraph>

          {/* Hero images and text side by side */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            {/* Image on the left, text on the right */}
            <div style={{ flex: 1 }}>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Hero Image 1"
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <Title level={3}>Left Image Title</Title>
              <Paragraph>
                Some text describing the left image. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Paragraph>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Text on the left, image on the right */}
            <div style={{ flex: 1, marginRight: '20px' }}>
              <Title level={3}>Right Image Title</Title>
              <Paragraph>
                Some text describing the right image. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Paragraph>
            </div>
            <div style={{ flex: 1 }}>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Hero Image 2"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Call-to-action buttons */}
          <Button type="primary" size="large" style={{ marginRight: '10px' }}>
            <Link to="/episodes">Explore Podcasts</Link>
          </Button>
          <Button type="primary" size="large">
            <Link to="/blog">Read Blog</Link>
          </Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} The Mental Wealth Agenda
      </Footer>
    </Layout>
  );
};

export default HomePage;
