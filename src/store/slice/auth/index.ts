import { createSlice } from '@reduxjs/toolkit'
import { IStateAuth } from "../../../common/types/auth";

const initialState: IStateAuth = {
  user: {
    id: null,
    firstName: "",
    username: "",
    createdAt: "",
    updatedAt: "",
    watchlist: [{
      id: null,
      name: '',
      assetId: "",
      createdAt: "",
      updatedAt: "",
      user: null,
    }]
  },
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions
export default authSlice.reducer
