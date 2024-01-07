import React, { useRef, useState } from "react";
import Layout from "../layout/Layout";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactPage = () => {
	const form = useRef();

	const [uname, setName] = useState("");
	const [uemail, setEmail] = useState("");
	const [umessage, setMessage] = useState("");

	function handleName(e) {
		setName(e.target.value);
	}
	function handleEmail(e) {
		setEmail(e.target.value);
	}
	function handleMessage(e) {
		setMessage(e.target.value);
	}

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_42dyq92",
				"template_sz2iiql",
				form.current,
				"GQHxBpvGe7fGa9bjC"
			)
			.then(
				(result) => {
					toast.success("Your message has been sent to Kcnaiamh", {
						duration: 4000,
					});
				},
				(error) => {
					toast.error("Something went wrong!\nPlease try again later.");
				}
			);
	};

	return (
		<Layout>
			<h1 className="capitalize font-bold text-2xl mb-5">Contact</h1>
			<div class="w-12 h-1 bg-[#FCA311] mb-4" />

			<p>
				Open for opportunities: <b className="text-green-500">Yes</b>
			</p>

			<form ref={form} onSubmit={sendEmail} className="mt-3 flex-col">
				<div className="flex space-x-10">
					<div className="mb-4 flex-1">
						<label
							for="user_name"
							className="block text-sm font-medium text-[#E5E5E5]">
							Name
						</label>
						<input
							type="text"
							id="user_name"
							name="user_name"
							value={uname}
							onChange={handleName}
							className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-black"
						/>
					</div>

					<div className="mb-4 flex-1">
						<label
							for="user_email"
							className="block text-sm font-medium text-[#E5E5E5]">
							Email
						</label>
						<input
							type="email"
							id="user_email"
							name="user_email"
							value={uemail}
							onChange={handleEmail}
							className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-black"
						/>
					</div>
				</div>
				<div className="mb-6">
					<label
						for="message"
						className="block text-sm font-medium text-[#E5E5E5]">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={umessage}
						onChange={handleMessage}
						rows="4"
						className="mt-1 p-2 w-full border  border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-black"
					/>
				</div>

				<button
					type="submit"
					className=" float-right rounded-2xl border-2 border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-[#FCA311] hover:border-white hover:text-white hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
					Send
				</button>
			</form>
		</Layout>
	);
};

export default ContactPage;
