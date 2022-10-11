import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='bg-zinc-900 fixed inset-x-0 bottom-0 flex flex-col items-center justify-center h-16 overflow-hidden shadow-sm'>
      <p>
        <span>Desenvolvido por </span>
        <a
          href='https://www.linkedin.com/in/baianorasr/'
          target='_blank'
          rel='noreferrer'
        >
          Baianor
        </a>
      </p>
    </footer>
  );
};
