import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { Footer, Header, HomeCepForm, HomeHero } from '@app/components';
import { getCepData } from '@app/store/slices';
import { MainLayout } from '@app/styles';

import { useAppSelector } from '../hooks';

const Home: NextPage = () => {
  const { push } = useRouter();
  const cep = useAppSelector(getCepData);

  const handlePageRedirect = useCallback(() => {
    if (cep.localidade) push('/Offers');
  }, [cep, push]);

  useEffect(handlePageRedirect, [handlePageRedirect]);

  return (
    <MainLayout>
      <HomeHero />
      <HomeCepForm />
    </MainLayout>
  );
};

export default Home;
