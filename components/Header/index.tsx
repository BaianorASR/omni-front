import { ShoppingBag, UserCircle } from 'phosphor-react';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className=' bg-zinc-700 flex items-center justify-between h-16 px-4 shadow-sm'>
      <h1 className='flex items-center gap-2'>
        <ShoppingBag size={32} />
        OmnixShop
      </h1>
      <p className='sm:flex hidden'>A melhor loja da Bahia</p>
      <div className='flex items-center gap-4'>
        <span>Baianor</span>
        <UserCircle size={32} className='animate-pulse' />
      </div>
    </header>
  );
};
