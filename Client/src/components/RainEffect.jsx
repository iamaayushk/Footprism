import React from 'react';

function RainEffect() {
  const drops = new Array(50).fill(0); // Number of raindrops

  return (
    <div className="absolute top-20 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-10">
      {drops.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 1 + Math.random() * 7;
        const delay = Math.random() * 2;

        return (
          <span
            key={i}
            className="absolute w-[2px] h-[20px] bg-blue-300 opacity-60"
            style={{
              left: `${left}%`,
              top: '-20px',
              animation: `fall ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default RainEffect;
