import { useNavigate } from 'react-router-dom';
import collage from '../../assets/MixCollage-23-Feb-2024-10-54-PM-4721.jpg';
import podcastJan from '../../assets/podcastJan.png';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="w-200 h-200">
          <img src={collage} className="w-full h-full" />
        </div>
        <h1 className="text-3xl font-bold mb-4">the mental wealth agenda</h1>
        <h5>by shaadia flint</h5>
        <div className="w-full h-65 m-3">
          <img src={podcastJan} className="w-full h-full" />
          <button
            onClick={() => navigate('/episodes')}
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mr-4"
          >
            listen now
          </button>
        </div>

        {/* Hero images and text side by side */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          {/* Image on the left, text on the right */}
          <div className="flex-1 mb-4 md:mb-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image 1"
              className="w-full"
            />
          </div>
          <div className="flex-1 md:ml-4">
            <h3 className="text-xl font-bold mb-2">Left Image Title</h3>
            <p>
              Mental Health Awareness & Self Care; Conversations led by someone
              with professional and educational experience in mental health
              while also being born and raised in an urban city filled with
              trauma and grief.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* Text on the left, image on the right */}
          <div className="flex-1 md:mr-4">
            <h3 className="text-xl font-bold mb-2">Right Image Title</h3>
            <p>
              A late-90's baby leading realistic conversations about taking care
              of self and creating a more positive space for living!
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Image 2"
              className="w-full"
            />
          </div>
        </div>

        {/* Call-to-action buttons */}
        <div className="mt-8">
          <button
            onClick={() => navigate('/blog')}
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mr-4"
          >
            Read the Blog
          </button>
        </div>
        <h1 className="mb-8 text-4xl text-center color-blue">
          mental health is TRUE wealth, and healing is my AGENDA!
        </h1>
      </div>
      <footer className="text-center py-4 bg-gray-200">
        &copy; {new Date().getFullYear()} The Mental Wealth Agenda
      </footer>
    </div>
  );
};

export default HomePage;
