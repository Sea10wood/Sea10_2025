import React from 'react';
import useObserver from '../hooks/useObserver';

const AnimatedSection = ({ id, title, children }) => {
  const [ref, isVisible] = useObserver();

  return (
    <section
      id={id}
      ref={ref}
      className={`container mx-auto px-4 fade-in ${
        isVisible ? 'visible' : ''
      }`}
      style={{ marginBottom: '4rem' }}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default AnimatedSection;
