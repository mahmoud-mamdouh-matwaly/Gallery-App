import axios from "axios";

export const baseUrl = `${process.env.REACT_APP_ROOT_URL}`;

export async function galleryApi(type) {
  const response = await axios.get(`${baseUrl}/${type}-data.json`);

  return response?.data;
}
