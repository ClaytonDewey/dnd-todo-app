import React from 'react';

type HeaderProps = {
  children: JSX.Element;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <h1>todo</h1>
      {children}
    </header>
  );
};
