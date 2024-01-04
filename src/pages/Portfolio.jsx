import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import getCerts from "../APIRequest/APIRequest";

const PortfolioPage = () => {
	const [certs, setCerts] = useState([]);

	const [cardIndex, setCardIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);

	const modalRef = useRef();

	useEffect(() => {
		(async () => {
			let res = await getCerts();
			setCerts(res);
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
						<img src={certs[cardIndex].image_path} alt="" />
						<div>
							<p>{certs[cardIndex].name}</p>
							<p>{certs[cardIndex].description}</p>
						</div>
					</div>
				</div>
			)}

			<div className="flex grid-rows-3">
				{certs &&
					certs.map((item, index) => {
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
		</Layout>
	);
};

export default PortfolioPage;
