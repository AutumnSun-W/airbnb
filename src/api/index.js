import axios from 'axios';
import api from "./api";
import React from "react";

const base = 'http://api.cat-shop.penkuoer.com';

export const GET = (url, params) => {
    return axios.get(`${base}${url}`, params)
};

export const POST = (url,params)=>{
    return axios.post(`${base}${url}`, params).then(data=> data.data)
};

export const TAPI = (url)=>{
    return axios.post(`${base}/api/v2/proxy`,{url})
};

