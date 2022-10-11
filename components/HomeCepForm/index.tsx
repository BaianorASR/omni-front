import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@app/hooks/redux.hook';
import { fetchGetCep } from '@app/store/thunks';

import type { TCepFormValues } from './@types';
import { CepFormSubmitButton } from './CepFormSubmitButton';

export const HomeCepForm: FC = () => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TCepFormValues>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async (data: TCepFormValues) => {
    dispatch(fetchGetCep(data.cep));
  };

  return (
    <div className='mt-36 flex flex-col items-center h-full gap-2'>
      <p className='text-zinc-200'>
        <span>Coloque seu CEP e encontraremos</span>
        <br />
        <span>as melhores ofertas para você 🎁!</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <input
          {...register('cep')}
          aria-invalid={errors.cep ? 'true' : 'false'}
          placeholder='Digite seu CEP: 00000-000'
          className='w-52 focus:ring-2 focus:ring-blue-400 text-zinc-800 px-2 py-2 rounded rounded-r-none outline-none'
        />
        {errors.cep && <span>Digite um CEP valido: 00000-000</span>}
        <CepFormSubmitButton />
      </form>
    </div>
  );
};
