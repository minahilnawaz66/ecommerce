import { Link } from "react-router-dom";


export default function Home() {
	return (
		<>
			<div className="relative">
				<img className="absolute w-full object-cover object-bottom" src="https://www.kadewe.de/on/demandware.static/-/Library-Sites-StoreLibrary/default/dw7dddf130/images/Advertorials/01-desktop.jpg" alt="Banner" />
				<div className="absolute top-60 z-10">
					<h1 className="px-5 mx-5 text-4xl font-bold">Super value deals</h1>
					<h2 className="px-5 mx-5 text-purple-500 text-4xl font-bold">On all products</h2>
					<Link to="/products"><button className="mt-5 bg-purple-500 mx-10 text-white p-3 rounded">Shop Now</button></Link>
				</div>
			</div>
		</>

	)
}