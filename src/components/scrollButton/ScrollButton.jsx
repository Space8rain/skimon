import React from "react";
import styles from './ScrollButton.module.css';

function ScrollButton() {

  const [isVisible, setIsVisible] = React.useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setIsVisible(true)
    } 
    else if (scrolled <= 300){
      setIsVisible(false)
    }
  }

  function scrollToTop () {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button onClick={scrollToTop} className={`${styles.btn_scroll} ${isVisible ? styles.visible : ''}`}>
      <svg width="48" height="48" viewBox="0 0 24 24"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 11.05L16.95 16L18.364 14.586L12 8.222L5.636 14.586L7.05 16L12 11.05Z" fill="currentColor"/>
      </svg>
    </button>
  );
}

export default ScrollButton;
