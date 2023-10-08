import React from 'react';
import { IconCheck, IconCross, IconMoon, IconSun } from './index';

type IconProps = {
  name: string;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case 'Check':
      return <IconCheck />;
    case 'Cross':
      return <IconCross />;
    case 'Moon':
      return <IconMoon />;
    case 'Sun':
      return <IconSun />;
    default:
      return <IconCheck />;
  }
};
export default Icon;
