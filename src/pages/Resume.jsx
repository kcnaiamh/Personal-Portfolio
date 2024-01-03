import React from "react";
import Layout from "../layout/Layout";

const ResumePage = () => {
	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-5 ">Resume</h1>
			<div className="flex-col items-center justify-center mb-20">
				<section className="w-[800px]">
					<div className="sticky -top-3 py-3 z-10">
						<h1 className="group-date">Experience</h1>
					</div>

					<div className="timeline">
						<div className="relative">
							<div className="dot" title="current event">
								<div className="dot absolute -top-1 -left-1 animate-ping"></div>
							</div>
							<div className="pl-10">
								<h3 className="timeline-title">
									Lion Parcel as Site Reliability Engineer (SRE)
								</h3>
								<span className="timeline-date">13 November 2021</span>
								{/* prettier-ignore */}
								<div className="text-gray-200">
									- Support the developers about their problems and needs <br />
									- Develop and maintain automated CI/CD pipeline for code deployment using Jenkins to serve deployment every time <br />
									- Develop and maintain deployment mobile apps using Bitrise and Fastlane for Android and iOS <br />
									- Provisioned infrastructure, servers and service as code using Terraform <br />
									- Setup and maintain monitoring, tracing and logging tools like ELK, Grafana and Datadog <br />
									- Create monitoring alert for service, database and log based metric. Reducing error to production <br />
									- Manage and monitoring orchestrated docker container cluster using Kubernetes with 99.8% uptime <br />
									- Actively manage, improve, and monitor cloud infrastructure services on AWS and GCP including backups, patches, and scaling <br />
									- Managed GitHub repositories and permissions, including branching and tagging <br />
									- Develop and maintain scripts to automate tasks <br />
									- Inject automation testing on CICD Pipeline <br />
									- Increase the number of Jenkins executors by scaling Jenkins agents in Kubernetes <br />
									- Speeding up Go and Nodejs CICD using cache mechanism on Jenkins <br />
									- Involved in implementing single dashboard monitoring using Prometheus, Thanos and Grafana <br />
									- Successful and involved cloud migration from GCP to AWS with minimal downtime <br />
									Jakarta, Indonesia
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default ResumePage;
