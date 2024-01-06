import React from "react";
import { IoPersonSharp, IoDocumentText } from "react-icons/io5";
import { GrCodeSandbox } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	const SideBarIcon = ({ icon, tip, epoint }) => {
		return (
			<NavLink
				to={epoint}
				className="group relative flex items-center justify-center h-16 w-16 mt-3 mb-3 mx-auto bg-white text-black rounded-3xl ease-linear transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-[#FCA311] hover:border-white hover:text-white hover:shadow-[4px_4px_0px_white]">
				{icon}
				<span className="absolute w-auto p-2 m-2 min-w-max left-16 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100 capitalize">
					{tip}
				</span>
			</NavLink>
		);
	};

	return (
		<aside className="w-30 m-0 flex-col bg-[#14213D] text-white rounded-xl px-3 py-3 shadow-[#14213D] shadow-lg sidebar-hight sticky top-3">
			<SideBarIcon icon={<IoPersonSharp size="30" />} tip="about" epoint="/" />
			<SideBarIcon
				icon={<IoDocumentText size="30" />}
				tip="resume"
				epoint="/resume"
			/>
			<SideBarIcon
				icon={<GrCodeSandbox size="30" />}
				tip="portfolio"
				epoint="/portfolio"
			/>
			<SideBarIcon
				icon={<MdContactPhone size="30" />}
				tip="contact"
				epoint="/contact"
			/>
		</aside>
	);
};

export default SideBar;
