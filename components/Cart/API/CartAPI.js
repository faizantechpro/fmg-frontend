import axios from "axios"
import baseConfig from "../../../store/services/base.config";

export const addItems = (items) => axios.post(`${baseConfig.baseURL}cart-items-add`, items)
	.then(res => {
		console.log(res);
		console.log(res.items);
	})
export const getItems = id => (
	console.log(id),
	axios.get(`${baseConfig.baseURL}cart-item-show/${id}`)
		.then(res => res.data,)
)

export const getCourseByid = id => (
	console.log(id),
	axios.post(`${baseConfig.baseURL}allCourse/${id}`)
		.then(res => res.data,)
)

export const uploadReceipt = (file) => fetch(`${baseConfig.baseURL}create-receipt`, {
	method: "POST",
	body: file
});

export const fetchCart = () => (
	axios.get(`${baseConfig.baseURL}cart-items-show`)
		.then(res => res.data,)
);