import type { NextPage } from 'next';

import { Footer, Header, HomeCepForm } from '@app/components';

const Home: NextPage = () => {
  return (
    <main>
      <Header />
      <section className='flex flex-col items-center justify-center h-[calc(100vh-128px)]'>
        <h1>Bem Vindo</h1>
        <HomeCepForm />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
