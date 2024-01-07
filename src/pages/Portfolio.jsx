import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import PortfolioCards from "../components/PortfolioCards";
import ChipTabs, { tabs } from "../components/PortfolioTabBar";
import data from "/src/portfolio.json";

let cat = {};

const PortfolioPage = () => {
	const [dbInfo, setDBInfo] = useState([]);

	const [cardIndex, setCardIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [activeBtn, setActiveBtn] = useState(tabs[0]);
	const modalRef = useRef();

	useEffect(() => {
		setDBInfo(data);
	}, []);

	useEffect(() => {
		cat[tabs[0]] = "certs";
		cat[tabs[1]] = "projects";
		cat[tabs[2]] = "badges";
	}, []);

	const handleOpenModal = (index) => {
		setCardIndex(index);
		setShowModal(true);
	};

	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-2 ">Portfolio</h1>
			<div class="w-12 h-1 bg-[#FCA311] mb-5" />

			{showModal && (
				<div
					ref={modalRef}
					onClick={(e) => {
						modalRef.current === e.target && setShowModal(false);
					}}
					className="fixed z-20 inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center">
					<div className="max-w-md">
						<img src={dbInfo[cat[activeBtn]][cardIndex].image_path} alt="" />
						<div>
							<p>{dbInfo[cat[activeBtn]][cardIndex].name}</p>
							<p>{dbInfo[cat[activeBtn]][cardIndex].description}</p>
						</div>
					</div>
				</div>
			)}

			<div className="px-4 py-10 flex items-center flex-wrap gap-2">
				<ChipTabs selected={activeBtn} setSelected={setActiveBtn} />

				{activeBtn === tabs[0] && (
					<PortfolioCards
						info={dbInfo[cat[activeBtn]]}
						activeBtn={activeBtn}
						handleOpenModal={handleOpenModal}
					/>
				)}

				{activeBtn === tabs[1] && (
					<PortfolioCards
						info={dbInfo[cat[activeBtn]]}
						activeBtn={activeBtn}
						handleOpenModal={handleOpenModal}
					/>
				)}

				{activeBtn === tabs[2] && (
					<PortfolioCards
						info={dbInfo[cat[activeBtn]]}
						activeBtn={activeBtn}
						handleOpenModal={handleOpenModal}
					/>
				)}
			</div>
		</Layout>
	);
};

export default PortfolioPage;
