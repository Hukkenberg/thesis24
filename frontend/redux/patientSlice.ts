import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
  const response = await axios.get('/api/patients');
  return response.data;
});

const patientSlice = createSlice({
  name: 'patients',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default patientSlice.reducer;
