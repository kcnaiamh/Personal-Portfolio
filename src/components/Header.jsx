import React, { useEffect, useState } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaUserSecret } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Header = () => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const targetDate = "January, 1, 2025"; // input should be less than a year

	const getTime = () => {
		let time = Date.parse(targetDate) - Date.now();
		time /= 1000;
		setSeconds(Math.floor(time % 60));

		time /= 60;
		setMinutes(Math.floor(time % 60));

		time /= 60;
		setHours(Math.floor(time % 24));

		time /= 24;
		setDays(Math.floor(time));
	};

	useEffect(() => {
		const interval = setInterval(() => getTime(), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<header className="mx-56 px-56 relative">
			<div className="flex absolute ml-10 -mt-14 transition-all duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px] hover:scale-105">
				<img
					src="/src/assets/me.jpeg"
					alt="Profile Photo"
					className="max-h-40 max-w-40 rounded-full ring-8 ring-[#14213D] hover:ring-[#FCA311]"
				/>
			</div>

			<div className="flex bg-[#14213D] text-[#E5E5E5] rounded-xl py-5  mb-14  shadow-[#14213D] shadow-lg">
				<div className="flex flex-1">
					<div className="mr-10 ml-60 space-y-2">
						<p className="text-white text-xl">
							<b className=" text-green-500 font-extrabold">Naimul</b> Islam
						</p>
						<p className="text-white text-sm">DevSecOps | SRE | Infosec</p>
						<div className="flex space-x-2">
							<a href="https://www.linkedin.com/in/kcnaiamh/">
								<IoLogoLinkedin size="15" className="hover:text-[#FCA311]" />
							</a>
							<a href="https://github.com/kcnaiamh">
								<FaGithub size="15" className="hover:text-[#FCA311]" />
							</a>
							<a href="https://www.youtube.com/@kcnaiamh">
								<IoLogoYoutube size="15" className="hover:text-[#FCA311]" />
							</a>
							<a href="https://hushup.app/naim19">
								<FaUserSecret size="13" className="hover:text-[#FCA311]" />
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-1">
					<div className="mx-10 space-y-4">
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								Email
							</p>
							<a
								href="mailto:naimul9m@gmail.com"
								className="text-white text-sm hover:text-[#FCA311]">
								naimul9m@gmail.com
							</a>
						</div>
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								Location
							</p>
							<p className="text-white text-sm">Higgs Field</p>
						</div>
					</div>

					<div className="mx-10 space-y-4">
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								Remaining Year
							</p>
							<div>
								{days < 10 ? "0" + days : days}:
								{hours < 10 ? "0" + hours : hours}:
								{minutes < 10 ? "0" + minutes : minutes}:
								{seconds < 10 ? "0" + seconds : seconds}
							</div>
						</div>
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								Status
							</p>
							<p className="text-white text-sm">
								Learning
								{seconds % 4 == 1
									? "..."
									: seconds % 4 == 2
									? ".."
									: seconds % 4 == 3
									? "."
									: ""}
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
