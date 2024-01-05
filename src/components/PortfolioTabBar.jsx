import { motion } from "framer-motion";
import { useState } from "react";

export const tabs = ["Certifications", "Projects", "Badges"];

const ChipTabs = ({ selected, setSelected }) => {
	// const [selected, setSelected] = useState(tabs[0]);

	return (
		<div>
			{tabs.map((tab) => (
				<Chip
					text={tab}
					selected={selected === tab}
					setSelected={setSelected}
					key={tab}
				/>
			))}
		</div>
	);
};

const Chip = ({ text, selected, setSelected }) => {
	return (
		<button
			onClick={() => setSelected(text)}
			className={`${
				selected
					? "text-white"
					: "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
			} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}>
			<span className="relative z-10">{text}</span>
			{selected && (
				<motion.span
					layoutId="pill-tab"
					transition={{ type: "spring", duration: 0.5 }}
					className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"></motion.span>
			)}
		</button>
	);
};

export default ChipTabs;