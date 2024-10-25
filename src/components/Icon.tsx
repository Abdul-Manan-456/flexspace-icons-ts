// src/components/Icon.tsx
import React from "react";
import * as Icons from "../icons";

export interface IconProps {
  name: string;
  size?: string | number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  style = {},
  ...props
}) => {
  const iconName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const IconComponent = Icons[iconName as keyof typeof Icons];
  console.log("icon------------------", IconComponent);
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      fill={color}
      className={`icon-svg ${className}`}
      style={{ color, ...style }}
      {...props}
    />
  );
};
