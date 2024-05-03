import axiosClient from './axiosClient';

const categoryApi = {
  getAllCategory(params) {
    const url = `categories/`;
    return axiosClient.get(url, { ...params });
  },
};

export default categoryApi;
