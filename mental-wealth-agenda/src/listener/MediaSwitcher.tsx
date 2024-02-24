import { useState } from "react";
const MediaSwitcher = ({
  spotifyLink,
  youtubeLink,
}: {
  spotifyLink: string;
  youtubeLink: string;
}) => {
  const [isSpotifyActive, setIsSpotifyActive] = useState(true);

  const toggleMedia = () => {
    setIsSpotifyActive(!isSpotifyActive);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <iframe
        src={spotifyLink}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ display: isSpotifyActive ? 'block' : 'none' }}
      ></iframe>
      <iframe
        width="560"
        height="315"
        src={youtubeLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ display: isSpotifyActive ? 'none' : 'block' }}
      ></iframe>
      <button
        className="bg-none border-none hover:bg-blue-200 text-blue font-semibold py-2 px-2 rounded"
        onClick={toggleMedia}
      >
        {isSpotifyActive ? 'Watch Instead' : 'Listen Instead'}
      </button>
    </div>
  );
};

export default MediaSwitcher;
