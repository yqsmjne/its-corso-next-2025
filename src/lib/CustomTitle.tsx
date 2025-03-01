import React, { PropsWithChildren } from 'react';
import { Title } from '@mantine/core';

export const CustomTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return <Title style={{ color: '#fff', margin: '40px 0' }}>{children}</Title>;
};
