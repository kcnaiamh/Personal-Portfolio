import React from "react";
import Layout from "../layout/Layout";

const ResumePage = () => {
	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-2 ">Resume</h1>
			<div class="w-12 h-1 bg-[#FCA311] mb-5" />
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
									Assistant Cybersecurity Instructor @{" "}
									<span className="bg-white text-[#14213d] px-1">Ostad</span>
								</h3>
								<span className="timeline-date">Aug 2023 - Present</span>
								<div className="text-gray-200">
									I explain complex cybersecurity concepts simply so that
									students from different background can understand it. The
									quizzes, assignments, and live tests I develop ensure the
									students' practical and theoretical understanding.
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="dot" title="current event">
								<div className="dot absolute -top-1 -left-1"></div>
							</div>
							<div className="pl-10">
								<h3 className="timeline-title">
									Founder & Security Researcher @{" "}
									<span className="bg-white text-[#14213d] px-1">ReSINC</span>
								</h3>
								<span className="timeline-date">Sep 2022 - Present</span>
								<div className="text-gray-200">
									Building a culture of cybersecurity around the campus through
									CTFs, Bug Bounty programs, Research, and Red/Blue team
									exercises with some amazing juniors and seniors. Guiding them
									with the resource and experience what we need when we were in
									their shoes.
									<br />
									As a pioneer member of this group, it's my dream to see
									students from our university, SUST, become future leaders in
									the exciting field of cyberspace.
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="dot" title="current event">
								<div className="dot absolute -top-1 -left-1"></div>
							</div>
							<div className="pl-10">
								<h3 className="timeline-title">
									Content Engineering @{" "}
									<span className="bg-white text-[#14213d] px-1">
										PORIDHI.IO
									</span>
								</h3>
								<span className="timeline-date">Jul 2022 - Sep 2022</span>
								<div className="text-gray-200">
									I've created 12 video lessons and zine scripts that covered
									key topics including Wireshark usage, network protocol
									understanding via packet analysis, troubleshooting with
									Wireshark and Dumpcap, exploring Nmap commands using
									Wireshark, capturing HTTP passwords, and unraveling SSL/TLS
									security through packet analysis. Additionally, I authored
									zine scripts on DNS and Linux Cron Jobs.
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-[800px]">
					<div className="sticky -top-3 py-3 z-10">
						<h1 className="group-date">Education</h1>
					</div>

					<div className="timeline">
						<div className="relative">
							<div className="dot" title="current event">
								<div className="dot absolute -top-1 -left-1 animate-ping"></div>
							</div>
							<div className="pl-10">
								<h3 className="timeline-title">
									Shahjalal University of Science and Technology
								</h3>
								<span className="timeline-date">Jan 2019 - Jan 2024</span>
								<div className="text-gray-200">
									Computer Science & Engineering <br />
									Sylhet, Bangladesh
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="dot" title="current event">
								<div className="dot absolute -top-1 -left-1"></div>
							</div>
							<div className="pl-10">
								<h3 className="timeline-title">Hazera-Taju Degree College</h3>
								<span className="timeline-date">Jul 2016 - Jul 2018</span>
								<div className="text-gray-200">
									Majored in Science <br />
									Chittagong, Bangladesh
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="dot" title="current event">
								<div className="dot absolute -top-1 -left-1"></div>
							</div>
							<div className="pl-10">
								<h3 className="timeline-title">Taekwondo</h3>
								<span className="timeline-date">May 2016 - Oct 2016</span>
								<div className="text-gray-200">
									7th Kup - CJKS Gymnasium <br />
									Chittagong, Bangladesh
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="dot" title="current event">
								<div className="dot absolute -top-1 -left-1"></div>
							</div>
							<div className="pl-10">
								<h3 className="timeline-title">Nasirabad Govt. High School</h3>
								<span className="timeline-date">Jan 2011 - May 2016</span>
								<div className="text-gray-200">
									JSC, SSC (Science) <br />
									Chittagong, Bangladesh
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
