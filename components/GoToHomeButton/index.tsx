import { useRouter } from 'next/router';
import { FC } from 'react';

import { useAppDispatch } from '@app/hooks/redux.hook';
import { resetCep } from '@app/store/slices';

export const GoToHomeButton: FC = () => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  const handleGoToHome = () => {
    dispatch(resetCep());
    push('/');
  };

  return (
    <button
      type='button'
      className='hover:bg-blue-700 bottom-20 transform-translate-x-1/2 right-2 fixed w-40 px-2 py-2 font-bold text-white transition-all duration-300 bg-blue-500 rounded'
      onClick={handleGoToHome}
    >
      Ops, errei meu cep!
    </button>
  );
};
