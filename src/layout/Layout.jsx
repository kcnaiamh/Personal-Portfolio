import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
	return (
		<div className="bg-black relative min-h-screen">
			<div className="flex-col pt-20 bg-black absolute max-w-screen">
				<Header />
				<div className="flex space-x-11 mx-56 px-56">
					<SideBar />
					<div className=" text-white bg-[#14213d] rounded-lg shadow-lg shadow-[#14213D] w-full px-6 py-6 mb-24">
						{props.children}
					</div>
				</div>
				<Toaster position="bottom-right" reverseOrder={false} />
			</div>
		</div>
	);
};

export default Layout;
