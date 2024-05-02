import { Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      onChange={handleSortChange}
      textColor="primary"
      indicatorColor="primary"
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
      <Tab label="Giá thấp tới cao" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
