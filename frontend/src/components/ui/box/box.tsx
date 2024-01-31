import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

type BoxProps = {
  className?: string;
  children: ReactNode;
};
const Box: FC<BoxProps> = (props) => {
  const { className, children } = props;
  return <div className={cn('rounded-[14px]', className)}>{children}</div>;
};

export default Box;
