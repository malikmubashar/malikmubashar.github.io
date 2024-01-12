import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        current: "light"
    },
    header: {
        mobileToggle: false
    },
    currentRotate: 0,
};

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTheme: function (state, { payload }) {
            state.theme.current = payload;
        },
        toggleMobileMenu: function (state) {
            state.header.mobileToggle = !state.header.mobileToggle;
        },
        setCurrentRotate: function (state, { payload }) {
            state.currentRotate = payload;
        }
    }
});
export const {
    setTheme,
    toggleMobileMenu,
    setCurrentRotate
} = app.actions;
export const reducers = app.reducer;