import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const BlogPage = () => {
  // Example blog post data (replace this with your actual blog post data)
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Stress: Causes and Management',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      publicationDate: 'December 5, 2023',
    },
    {
      id: 2,
      title: 'The Importance of Self-care in Mental Health',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      publicationDate: 'January 2, 2024',
    },
    // Add more blog posts here...
  ];

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Title level={1}>Blog</Title>
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Hero Image"
            style={{ width: '100%', marginBottom: '20px' }}
          />
          <Paragraph>
            Description about the blog and the topics covered.
          </Paragraph>

          {/* Display blog posts */}
          <div>
            {blogPosts.map(post => (
              <div key={post.id} style={{ marginBottom: '20px' }}>
                <Title level={4}>{post.title}</Title>
                <Paragraph>{post.content}</Paragraph>
                <Paragraph strong>
                  Publication Date: {post.publicationDate}
                </Paragraph>
                <Link
                  to="/blog"
                  style={{ display: 'block', marginTop: '10px' }}
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} The Mental Wealth Agenda
      </Footer>
    </Layout>
  );
};

export default BlogPage;
