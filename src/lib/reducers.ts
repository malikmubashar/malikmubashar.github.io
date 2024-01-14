import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        current: "dark"
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
        toggleMobileMenu: function (state, actions) {
            state.header.mobileToggle = actions.payload == "auto" ? !state.header.mobileToggle : actions.payload;
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