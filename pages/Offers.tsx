import { meals } from 'data';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { GoToHomeButton, OffersCity } from '@app/components';
import { getCepData } from '@app/store/slices';
import { MainLayout } from '@app/styles';

import { useAppSelector } from '../hooks';

const Offers: NextPage = () => {
  const { push } = useRouter();
  const cep = useAppSelector(getCepData);
  const handlePageRedirect = useCallback(() => {
    if (!cep.localidade) push('/');
  }, [cep, push]);

  useEffect(handlePageRedirect, [handlePageRedirect]);

  return (
    <MainLayout>
      <OffersCity />
      <h1 className='text-gray-30000 my-4 text-2xl font-bold text-center'>Offers</h1>
      <div className='flex flex-wrap justify-center gap-2'>
        {meals.map(meal => (
          <div
            key={meal.idMeal}
            className='w-36 bg-zinc-700 hover:border border-zinc-500 flex flex-col items-center p-1 rounded cursor-pointer'
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className='w-32' />
            <p className='text-sm'>{meal.strMeal}</p>
          </div>
        ))}
      </div>
      <GoToHomeButton />
    </MainLayout>
  );
};

export default Offers;
