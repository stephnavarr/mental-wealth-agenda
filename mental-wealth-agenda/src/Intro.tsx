// HomePageAnimation.jsx
import { useState, useEffect } from 'react';
import styles from './Intro.module.css'; // Import the CSS module

const HomePageAnimation = () => {
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const texts = document.querySelectorAll(`.${styles.animationText}`);
    texts.forEach((text, index) => {
      setTimeout(() => {
        text.classList.remove(styles.hidden);
      }, 1000 * index);
    });

    // Calculate total animation duration
    const animationDuration = 1000 * texts.length;

    // Set timeout to mark animation as finished and remove the hidden class
    setTimeout(() => {
      setAnimationFinished(true);
      texts.forEach(text => {
        text.classList.remove(styles.hidden);
      });
    }, animationDuration);

    // Cleanup function to clear timeouts
    return () => {
      texts.forEach((text, index) => {
        clearTimeout(1000 * index);
      });
      clearTimeout(animationDuration);
    };
  }, []);

  return (
    <div id={styles.animationContainer} className={styles.container}>
      <h1
        className={`${styles.animationText} ${
          animationFinished ? '' : styles.hidden
        }`}
      >
        The
      </h1>
      <h1
        className={`${styles.animationText} ${
          animationFinished ? '' : styles.hidden
        }`}
      >
        Mental
      </h1>
      <h1
        className={`${styles.animationText} ${
          animationFinished ? '' : styles.hidden
        }`}
      >
        Wealth
      </h1>
      <h1
        className={`${styles.animationText} ${
          animationFinished ? '' : styles.hidden
        }`}
      >
        Agenda
      </h1>
    </div>
  );
};

export default HomePageAnimation;
