import MediaSwitcher from './MediaSwitcher';

const Episodes = () => {
  // Example episode data (replace this with your actual episode data)
  const episodes = [
    {
      id: 2,
      title: 'Episode 2: Starting your mental wealth journey',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: 'January 28, 2023',
      spotifyLink:
        'https://open.spotify.com/embed/show/0OdKORYhwmAvnslXXGmYsw?utm_source=generator',
      youtubeLink:
        'https://www.youtube.com/embed/7hek4u3af1g?si=KFL16KZAyTG8ZW4h',
    },
    {
      id: 1,
      title: 'Episode 1: Introduction',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      releaseDate: 'January 28, 2023',
      spotifyLink:
        'https://open.spotify.com/embed/episode/2o0HdYBssXk7girWYQsndS?utm_source=generator',
      youtubeLink:
        'https://www.youtube.com/embed/7hek4u3af1g?si=YZtLTPgEzp6NTtER',
    },
  ];
  return (
    <>
      <div className="bg-white min-h-screen">
        {episodes.map(episode => (
          <div key={episode.id} className="container mx-auto px-4 py-10">
            <p className="mb-8">{`${episode.title} - ${episode.releaseDate}`}</p>
            <MediaSwitcher
              spotifyLink={episode.spotifyLink}
              youtubeLink={episode.youtubeLink}
            />
          </div>
        ))}
      </div>
      {/* Footer should be outside of the main content container */}
      <footer className="text-center py-4 bg-gray-200">
        &copy; {new Date().getFullYear()} The Mental Wealth Agenda
      </footer>
    </>
  );
};

export default Episodes;
