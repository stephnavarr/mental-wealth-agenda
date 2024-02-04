import React from 'react';
import { Layout, Typography } from 'antd';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Episodes = () => {
  // Example episode data (replace this with your actual episode data)
  const episodes = [
    {
      id: 1,
      title: 'Episode 1: Introduction to Mental Health',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: 'December 15, 2023',
    },
    {
      id: 2,
      title: 'Episode 2: Coping Strategies for Stress',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      releaseDate: 'January 10, 2024',
    },
    // Add more episodes here...
  ];

  return (
    <Layout className="layout">
      <Content style={{ padding: '50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Title level={1}>Episodes</Title>
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Hero Image"
            style={{ width: '100%', marginBottom: '20px' }}
          />
          <Paragraph>
            Description about the episodes and what listeners can expect.
          </Paragraph>

          {/* Display episodes */}
          <div>
            {episodes.map(episode => (
              <div key={episode.id} style={{ marginBottom: '20px' }}>
                <Title level={4}>{episode.title}</Title>
                <Paragraph>{episode.description}</Paragraph>
                <Paragraph strong>
                  Release Date: {episode.releaseDate}
                </Paragraph>
                {/* Add audio player component for each episode */}
                {/* Replace with your audio player component */}
                <audio controls style={{ width: '100%' }}>
                  <source
                    src={`https://example.com/audio/${episode.id}`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
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

export default Episodes;
