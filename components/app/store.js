import { configureStore } from '@reduxjs/toolkit';
import clockReducer from "./stores/clockStore";

export default configureStore({
    reducer: {
        clock:  clockReducer
    }
})