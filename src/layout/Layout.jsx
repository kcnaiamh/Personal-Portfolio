import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
	return (
		<div className="flex-col pt-20  -z-10 inset-0 bg-black">
			<Header />
			<div className="flex space-x-11 mx-56 px-56">
				<SideBar />
				<div className=" bg-slate-900  text-white rounded-lg shadow-lg shadow-slate-700 w-full px-6 py-6 pb-24">
					{props.children}
				</div>
			</div>
			<Toaster position="bottom-right" reverseOrder={false} />
		</div>
	);
};

export default Layout;
