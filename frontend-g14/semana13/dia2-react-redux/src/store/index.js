import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice.js'

// REDUX
// 1 - Configurar store, donde se guardara los estados globales
// 2 - Usar un Provider que envuelva aplicacion, para poder leer store globalmente
// 3 - Importar slice y colocar declarar dentro de reducer, para usarse

export const store = configureStore({

    reducer: {
        cart: cartReducer
    },

})