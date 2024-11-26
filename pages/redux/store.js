import { configureStore } from '@reduxjs/toolkit';

import estadoPrincipalSlice from './estadoPrincipal/estadoPrincipalSlice';
import usuarioSlice from './usuario/usuarioSlice';

export const store = configureStore({
  reducer: {
    usuarioSlice:usuarioSlice,
    estadoPrincipal:estadoPrincipalSlice,
  },
})