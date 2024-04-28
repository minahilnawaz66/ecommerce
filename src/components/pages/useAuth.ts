import { updateModal } from "../../core/Slices/authSlice";
import { useAppSelector, useAppDispatch } from "../../core/hooks";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);

  const requireAuth = (action: () => void) => {
    if (!isLoggedIn) {
      dispatch(updateModal(true));
    } else {
      action();
    }
  };

  return { requireAuth };
};

export default useAuth;
