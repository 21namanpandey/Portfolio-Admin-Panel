import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotResetPassReducer from "./slices/forgotResetPasswordSlice";
import messagesReducer from "./slices/messageSlice";
import timelineReducer from "./slices/timelineSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        forgotPassword: forgotResetPassReducer,
        messages: messagesReducer,
        timeline: timelineReducer,
    },
});
