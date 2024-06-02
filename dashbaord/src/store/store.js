import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotResetPassReducer from "./slices/forgotResetPasswordSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        forgotPassword: forgotResetPassReducer
    },
});
