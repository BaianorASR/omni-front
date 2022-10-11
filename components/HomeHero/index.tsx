import { FC } from 'react';

export const HomeHero: FC = () => {
  return (
    <div>
      <p className='text-2xl font-semibold text-center'>
        Bem Vindo
        <span className='block text-5xl font-black text-center text-blue-400'>
          OmnixShop
        </span>
      </p>
      <p className='text-1xl font-bold text-center'>Tudo o que você está aqui</p>
    </div>
  );
};
