import { FC } from 'react';

import { Footer } from '@app/components/Footer';
import { Header } from '@app/components/Header';

export const MainLayout: FC = ({ children }: any) => {
  return (
    <div className=''>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
