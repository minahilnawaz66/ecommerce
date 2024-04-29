import { updateModal } from "../../core/Slices/authSlice";
import { useAppSelector, useAppDispatch } from "../../core/hooks";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const isLoginIn = useAppSelector((state) => state.authReducer.isLoginIn);

  const requireAuth = (action: () => void) => {
    if (!isLoginIn) {
      dispatch(updateModal(true));
    } else {
      action();
    }
  };

  return { requireAuth };
};

export default useAuth;
