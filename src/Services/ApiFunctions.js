import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/";
const DefaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
  "Access-Control-Allow-Origin": "*",
};
const getToken = () => {};

const Get = async (module, params = {}, needAuth = true) => {
  if (needAuth === true) {
    DefaultHeaders.authorization = `Bearer ${getToken()}`;
  }
  return await axios.get(`${apiUrl}api/${module}/`, {
    params: params,
    headers: DefaultHeaders,
  });
};

const Post = async (module, formData, needAuth = true, sendFiles = false) => {
  if (needAuth === true) {
    DefaultHeaders.authorization = `Bearer ${getToken()}`;
  }
  if (sendFiles) {
    DefaultHeaders["Content-Type"] = "multipart/form-data";
  }
  let response = null;
  await axios({
    method: "post",
    url: `${apiUrl}api/${module}`,
    data: formData,
    headers: DefaultHeaders,
  })
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      response = err.response;
    });
  resetTypeContent();
  return response;
};

const Put = async (
  module,
  id,
  data = {},
  needAuth = true,
  sendFiles = false
) => {
  if (needAuth === true) {
    DefaultHeaders.authorization = `Bearer ${getToken()}`;
  }
  let response = null;
  if (sendFiles) DefaultHeaders["Content-Type"] = "multipart/form-data";
  await axios
    .put(`${apiUrl}api/${module}/${id}`, data, {
      headers: DefaultHeaders,
    })
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      response = err.response;
    });

  resetTypeContent();
  return response;
};

const Delete = async (module, id, params = {}) => {
  if (needAuth === true) {
    DefaultHeaders.authorization = `Bearer ${getToken()}`;
  }
  return await axios.put(`${apiUrl}api/${module}/${id}`, params, {
    headers: DefaultHeaders,
  });
};
const resetTypeContent = () => {
  DefaultHeaders["Content-Type"] = "application/json;charset=UTF-8";
};
const API = { Get, Post, Put, Delete };
export default API;
