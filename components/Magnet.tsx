import React, { useState, useCallback } from "react";

type MagnetLinesProps = {
  lines: string[];
  strength?: number;
  className?: string;
};

type Point = { x: number; y: number };

const MagnetLines: React.FC<MagnetLinesProps> = ({
  lines,
  strength = 0.1,
  className,
}) => {
  const [mousePos, setMousePos] = useState<Point | null>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRect) {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        setContainerRect(rect);
      }
      setMousePos({ x: e.clientX, y: e.clientY });
    },
    [containerRect]
  );

  const handleMouseLeave = () => setMousePos(null);

  const computeTransform = (index: number): string => {
    if (!mousePos || !containerRect) return "translate3d(0, 0, 0)";
    const dx = mousePos.x - (containerRect.left + containerRect.width / 2);
    const dy = mousePos.y - (containerRect.top + containerRect.height / 2);
    return `translate3d(${dx * strength * (index + 1) * 0.15}px, ${
      dy * strength * (index + 1) * 0.15
    }px, 0)`;
  };

  return (
    <div
      className={`magnet-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {lines.map((line, index) => (
        <div
          key={index}
          className="magnet-line"
          style={{ transform: computeTransform(index) }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default MagnetLines;