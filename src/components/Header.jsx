import React from "react";

const Header = () => {
	return (
		<header className="mx-56 px-56 relative">
			<div className="flex absolute ml-8 -mt-14 hover:scale-110 transition-all duration-300">
				<img
					src="/src/assets/me.jpeg"
					alt="Profile Photo"
					className="max-h-40 max-w-40 rounded-full ring-8 ring-gray-700"
				/>
			</div>

			<div className="flex bg-gray-700 text-white rounded-xl py-5  mb-14  shadow-slate-700 shadow-lg">
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
		</header>
	);
};

export default Header;
