import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSlice } from "../../components/pages/AuthSlice";
interface LoginProps {
  username: string;
  password: string;
}

const initialState: AuthSlice = {
  isLoginIn:
    localStorage.getItem("username") !== "",
  modalOpen: false,
  username: localStorage.getItem("username") ?? "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateModal: (state, action: PayloadAction<boolean>) => {
      return { ...state, modalOpen: action.payload };
    },
    Login: (state, action: PayloadAction<LoginProps>) => {
      if (
        action.payload.username === "minahil" &&
        action.payload.password === "Password@123"
      ) {
        localStorage.setItem("username", "minahil");
        return {
          ...state,
          username: "minahil",
          modalOpen: false,
          isLoginIn: true,
        };
      } else {
        return state;
      }
    },
    Logout: (state) => {
      localStorage.removeItem("username");
      return { ...state, username: "", isLoginIn: false };
    },
  },
});

export const { updateModal, Login, Logout } = authSlice.actions;
export default authSlice.reducer;
