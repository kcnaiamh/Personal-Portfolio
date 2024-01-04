import React from "react";

const PortfolioCards = ({ info, handleOpenModal }) => {
	return (
		<div className="flex grid-rows-3">
			{info &&
				info.map((item, index) => {
					return (
						<figure
							className="group flex-1 m-3 relative hover:scale-105 duration-200"
							onClick={() => handleOpenModal(index)}>
							<img src={item["image_path"]} alt="" />
							<div className=" absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 overflow-hidden w-full  transition-all duration-500 ease-in-out h-0 group-hover:h-1/2">
								<p>{item["name"]}</p>
								<p>{item["description"]}</p>
							</div>
						</figure>
					);
				})}
		</div>
	);
};

export default PortfolioCards;
