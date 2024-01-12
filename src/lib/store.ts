import { configureStore } from "@reduxjs/toolkit";
import {reducers} from "@/lib/reducers";

const store = configureStore({
    reducer: reducers
});

export default store;