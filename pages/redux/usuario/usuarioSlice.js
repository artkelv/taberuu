import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
}

export const usuario = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        usuarioLogado: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { usuarioLogado } = usuario.actions;

export default usuario.reducer;    