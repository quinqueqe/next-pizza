import React from 'react';
import { cn } from '@/shared/lib';

type Props = {
	className?: string;
}

export const Stories = ({ className } : Props) => {
	
  return (
	<div className={cn('', className)}></div>
  );
};