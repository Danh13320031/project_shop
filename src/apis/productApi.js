import axiosClient from './axiosClient';

const productApi = {
  async getAllProduct(params) {
    const newParams = { ...params };
    newParams._start =
      !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 20);

    delete newParams._page;

    const productList = await axiosClient.get('/products', { params: newParams });
    const count = await axiosClient.get('/products/count', { params: newParams });

    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
};

export default productApi;
