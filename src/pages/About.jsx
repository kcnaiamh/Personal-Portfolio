import React from "react";
import Layout from "../layout/Layout";
import { CgInfinity } from "react-icons/cg";
import { TbCloudComputing } from "react-icons/tb";
import { TbCloudNetwork } from "react-icons/tb";
import { IoCodeSlash } from "react-icons/io5";

const AboutPage = () => {
	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-5">Who Am I?</h1>
			<div className="space-y-4">
				<p>
					Welcome to my corner of the internet! I’m Naim, and I’m thrilled to
					have you here.
				</p>

				<p>
					A passionate SRE, DevOps and Cloud Engineer 🚀. Graduate of the
					Faculty of Computer Science, Brawijaya University 🎓.
				</p>

				<p>
					Have experiences on microservice architecture, cloud computing
					provider (AWS, GCP), Infrastructure as Code (IaC), CICD using Jenkins
					and Bitrise for mobile apps, monitoring service and infrastructure.
					Also have basic knowledge about computer networking, building web apps
					with JavaScript / VueJs / Nodejs / PHP frameworks (Laravel) and some
					other cool libraries and frameworks.
				</p>

				<p>
					I have completed and been certified by Google Cloud for Associate
					Cloud Engineer and AWS for AWS Certified Cloud Practitioner.
				</p>

				<p>
					I enjoy meeting new people and seeing new perspectives. I like
					discussing technology or football or other things. Of course there is
					a lot to learn, a lot of problems to solve and a lot more to build on.
					So far and for what I got, I'm very grateful.
				</p>
			</div>

			<h1 className="capitalize font-bold text-2xl mb-5 mt-5">
				What I'm Doing
			</h1>
			<div className="flex-col">
				<div className="flex">
					<div className="max-w-sm p-3 border-2 m-2 border-slate-200">
						<CgInfinity size="30" className="mx-auto" />
						<center>DevOps & SRE</center>
						<center>
							I enjoy learning software development, managing cloud
							infrastructure and deployment as DevOps and SRE
						</center>
					</div>
					<div className="max-w-sm p-3 border-2 m-2 border-slate-200">
						<TbCloudComputing size="30" className="mx-auto" />
						<center>Cloud Computing</center>
						<center>
							I build many things using cloud computing including IoT,
							applications and websites
						</center>
					</div>
				</div>
				<div className="flex">
					<div className="max-w-sm p-3 border-2 m-2 border-slate-200">
						<TbCloudNetwork size="30" className="mx-auto" />
						<center>Computer Networking</center>
						<center>
							I love to make everything connected to communicate with each
							other, such as computing devices and now the IoT
						</center>
					</div>
					<div className="max-w-sm p-3 border-2 m-2 border-slate-200">
						<IoCodeSlash size="30" className="mx-auto" />
						<center>Web Development</center>
						<center>
							I enjoy developing and managing websites either for personal or
							specific purposes
						</center>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
