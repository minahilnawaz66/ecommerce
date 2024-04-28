import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { doLogin , updateModal } from "../../core/Slices/authSlice";

const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.authReducer.modalOpen);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(doLogin({ username, password }));
  };

  if (open) {
    return (
      <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center">
        <div
          className="relative border shadow rounded p-4 bg-white max-w-md w-full z-40">
			<div
            className="absolute cursor-pointer right-5 top-5 hover:opacity-85"
            onClick={() => dispatch(updateModal(false))}
          >
				<svg height="16" width="16" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="black" stroke-width="1.5" fill="none" fill-rule="evenodd"></path></svg>			  </div>
              <div className="flex mb-2 space-x-2 justify-center items-center">
                <h3 className="font-bold text-center text-2xl text-purple-500">Login</h3>
              </div>
              <form onSubmit={submitForm} className="flex flex-col space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Username (minahil)"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter Password (Password@123)"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                />
              </form>
      	</div>
	  </div>
    );
  }
};

export default LoginModal;
