import { AxiosError } from 'axios';

import viaCepApi from '@app/services/api/via-cep.api';
import { axiosErrorFormat } from '@app/util';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGetCep = createAsyncThunk(
  'cep/fetchGetCep',
  async (cep: string, { rejectWithValue }) => {
    try {
      const { data } = await viaCepApi.getCep(cep);
      return data;
    } catch (error) {
      return rejectWithValue(axiosErrorFormat(error as AxiosError));
    }
  },
);
