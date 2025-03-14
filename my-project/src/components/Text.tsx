import React from 'react';

export interface TextProps {
  children: React.ReactNode;
  type?: 'title' | 'large' | 'medium' | 'small' | 'extraLarge';
  weight?: '400' | '500' | '600' | '700';
  color?: string;
  style?: React.CSSProperties;
}

const Text = ({ children, type, weight = '400', color, style = {} }: TextProps) => {
  const fontSize = {
    extraLarge: 24,
    title: 20,
    large: 16,
    medium: 14,
    small: 11,
  }[type || 'medium'];

  const lineHeight = {
    extraLarge: 36,
    title: 30,
    large: 22,
    medium: 21,
    small: 16,
  }[type || 'medium'];

  return (
    <span
      style={{
        fontFamily: 'Montserrat',
        fontWeight: weight,
        fontSize,
        lineHeight: `${lineHeight}px`,
        color: color || '#333F48',
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Text;
