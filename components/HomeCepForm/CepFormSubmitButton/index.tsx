import { CircleNotch } from 'phosphor-react';
import { FC } from 'react';

import { useAppSelector } from '@app/hooks/redux.hook';
import { isCepLoading } from '@app/store/slices';

export const CepFormSubmitButton: FC = () => {
  const loading = useAppSelector(isCepLoading);

  return (
    <button
      type='submit'
      className='hover:bg-blue-700 w-36 px-2 py-2 font-bold text-white transition-all duration-300 bg-blue-500 rounded rounded-l-none'
    >
      {loading ? (
        <div className='flex gap-2'>
          <CircleNotch className='animate-spin' size={24} />
          Carregando...
        </div>
      ) : (
        'procurar'
      )}
    </button>
  );
};
