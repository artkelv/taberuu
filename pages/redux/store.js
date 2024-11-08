import { configureStore } from '@reduxjs/toolkit';

import estadoPrincipalSlice from './estadoPrincipal/estadoPrincipalSlice';

export const store = configureStore({
  reducer: {
    estadoPrincipal:estadoPrincipalSlice,
  },
})