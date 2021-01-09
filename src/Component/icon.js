import React from 'react';
import { withBaseIcon } from 'react-icons-kit';
import { chevronLeft } from 'react-icons-kit/feather/chevronLeft';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import { plusCircle } from 'react-icons-kit/feather/plusCircle';

const Icon = withBaseIcon({ size: '100%' });

export const ChevronLeft = () => <Icon icon={chevronLeft} />;
export const ChevronRight = () => <Icon icon={chevronRight} />;
export const PlusCircle = () => <Icon icon={plusCircle} />;
