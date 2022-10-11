import { FC } from 'react';

import { useAppSelector } from '@app/hooks/redux.hook';
import { getCepData } from '@app/store/slices';

export const OffersCity: FC = () => {
  const cep = useAppSelector(getCepData);

  return (
    <div className='flex px-4 py-1 bg-blue-500 rounded'>
      <p>{`${cep.cep} - ${cep.localidade}, ${cep.uf}`}</p>
    </div>
  );
};
