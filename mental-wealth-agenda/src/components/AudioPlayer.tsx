import React, { useState, useRef } from 'react';

const AudioPlayer = ({ rssFeedUrl }: { rssFeedUrl: any }) => {
  const [audioUrl, setAudioUrl] = useState('');
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null); // Define audioRef using useRef

  const fetchAudioUrl = async () => {
    try {
      const response = await fetch(rssFeedUrl);
      const xmlData = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
      const enclosureElement = xmlDoc.querySelector('enclosure');
      const audioUrl = enclosureElement
        ? enclosureElement.getAttribute('url')
        : null;
      if (audioUrl) {
        setAudioUrl(audioUrl);
        loadDuration(audioUrl);
      } else {
        console.error('Audio URL not found in the RSS feed.');
      }
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    }
  };

  const loadDuration = async (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.onloadedmetadata = () => {
      setDuration(audio.duration);
    };
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause(); // Access the current property of audioRef
    } else {
      audioRef.current?.play(); // Access the current property of audioRef
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={fetchAudioUrl}>Play Episode</button>
      {audioUrl && (
        <div>
          <audio ref={audioRef} controls>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <span>{duration} seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
