import axiosClient from './axiosClient';

const userApi = {
  postRegister(data) {
    const url = `auth/local/register`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
