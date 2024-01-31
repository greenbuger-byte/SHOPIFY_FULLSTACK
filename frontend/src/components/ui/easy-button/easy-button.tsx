import React, { FC, MouseEvent } from 'react';

import Icons from '@/components/ui/icons/icons';
import { IconNameType } from '@/components/ui/icons/icon.type';

type EasyButtonProps = {
  icon?: IconNameType;
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
const EasyButton: FC<EasyButtonProps> = (props) => {
  const { icon, label, onClick } = props;

  function onClickHandler(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
  }

  return (
    <button
      onClick={onClickHandler}
      className="w-full flex items-center gap-[10px] justify-center rounded-md bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      {icon && <Icons name={icon} size={18} />}
      {label}
    </button>
  );
};

export default EasyButton;
