import React from "react";

const PortfolioCards = ({ info, handleOpenModal }) => {
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
								<div className="absolute bottom-0 left-0 right-0 px-2 bg-black bg-opacity-75 overflow-hidden w-full  transition-all duration-500 ease-in-out h-0 group-hover:h-1/2">
									<p>{item["description"]}</p>
								</div>
							</div>
							<p className="text-white pt-4">{item["name"]}</p>
						</div>
					);
				})}
		</div>
	);
};

export default PortfolioCards;
