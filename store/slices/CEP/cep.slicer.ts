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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGetCep.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchGetCep.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchGetCep.rejected, (state, { payload }) => {
      state.error = payload as string;
      state.loading = false;
    });
  },
});

const isCepLoading = (state: RootState) => state.cep.loading;
export { isCepLoading };

// export const {} = cepSlicer.actions;
export default cepSlicer.reducer;
