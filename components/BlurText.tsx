import React from "react";
import clsx from "clsx";

type BlurTextProps = {
  text: string;
  revealed?: boolean;
  revealOnHover?: boolean;
  className?: string;
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  revealed = false,
  revealOnHover = true,
  className,
}) => {
  const isBlurred = !revealed;

  return (
    <span
      className={clsx(
        "blur-text",
        revealOnHover && "blur-text-hover",
        isBlurred && "blur-text-blurred",
        !isBlurred && "blur-text-clear",
        className
      )}
    >
      {text}
    </span>
  );
};

export default BlurText;