import axios from "axios";

const ItemBaseURL= 'https://ecomerce-master.herokuapp.com/api/v1'

export const ItemApi = axios.create({baseURL:ItemBaseURL})