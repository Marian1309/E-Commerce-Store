'use client';

import type { FC, MouseEventHandler, ReactElement } from 'react';

import { cn } from '@/lib/utils';

type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: ReactElement;
  className?: string;
};

const IconButton: FC<IconButtonProps> = ({ onClick, icon, className }) => {
  return (
    <button
      className={cn(
        'rounded-full border bg-white p-2 shadow-md transition flex-center hover:scale-110',
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
