import {BrowserRouter ,Routes, Route} from "react-router-dom";
import NavBar from "../components/pages/molecule/NavBar";
import Home from "../components/pages/Home";
import { Toaster } from "react-hot-toast";
import CartPage from "../components/pages/CartPage";
import LoginModal from "../components/pages/LoginModal";
import AllProducts from "../components/pages/AllProducts";
import NotFound from "../components/pages/NotFound";

export default function Routing() {
	return (
		<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/products" element={<AllProducts />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	 	<Toaster position="bottom-center" reverseOrder={false} />
	 	<CartPage />
		<LoginModal />
		</BrowserRouter>
	)
}