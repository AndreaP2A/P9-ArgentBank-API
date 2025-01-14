import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfile } from "../services/api";

/**
 * Asynchronous thunk action to fetch user profile.
 *
 * @function
 * @param {string} token - The authentication token.
 * @returns {Promise<Object>} The user profile data.
 */
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token) => {
    const response = await getUserProfile(token);
    return response.body;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || null,
    userName: localStorage.getItem("userName") || "",
    status: "idle",
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("userName", action.payload);
    },
    clearUserName: (state) => {
      state.userName = "";
      localStorage.removeItem("userName");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userName = `${action.payload.firstName} ${action.payload.lastName}`;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setToken, clearToken, setUserName, clearUserName } =
  userSlice.actions;

export default userSlice.reducer;
