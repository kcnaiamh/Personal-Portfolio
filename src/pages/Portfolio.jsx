import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import getCerts from "../APIRequest/APIRequest";
import { RxCross2 } from "react-icons/rx";

const PortfolioPage = () => {
	const [certs, setCerts] = useState([]);

	const [imageSerial, setImageSerial] = useState(0);
	const [openModal, setShowModal] = useState(false);

	const modalRef = useRef();

	useEffect(() => {
		(async () => {
			let res = await getCerts();
			setCerts(res);
		})();
	}, []);

	const handleOpenModal = (index) => {
		setImageSerial(index);
		setShowModal(true);
	};

	return (
		<Layout>
			{openModal && (
				<div
					ref={modalRef}
					onClick={(e) => {
						modalRef.current === e.target && setShowModal(false);
					}}
					className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
					<div className="max-w-md">
						{/* <button
							onClick={() => setShowModal(false)}
							className="place-self-end align-start">
							<RxCross2 />
						</button> */}
						<img src={certs[imageSerial].image_path} alt="" />
					</div>
				</div>
			)}

			<div className="flex grid-rows-3">
				{certs &&
					certs.map((item, index) => {
						return (
							<figure
								className="flex-1 m-3 hover:scale-105 duration-200"
								onClick={() => handleOpenModal(index)}>
								<img src={item["image_path"]} alt="" />
							</figure>
						);
					})}
			</div>
		</Layout>
	);
};

export default PortfolioPage;
