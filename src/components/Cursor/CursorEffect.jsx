'use client';
import { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      if (cursor) {
        cursor.animate(
          [{ transform: `translate(${e.clientX}px, ${e.clientY}px)` }],
          { duration: 200, fill: 'forwards' }
        );
      }

      // create tail element
      const tail = document.createElement('div');
      tail.className = 'comet-tail';
      tail.style.left = `${e.clientX}px`;
      tail.style.top = `${e.clientY}px`;
      document.body.appendChild(tail);

      // remove after animation
      setTimeout(() => tail.remove(), 500);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Main comet cursor */}
      <div
        ref={cursorRef}
        className="fixed  w-6 h-6 border  border-[#35A3E2]  rounded-full pointer-events-none z-50
                    
                   transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};
export default CursorEffect;
