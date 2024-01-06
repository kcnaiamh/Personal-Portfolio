import React from "react";
import { IoPersonSharp, IoDocumentText } from "react-icons/io5";
import { GrCodeSandbox } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	const SideBarIcon = ({ icon, tip, epoint }) => {
		return (
			<NavLink to={epoint} className="sidebar-icon group">
				{icon}
				<span className="sidebar-tooltip group-hover:scale-100 capitalize">
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
