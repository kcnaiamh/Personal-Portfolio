import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { CgInfinity } from "react-icons/cg";
import { TbCloudComputing } from "react-icons/tb";
import { TbCloudNetwork } from "react-icons/tb";
import { TbDeviceImacSearch } from "react-icons/tb";
import data from "/src/about.json";

const AboutPage = () => {
	const [dbInfo, setDBInfo] = useState([]);

	useEffect(() => {
		setDBInfo(data);
	}, []);

	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-2">Who Am I?</h1>
			<div class="w-12 h-1 bg-[#FCA311] mb-5" />
			<div className="space-y-4">
				Welcome to my corner of the internet! I’m thrilled to have you here.
				<br />
				<br />


				So, who am I? I'm Naim. A Computer Science & Engineering undergraduate
				student at SUST.
				<br />
				<br />


				You have seen Matrix movie, right? In that movie, Neo could control the
				simulation as his will. Similarly, the control over tech drives me. I
				want to know everything in every layer so well that I can control and
				manipulate any digital system.
				<br />
				<br />


				Some people call it hacking, some call it magic. For me, its just
				understanding the underline logic. Its the technical debt of the
				developers that give us the power of doing magic.
				<br />
				<br />


				I’m always excited to connect with like-minded individuals and engage in
				meaningful conversations. Feel free to reach me out.
				<br />
				<br />

				Thank you for visiting my website, and I look forward to embarking on
				this digital journey with you. Together, let’s explore, learn, and
				create!
			</div>

			<h1 className="capitalize font-bold text-2xl mb-2 mt-5">
				What I'm Doing
			</h1>
			<div class="w-12 h-1 bg-[#FCA311] mb-5" />
			<div className="flex-col">
				<div className="flex flex-wrap justify-center">
					{dbInfo.map((item, index) => (
						<BuildCard name={item["name"]} desc={item["description"]} />
					))}
				</div>
			</div>
		</Layout>
	);
};

const BuildCard = ({ name, desc }) => {
	return (
		<div className="group w-2/5 border-4 m-4 p-5 border-slate-200 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-[#FCA311] hover:border-white hover:shadow-[4px_4px_0px_white]">
			{name === "Computer Networking" && (
				<TbCloudNetwork
					size="30"
					className="mx-auto text-[#FCA311] size-20 group-hover:text-white"
				/>
			)}
			{name === "Cloud Computing" && (
				<TbCloudComputing
					size="30"
					className="mx-auto text-[#FCA311] size-20 group-hover:text-white"
				/>
			)}
			{name === "Digital Forensics" && (
				<TbDeviceImacSearch
					size="30"
					className="mx-auto text-[#FCA311] size-20 group-hover:text-white"
				/>
			)}
			{name === "DevOps" && (
				<CgInfinity
					size="30"
					className="mx-auto text-[#FCA311] size-20 group-hover:text-white"
				/>
			)}

			<h1 className="font-extrabold text-2xl py-3 group-hover:text-black">
				{name}
			</h1>
			<div className="text-[#E5E5E5] group-hover:text-slate-900">{desc}</div>
		</div>
	);
};

export default AboutPage;
