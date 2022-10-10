import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@app/hooks/redux.hook';
import { fetchGetCep } from '@app/store/thunks';

import { SubmitButton } from './SubmitButton';

type TCepFormValues = {
  cep: string;
};

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('cep', { pattern: /^[0-9]{5}-[0-9]{3}$/ })}
        aria-invalid={errors.cep ? 'true' : 'false'}
        placeholder='Digite seu CEP: 00000-000'
        className='w-56 px-2 py-2 rounded rounded-r-none'
      />
      {errors.cep && <span>Digite um CEP valido: 00000-000</span>}
      <SubmitButton />
    </form>
  );
};
