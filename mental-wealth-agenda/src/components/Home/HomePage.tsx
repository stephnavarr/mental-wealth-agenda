import { useNavigate } from 'react-router-dom';

import mwalogo from '../../assets/mwalogo.png';
import support from '../../assets/support.png';
import lovewhoyouare from '../../assets/lovewhoyouare.png';
import podcastFeature from '../../assets/podcastJan.png';
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* First Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${mwalogo})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="p-2">
            <p className="text-white text-2xl text-center mb-4">
              Addressing those tough conversations,
            </p>
            <p className="text-white text-2xl text-center mb-4">
              and providing the tools you need.
            </p>
            <p className="text-white italic text-3xl text-center mb-4">
              Welcome to the agenda ♡
            </p>
          </div>
          <button
            onClick={() => navigate('/episodes')}
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
          >
            Listen Now →
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto px-4 py-10 flex items-start">
        {/* Text Content */}
        <div className="flex-1 md:mr-4">
          <div className="mb-7">
            <h3 className="text-2xl font-bold mb-2 text-pink-600">
              Real conversations, <i>real tools</i>
            </h3>
            <p>
              The Mental Wealth Agenda is a wellbeing brand (podcast, social
              media, blog) that is meant to reach those who may feel alone in
              their struggles with everyday life. In an effort to make mental
              wealth accessible <i>to all</i>, the agenda provides tips, tools
              and resources at no cost to the community.{' '}
              <button
                onClick={() => navigate('/episodes')}
                className="bg-white hover:bg-blue-400 hover:text-white underline text-sky-500 font-semibold py-2 px-4 rounded"
              >
                See the episodes →
              </button>
            </p>
          </div>
          <div className="mb-7">
            <h3 className="text-2xl font-bold mb-2 text-pink-400">
              Real tools, <i>real community</i>
            </h3>
            <p>
              The hardest part of struggling through something is that feeling
              of being alone. At the Agenda, we leverage the power of social
              media to provide a safe place for anyone to come talk, listen, and
              be inspired.
              <button className="bg-white hover:bg-blue-400 hover:text-white underline text-sky-500 font-semibold py-2 px-4 rounded">
                <a
                  href="https://www.instagram.com/thementalwealthagenda/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Agenda on Instagram →
                </a>
              </button>
            </p>
          </div>
          <div className="mb-7">
            <h3 className="text-2xl font-bold mb-2 text-pink-300">
              Real community, <i>real experiences</i>
            </h3>
            <p>
              I have lived through grief, grown up in struggle, and dedicated my
              life to giving back to the community. Trust me, I{' '}
              <i>understand</i> you, and I hope I can help! The Mental Wealth
              Agenda’s mission is to provide others with the courage and
              language to work through tough emotions, relationships, and life
              situations. It has been created to highlight the importance of
              mental health and wellness, while building a community.
              <button
                onClick={() => navigate('/about')}
                className="bg-white hover:bg-blue-400 hover:text-white underline text-sky-500 font-semibold py-2 px-4 rounded"
              >
                More about the creator →
              </button>
            </p>
          </div>
        </div>

        {/* Image Containers */}
        <div className="flex-1 md:flex-initial w-1/3">
          <img
            src={support}
            alt="Support Image"
            className="h-full w-full"
            style={{ filter: 'sepia(100%) hue-rotate(195deg) saturate(500%)' }}
          />
          <img
            src={lovewhoyouare}
            alt="Support Image"
            className="h-full w-full"
            style={{ filter: 'sepia(100%) hue-rotate(190deg) saturate(300%)' }}
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-indigo-300 p-4 opacity-80">
        <div className="text-center">
          <h1 className="text-2xl mb-4 font-bold">
            Checkout our latest episode!
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src={podcastFeature}
              alt="Podcast Feature"
              className="max-h-64 w-auto"
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-3 ml-4">
            <h4 className="text-xl font-bold">
              Starting a mental wealth journey
            </h4>
            <p>
              Join me as I share some tangible tips for starting...from scratch!
            </p>
            <button
              onClick={() => navigate('/episodes')}
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
            >
              Listen Now →
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
        <div className="container mx-auto px-4">
          <h1 className="text-2xl text-center m-4">
            Mental health is true <i>wealth,</i> and healing is the{' '}
            <i>agenda.</i>
          </h1>
        </div>
      {/* Footer */}
      <footer className="text-center py-4 bg-gray-200">
        <div className="flex justify-center mb-4">
          <a
            href="/episodes"
            className="mx-2 text-blue-500 hover:underline font-semibold"
          >
            Episodes
          </a>
          <a
            href="/about"
            className="mx-2 text-blue-500 hover:underline font-semibold"
          >
            About
          </a>
          <a
            href="/"
            className="mx-2 text-blue-500 hover:underline font-semibold"
          >
            Home
          </a>
          <a
            href="https://www.instagram.com/thementalwealthagenda/"
            className="mx-2 text-blue-500 hover:underline font-semibold"
          >
            Instagram
          </a>
        </div>
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} The Mental Wealth Agenda
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
