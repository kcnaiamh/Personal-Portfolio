import React from "react";
import Layout from "../layout/Layout";
import { CgInfinity } from "react-icons/cg";
import { TbCloudComputing } from "react-icons/tb";
import { TbCloudNetwork } from "react-icons/tb";
import { TbDeviceImacSearch } from "react-icons/tb";

const AboutPage = () => {
	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-5">Who Am I?</h1>
			<div className="space-y-4">
				<p>
					Welcome to my corner of the internet! I’m thrilled to have you here.
				</p>
				<p>
					So, who am I? I'm Naim. A Computer Science & Engineering undergraduate
					student at SUST.
				</p>
				<p>
					You have seen Matrix movie, right? In that movie, Neo could control
					the simulation as his will. Similarly, the control over tech drives
					me. I want to know everything in every layer so well that I can
					control and manipulate any digital system.
				</p>
				<p>
					Some people call it hacking, some call it magic. For me, its just
					understanding the underline logic. Its the technical debt of the
					developers that give us the power of doing magic.
				</p>
				<p>
					I’m always excited to connect with like-minded individuals and engage
					in meaningful conversations. Feel free to reach me out.
				</p>
				<p>
					Thank you for visiting my website, and I look forward to embarking on
					this digital journey with you. Together, let’s explore, learn, and
					create!
				</p>
			</div>

			<h1 className="capitalize font-bold text-2xl mb-5 mt-5">
				What I'm Doing
			</h1>
			<div className="flex-col">
				<div className="flex">
					<div className="flex-1 p-3 border-2 m-2 border-slate-200">
						<TbCloudNetwork size="30" className="mx-auto" />
						<center>Computer Networking</center>
						<center>
							Networking is the blood of digital system. If something goes wrong
							with our body doctors can generally detect it by testing blood.
							Similarly, if something goes wrong in a digital system, inspecting
							network packet often gives you answer. This is of the the most
							fundamental thing that I'm trying to mastery.
						</center>
					</div>

					<div className="flex-1 p-3 border-2 m-2 border-slate-200">
						<TbCloudComputing size="30" className="mx-auto" />
						<center>Cloud Computing</center>
						<center>
							Cloud is a huge thing. It is really facinating to think about how
							the internal infrastructure works under-the-hood. I'm continuouly
							learning about it.
						</center>
					</div>
				</div>
				<div className="flex">
					<div className="flex-1 p-3 border-2 m-2 border-slate-200">
						<TbDeviceImacSearch size="30" className="mx-auto" />
						<center>Digital Forensics</center>
						<center>
							I can talk about this all day. Most of my cybersecurity expertise
							is regarding on this. Understanding how computer operates on each
							layer from the hardware to user-level software is essential to be
							good at DF. This knowledge gave me totally different view on
							computers than most of the people I know.
						</center>
					</div>
					<div className="flex-1 p-3 border-2 m-2 border-slate-200">
						<CgInfinity size="30" className="mx-auto" />
						<center>DevOps</center>
						<center>
							I'm currently focusing on DevSecOps role. Learning Docker and
							Kubernetes in-depth. I believe, my transferable skill and unique
							background would make me a super SRE and a great asset.
						</center>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
