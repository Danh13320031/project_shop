import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <Box pt={4}>
      <Routes>
        <Route exact path="/" element={<ListPage />} />
      </Routes>
    </Box>
  );
}

export default ProductFeature;
