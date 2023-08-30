import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from '../store/Food'
import GlobalReducer from '../store/global'
export default configureStore({
    reducer: {
        foods : FoodReducer,
        global : GlobalReducer,
    }
  })