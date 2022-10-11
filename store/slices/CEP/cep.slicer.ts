import { fetchGetCep } from '@app/store/thunks';
import type { RootState, TCepState } from '@app/store/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TCepState = {
  data: {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ddd: '',
    gia: '',
    ibge: '',
    siafi: '',
  },
  error: null,
  loading: false,
};

const cepSlicer = createSlice({
  name: 'cep',
  initialState,
  reducers: {
    resetCep: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchGetCep.pending, state => {
      state.loading = true;
      state.error = null;
      state.data = initialState.data;
    });
    builder.addCase(fetchGetCep.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchGetCep.rejected, (state, { payload }) => {
      state.error = 'CEP não encontrado';
      state.loading = false;
    });
  },
});

const isCepLoading = (state: RootState) => state.cep.loading;
const getCepData = (state: RootState) => state.cep.data;
export { isCepLoading, getCepData };

export const { resetCep } = cepSlicer.actions;
export default cepSlicer.reducer;
