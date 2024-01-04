import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import getCerts from "../APIRequest/APIRequest";
import PortfolioCards from "../components/PortfolioCards";

const PortfolioPage = () => {
	const [dbInfo, setDBInfo] = useState([]);

	const [cardIndex, setCardIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [activeBtn, setActiveBtn] = useState("certBtn");

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
						<img src={dbInfo["certs"][cardIndex].image_path} alt="" />
						<div>
							<p>{dbInfo["certs"][cardIndex].name}</p>
							<p>{dbInfo["certs"][cardIndex].description}</p>
						</div>
					</div>
				</div>
			)}

			<div>
				<nav className="space-x-4">
					{/* prettier-ignore */}
					<button onClick={() => setActiveBtn("certBtn")}>Certifications</button>
					<button onClick={() => setActiveBtn("projectBtn")}>Projects</button>
					<button onClick={() => setActiveBtn("badgeBtn")}>Badges</button>
				</nav>

				{activeBtn === "certBtn" && (
					<PortfolioCards
						info={dbInfo["certs"]}
						handleOpenModal={handleOpenModal}
					/>
				)}

				{activeBtn === "projectBtn" && (
					<PortfolioCards
						info={dbInfo["projects"]}
						handleOpenModal={handleOpenModal}
					/>
				)}

				{activeBtn === "badgeBtn" && (
					<PortfolioCards
						info={dbInfo["badges"]}
						handleOpenModal={handleOpenModal}
					/>
				)}
			</div>
		</Layout>
	);
};

export default PortfolioPage;
