import { configureStore } from '@reduxjs/toolkit';

import cepSlicer from './slices/CEP/cep.slicer';

export const store = configureStore({
  reducer: {
    cep: cepSlicer,
  },
  devTools: process.env.NEXT_NODE_ENV !== 'production',
});
