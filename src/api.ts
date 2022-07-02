import axios from "axios";

export const productionApi = axios.create({
	baseURL: process.env.REACT_APP_PROD_API,
	timeoutErrorMessage: "the server took too long to respond",
});

export const developmentApi = axios.create({
	baseURL: process.env.REACT_APP_DEV_API
})
