import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavoritos: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((f) => f.id === favoritos.id)) {
        state.itens = state.itens.filter((f) => f.id !== favoritos.id)
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { addFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
