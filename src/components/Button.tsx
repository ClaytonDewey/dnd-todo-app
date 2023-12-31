import React from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  object;

export const Button = (props: Props) => {
  return <button {...props} />;
};
