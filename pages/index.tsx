import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { Footer, Header, HomeCepForm, HomeHero } from '@app/components';
import { getCepData } from '@app/store/slices';

import { useAppSelector } from '../hooks';

const Home: NextPage = () => {
  const { push } = useRouter();
  const cep = useAppSelector(getCepData);

  const handlePageRedirect = useCallback(() => {
    if (cep.localidade) push('/Offers');
  }, [cep, push]);

  useEffect(handlePageRedirect, [handlePageRedirect]);

  return (
    <main>
      <Header />
      <section className='flex flex-col items-center h-[calc(100vh-128px)] px-3 py-10'>
        <HomeHero />
        <HomeCepForm />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
