import { Box, Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

ProductSkeleton.propTypes = {
  length: PropTypes.number.isRequired,
};

ProductSkeleton.defaultProps = {
  length: 6,
};

function ProductSkeleton({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, idx) => {
          return (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={200} />
                <Skeleton width="60%" height={30} />
                <Skeleton width="80%" height={20} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProductSkeleton;
