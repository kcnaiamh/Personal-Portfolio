import React from "react";

const PortfolioCards = ({ info, activeBtn, handleOpenModal }) => {
	return (
		<div className="flex flex-wrap justify-center mt-5 grid-cols-2 space-x-3 space-y-3">
			{info &&
				info.map((item, index) => {
					return (
						<div className=" w-[48%] min-h-56 bg-black flex-col shadow-lg shadow-black rounded-lg p-4 ">
							<div
								onClick={() => handleOpenModal(index)}
								className="inset-0 group relative overflow-hidden z-100 rounded-lg flex-1">
								<img
									src={item["image_path"]}
									alt=""
									className="object-cover w-full h-full transition-transform duration-300 transform scale-100 group-hover:scale-110"
								/>
								{activeBtn === "Projects" && (
									<div className="absolute bottom-0 left-0 right-0 px-2 bg-black bg-opacity-75 overflow-hidden w-full  transition-all duration-300 ease-in-out h-0 group-hover:h-auto group-hover:py-2">
										<center className="font-bold text-lg">Tech Stack</center>
										<center>{item["techstack"]}</center>
									</div>
								)}
							</div>
							<p className="text-white pt-4 mb-3 font-bold">{item["name"]}</p>
							<div className="flex space-x-1">
								{"github" in item && (
									<a
										href={item["github"]}
										className="bg-[#fca311] opacity-85 text-black font-mono text-xs py-1 px-3 rounded">
										Github
									</a>
								)}
								{"video" in item && (
									<a
										href={item["video"]}
										className="bg-[#fca311] opacity-85 text-black font-mono text-xs py-1 px-3 rounded">
										Video
									</a>
								)}
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default PortfolioCards;
