import { Link } from "react-router-dom";
import { useAppDispatch , useAppSelector} from "../../../core/hooks";
import {  useState } from "react";
import { setCartState } from "../../../core/Slices/cartSlice";
import { updateModal , Logout } from "../../../core/Slices/authSlice";
import useAuth from "../useAuth";

export default function NavBar() {
	const dispatch = useAppDispatch();
	const [visible, setVisible] = useState(false);
	const cartCount = useAppSelector(
	  (state) => state.cartReducer.cartItems.length
	);
	const username = useAppSelector((state) => state.authReducer.username);
	const { requireAuth } = useAuth();

	const showCart = () => {
	  requireAuth(() => dispatch(setCartState(true)));
	};
	const handleLogout = () => {
		dispatch(Logout());
		hidePopup();
	};

	const hidePopup = () => {
		setVisible(false);
	};

	return <nav className="bg-white border-gray-200 dark:bg-gray-900">
	<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
	  <Link className="flex items-center space-x-3" to="/home">
		<img src="https://storage.googleapis.com/s.mkswft.com/RmlsZTozYTVlNmQwZi00OWUzLTRlY2YtOTVhZC0zZTVmNTAwMDJkNmY=/BigCommerce-logomark-whitebg.svg" className="h-8" alt="Ecommerce Logo" />
		<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
	  </Link>
	  <div className="hidden w-full md:block md:w-auto" id="navbar-default">
		<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
		  <li>
			<Link className="block py-2 px-3 bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500" to="/home">Home</Link>
		  </li>
		  <li>
		  	<Link className="block py-2 px-3 bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500" to="/products">Products</Link>
		  </li>
		  <li>
		  	<Link className="block py-2 px-3 bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500" to="/checkout"><span onClick={showCart}>Checkout</span></Link>
		  </li>
		<span className="relative block py-2 px-3 bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-white md:dark:text-black-500">
				<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M8.02849 21.004H15.9475C18.9683 21.004 21.5551 19.5582 20.8968 15.004L19.907 9.004C19.5012 6.73155 18.1637 6.004 16.9373 6.004H7.03862C5.79423 6.004 4.5379 6.79702 4.069 9.004L3.07913 15.004C2.52005 19.0439 5.0077 21.004 8.02849 21.004Z" stroke="#2D2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M16.0001 7.004V6.004C16.0001 3.8603 14.2038 2.004 12.0001 2.004C9.79541 1.99474 8.00964 3.8603 8.00012 6.004V7.004" stroke="#2D2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M9 11.004H10" stroke="#2D2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
					<path d="M14 11.004H15" stroke="#2D2B2A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			<div className="absolute top-[-10px] right-[-10px] bg-purple-500 w-[20px] h-[20px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
			</div>
		</span>
		</ul>
		<div className="flex items-center">
			{username !== "" ? (
				<div>Welcome Minahil :)</div>
			) : (
			<div></div>
			)}
			<div className="text-gray-500 text-2xl">
				{username !== "" ? (
				<div>
					<div
						className="hover:underline cursor-pointer text-lg pl-2"
						onClick={handleLogout}
						data-test="logout-btn"
					>
					Logout
					</div>
				</div>
			) : (
			<span
				className="hover:underline cursor-pointer text-lg"
				onClick={() => dispatch(updateModal(true))}
			>
				Login
			</span>
			)}
			</div>
            </div>
	  </div>
	</div>
  </nav>
}