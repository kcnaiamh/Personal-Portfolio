import React from "react";

const TopProfile = () => {
	return (
		<header>
			<div className="flex bg-gray-700 text-white rounded-xl pt-5 pb-5 absolute top-20  left-1/4 right-1/4 shadow-slate-700 shadow-lg">
				<div className="flex flex-1">
					<div className="mr-10 ml-60">
						<p className="text-white text-xl">
							<b>Naimul</b> Islam
						</p>
						<p className="text-gray-400 text-sm">DevSecOps | SRE</p>
					</div>
				</div>

				<div className="flex flex-1">
					<div className="mx-10 space-y-4">
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								Email
							</p>
							<p className="text-white text-sm">naimul9m@gmail.com</p>
						</div>
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								Location
							</p>
							<p className="text-white text-sm">Higges Field</p>
						</div>
					</div>

					<div className="mx-10 space-y-4">
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								RESUME
							</p>
							<p className="text-white text-sm">Download</p>
						</div>
						<div>
							<p className="text-gray-400 text-xs text-transform: uppercase">
								Status
							</p>
							<p className="text-white text-sm">Mango</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex absolute top-5 pl-5 left-1/4 right-1/4 ">
				<img
					src="/src/assets/me.jpeg"
					alt="Profile Photo"
					className="max-h-40 max-w-40 rounded-full ring-8 ring-gray-700"
				/>
			</div>
		</header>
	);
};

export default TopProfile;
