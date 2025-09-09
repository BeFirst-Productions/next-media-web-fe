'use client';
import { useRef } from 'react';
import { useMousePosition } from '@/components/hooks/use-mouse-position';
import { motion } from 'framer-motion';

function BasicExample() {
  const containerRef = useRef(null);
  const mousePosition = useMousePosition(containerRef);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8">
      <div
        ref={containerRef}
        className="w-4/6 h-[400px] rounded-3xl border relative bg-slate-50 overflow-hidden"
      >
        <motion.div
          className="w-4 h-4 bg-blue-500 rounded-full absolute"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
          }}
        />

        <div className="absolute bottom-4 left-4 font-mono text-sm">
          x: {Math.round(mousePosition.x)}, y: {Math.round(mousePosition.y)}
        </div>
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          Move mouse here
        </div>
      </div>
    </div>
  );
}

function InteractiveTextExample() {
  const containerRef = useRef(null);
  const mousePosition = useMousePosition(containerRef);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8">
      <div
        ref={containerRef}
        className="w-4/6 h-[400px] rounded-3xl border relative"
      >
        <motion.h1
          className="absolute text-4xl font-bold"
          style={{
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
            rotate:
              (mousePosition.x - (containerRef.current?.clientWidth || 0) / 2) *
              0.02,
            scale:
              1 +
              (mousePosition.y / (containerRef.current?.clientHeight || 1)) *
                0.001,
          }}
        >
          Interactive Text
        </motion.h1>
      </div>
    </div>
  );
}

function GradientExample() {
  const containerRef = useRef(null);
  const mousePosition = useMousePosition(containerRef);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8">
      <div
        ref={containerRef}
        className="w-4/6 h-[400px] rounded-3xl relative overflow-hidden"
      >
        <motion.div
          className="w-full h-full absolute"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.5), transparent 50%)`,
          }}
        />
        <div className="w-full h-full flex items-center justify-center text-gray-600 z-10 relative">
          Move to change gradient position
        </div>
      </div>
    </div>
  );
}

export { BasicExample, InteractiveTextExample, GradientExample };
