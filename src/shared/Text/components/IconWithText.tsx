import React from 'react';
import { IconWithTextProps } from '../types/IconWithTextProps';

import '../text.module.scss';

export const IconWithText: React.FC<IconWithTextProps> = ({ Icon, text, iconSize }) => {
  return (
    <div className="icon-container">
      <Icon size={Number(iconSize)} />
      <span className="icon-text">{text}</span>
    </div>
  );
};
