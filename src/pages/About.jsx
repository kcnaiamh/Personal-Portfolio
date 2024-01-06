import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { CgInfinity } from "react-icons/cg";
import { TbCloudComputing } from "react-icons/tb";
import { TbCloudNetwork } from "react-icons/tb";
import { TbDeviceImacSearch } from "react-icons/tb";
import { getAboutMeInfo } from "../APIRequest/APIRequest";

const AboutPage = () => {
	const [dbInfo, setDBInfo] = useState([]);

	useEffect(() => {
		(async () => {
			let res = await getAboutMeInfo();
			setDBInfo(res);
		})();
	}, []);

	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-2">Who Am I?</h1>
			<div class="w-12 h-1 bg-[#FCA311] mb-5" />
			<div className="space-y-4">
				Welcome to my corner of the internet! I’m thrilled to have you here.
				<br />
				So, who am I? I'm Naim. A Computer Science & Engineering undergraduate
				student at SUST.
				<br />
				You have seen Matrix movie, right? In that movie, Neo could control the
				simulation as his will. Similarly, the control over tech drives me. I
				want to know everything in every layer so well that I can control and
				manipulate any digital system.
				<br />
				Some people call it hacking, some call it magic. For me, its just
				understanding the underline logic. Its the technical debt of the
				developers that give us the power of doing magic.
				<br />
				I’m always excited to connect with like-minded individuals and engage in
				meaningful conversations. Feel free to reach me out.
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
		<div className="w-2/5 border-4 m-4 p-5 border-slate-200">
			{name === "Computer Networking" && (
				<TbCloudNetwork size="30" className="mx-auto text-[#FCA311] size-20" />
			)}
			{name === "Cloud Computing" && (
				<TbCloudComputing
					size="30"
					className="mx-auto text-[#FCA311] size-20"
				/>
			)}
			{name === "Digital Forensics" && (
				<TbDeviceImacSearch
					size="30"
					className="mx-auto text-[#FCA311] size-20"
				/>
			)}
			{name === "DevOps" && (
				<CgInfinity size="30" className="mx-auto text-[#FCA311] size-20" />
			)}

			<h1 className="font-extrabold text-2xl py-3">{name}</h1>
			<div className="text-[#E5E5E5]">{desc}</div>
		</div>
	);
};

export default AboutPage;
