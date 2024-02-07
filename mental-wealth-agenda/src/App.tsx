import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import Episodes from './Episodes';
import Header from './Header';
import AboutPage from './AboutPage';
import HomePageAnimation from './Intro';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const animationDuration = 4000; // Adjust the duration (in milliseconds) as needed

    // Set a timeout to hide the animation and redirect to the home page after the duration
    const timeoutId = setTimeout(() => {
      setShowAnimation(false);
    }, animationDuration);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      {showAnimation ? (
        <HomePageAnimation />
      ) : (
        <>
          <FadeIn>
            <Header />
          </FadeIn>
          <FadeIn>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </FadeIn>
        </>
      )}
    </Router>
  );
}

// FadeIn component for adding fade-in effect
const FadeIn = ({ children }: { children: any }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Delay the transition to ensure it starts after the animation duration
    const fadeInTimeout = setTimeout(() => {
      setOpacity(1);
    }, 20); // Adjust the delay as needed

    return () => clearTimeout(fadeInTimeout);
  }, []);

  return (
    <div style={{ opacity, transition: 'opacity 400ms ease-in-out' }}>
      {children}
    </div>
  );
};

export default App;
