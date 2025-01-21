import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

/**
 * Configures the Redux store with the user reducer.
 *
 * @type {store}
 */
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
