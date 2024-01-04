import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import getCerts from "../APIRequest/APIRequest";
import PortfolioCards from "../components/PortfolioCards";

const PortfolioPage = () => {
	const [dbInfo, setDBInfo] = useState([]);

	const [cardIndex, setCardIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [activeBtn, setActiveBtn] = useState("certBtn");
	const [curCat, setCurCat] = useState("certs");
	const modalRef = useRef();

	useEffect(() => {
		(async () => {
			let res = await getCerts();
			setDBInfo(res);
		})();
	}, []);

	const handleOpenModal = (index) => {
		setCardIndex(index);
		setShowModal(true);
	};

	return (
		<Layout>
			{showModal && (
				<div
					ref={modalRef}
					onClick={(e) => {
						modalRef.current === e.target && setShowModal(false);
					}}
					className="fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center">
					<div className="max-w-md">
						<img src={dbInfo[curCat][cardIndex].image_path} alt="" />
						<div>
							<p>{dbInfo[curCat][cardIndex].name}</p>
							<p>{dbInfo[curCat][cardIndex].description}</p>
						</div>
					</div>
				</div>
			)}

			<div>
				<nav className="space-x-4">
					<button
						onClick={() => {
							setActiveBtn("certBtn");
							setCurCat("certs");
						}}>
						Certifications
					</button>
					<button
						onClick={() => {
							setActiveBtn("projectBtn");
							setCurCat("projects");
						}}>
						Projects
					</button>
					<button
						onClick={() => {
							setActiveBtn("badgeBtn");
							setCurCat("badges");
						}}>
						Badges
					</button>
				</nav>

				{activeBtn === "certBtn" && (
					<PortfolioCards
						info={dbInfo[curCat]}
						handleOpenModal={handleOpenModal}
					/>
				)}

				{activeBtn === "projectBtn" && (
					<PortfolioCards
						info={dbInfo[curCat]}
						handleOpenModal={handleOpenModal}
					/>
				)}

				{activeBtn === "badgeBtn" && (
					<PortfolioCards
						info={dbInfo[curCat]}
						handleOpenModal={handleOpenModal}
					/>
				)}
			</div>
		</Layout>
	);
};

export default PortfolioPage;
