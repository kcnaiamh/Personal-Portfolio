import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
	return (
		<div className="flex-col mt-20">
			<Header />
			<div className="flex space-x-11 mx-56 px-56">
				<SideBar />
				<div className=" bg-black text-white rounded-lg shadow-lg shadow-slate-700 w-full px-6 py-6 mb-12">
					{props.children}
				</div>
			</div>
			<Toaster position="bottom-right" reverseOrder={false} />
		</div>
	);
};

export default Layout;
