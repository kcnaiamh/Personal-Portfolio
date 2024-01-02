import React from "react";
import SideBar from "../components/SideBar";
import TopProfile from "../components/TopProfile";

const Layout = (props) => {
	return (
		<div className="flex-col">
			<TopProfile />
			<div className="flex absolute top-1/2 -translate-y-1/2 left-1/4 space-x-11 max-h-96">
				<SideBar />
				<div className="max-w-screen-md bg-orange-500">{props.children}</div>
			</div>
		</div>
	);
};

export default Layout;
