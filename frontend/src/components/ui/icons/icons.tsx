import React, { FC } from 'react';

import * as defaultIcons from './default';

import { IconNameType } from '@/components/ui/icons/icon.type';

type IconsProps = {
  name: IconNameType;
  size: number;
  className?: string;
};
const Icons: FC<IconsProps> = (props) => {
  const { name, className, size, ...remainingProps } = props;
  const iconObject = Object(defaultIcons);
  const Elem = iconObject[name];
  const renderIcon = () => <Elem size={size} className={className} {...remainingProps} />;
  return renderIcon();
};

export default Icons;
