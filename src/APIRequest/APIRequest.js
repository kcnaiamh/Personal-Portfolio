import axios from "axios";

const BASE_URL = "/src/DB";

export async function getPortfoliInfo() {
	let res = await axios.get(BASE_URL + "/portfolio.json");
	return res.data;
}

export async function getAboutMeInfo() {
	let res = await axios.get(BASE_URL + "/about.json");
	return res.data;
}
