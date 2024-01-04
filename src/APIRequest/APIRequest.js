import axios from "axios";

const BASE_URL = "/src/DB";

async function getCerts() {
	let res = await axios.get(BASE_URL + "/certs.json");
	return res.data;
}

export default getCerts;
