import { getRequest, postRequest } from "./request";

const url = "https://raptor-trading.herokuapp.com/";
// const url = 'http://localhost:8080/';

export interface API_Response {
  status: boolean;
  data?: any;
  message?: string;
}

export async function addUser(
  username: string,
  address: string,
  avatar: string
) {
  const response: API_Response | null = await postRequest(url + "users/add", {
    name: username,
    address: address,
    avatar: avatar,
  });
  return response;
}

export async function getUser(address: string) {
  const response: API_Response | null = await getRequest(url + "user", {
    address: address,
  });
  if (response && response.status) {
    return response.data;
  }

  return null;
}
