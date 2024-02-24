import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

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
    <header className="bg-white">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-700"
              onClick={onClose}
            >
              The Agenda
            </Link>
        </div>
        {isMobile ? (
          <div className="flex items-center">
            <button
              className="text-gray-900 focus:outline-none"
              onClick={showDrawer}
            >
              <IoIosMenu className="h-6 w-6" />
            </button>
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
                visible ? 'block' : 'hidden'
              }`}
              onClick={onClose}
            ></div>
            <div
              className={`fixed inset-y-0 left-0 w-64 bg-white z-50 ${
                visible ? 'block' : 'hidden'
              }`}
            >
              <div className="p-4">
                <button
                  className="text-gray-900 focus:outline-none"
                  onClick={onClose}
                >
                  &times;
                </button>
              </div>
              <nav className="px-4 py-2">
                <ul>
                  <li className="mb-2">
                    <Link
                      to="/episodes"
                      className="text-gray-900 hover:text-gray-700"
                      onClick={onClose}
                    >
                      Episodes
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/blog"
                      className="text-gray-900 hover:text-gray-700"
                      onClick={onClose}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/episodes"
                  className="text-gray-900 hover:text-gray-700"
                >
                  Episodes
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-900 hover:text-gray-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 hover:text-gray-700">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default MyHeader;

