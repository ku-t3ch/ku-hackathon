import { ReactNode } from 'react';

export interface NavLinksInterface {
  to: string;
  children?: ReactNode;
  mobileChildren?: ReactNode;
}
