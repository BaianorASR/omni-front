import { FC, ReactNode } from 'react';

import { Footer } from '@app/components/Footer';
import { Header } from '@app/components/Header';

type MainLayoutProps = {
  children: ReactNode | ReactNode[];
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className=''>
      <Header />
      <section className='flex flex-col items-center min-h-[calc(100vh-128px)] px-3 py-10'>
        {children}
      </section>
      <Footer />
    </main>
  );
};
