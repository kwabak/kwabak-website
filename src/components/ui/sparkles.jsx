// src/components/ui/sparkles.jsx
import React, { useEffect, useRef } from "react";

export const SparklesCore = ({ background = "transparent", minSize = 0.5, maxSize = 1.5 }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const sparkles = [];

    const createSparkle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random(),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      };
    };

    for (let i = 0; i < 100; i++) {
      sparkles.push(createSparkle());
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparkles.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.fill();
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.x < 0 || s.x > canvas.width || s.y < 0 || s.y > canvas.height) {
          Object.assign(s, createSparkle());
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [minSize, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background }}
    />
  );
};
