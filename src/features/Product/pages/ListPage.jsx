import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import productApi from '../../../apis/productApi';
import ProductList from '../components/ProductList';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [filters, setFilter] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'salePrice:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAllProduct(filters);
        const data = response.data.data;
        const pagination = response.pagination;

        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to get product list', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [filters]);

  // Pagination
  const handlePageChange = (e, page) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  // Sort by price
  const handleSortChange = (newSortValue) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item sm={12} md={3}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>

          <Grid item sm={12} md={9}>
            <ProductSort currentSort={filters._sort} onChange={handleSortChange} />

            <Paper elevation={0}>
              {loading ? <ProductSkeleton length={9} /> : <ProductList data={productList} />}

              <Box padding="20px 0px" display="flex" justifyContent="center">
                <Pagination
                  count={Math.ceil(pagination.total.data / pagination.limit)}
                  page={pagination.page}
                  variant="outlined"
                  color="primary"
                  shape="rounded"
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
