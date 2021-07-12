import React from 'react';

/**
 * external link with target="_blank" and rel="noopener noreferrer"
 * @param param0
 * @returns
 */
export const LinkOut: React.FC<JSX.IntrinsicElements['a']> = ({
  children,
  ...props
}) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};