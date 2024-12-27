import { useEffect } from 'react';

const Bubbles = () => {
  const createBubble = () => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random();
    if (size < 0.33) {
      bubble.classList.add('bubble-small');
    } else if (size < 0.66) {
      bubble.classList.add('bubble-medium');
    } else {
      bubble.classList.add('bubble-large');
    }

    bubble.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 6000000); 
  };

  useEffect(() => {
    const interval = setInterval(createBubble, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return null;
};

export default Bubbles;
