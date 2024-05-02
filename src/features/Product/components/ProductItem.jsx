import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST, THUMBNAILURL_PLACEHOLDER } from '../../../constants/index';

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductItem({ product }) {
  // Handle Product Thumbnail URL
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : THUMBNAILURL_PLACEHOLDER;

  // Handle Currency VND
  const productSalePrice = new Intl.NumberFormat('VND', {
    style: 'currency',
    currency: 'VND',
  }).format(product.salePrice);

  return (
    <Box padding={1}>
      <Box>
        <img src={thumbnailUrl} alt={product.title} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize={16} fontWeight="bold" marginRight={2}>
          {productSalePrice}
        </Box>
        {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  );
}

export default ProductItem;
