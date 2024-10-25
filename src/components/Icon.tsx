// src/components/Icon.tsx
import React from 'react';
import * as Icons from '../icons';

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
  color = 'currentColor',
  className = '',
  style = {},
  ...props
}) => {
  const iconName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Icon`;
  const IconComponent = Icons[iconName as keyof typeof Icons];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <span 
      className={`my-svg-icon icon-${name} ${className}`}
      style={{ 
        display: 'inline-flex',
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        color,
        ...style
      }}
      {...props}
    >
      <IconComponent width="100%" height="100%" />
    </span>
  );
};
