import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
}

export const estadoPrincipal = createSlice({
    name: 'estadoPrincipal',
    initialState,
    reducers: {
    alteraEstado: (state, action) => {
        state.value = action.payload
    }
    }
})

export const { alteraEstado } = estadoPrincipal.actions;

export default estadoPrincipal.reducer;    