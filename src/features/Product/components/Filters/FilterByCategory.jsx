import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../../../apis/categoryApi';
import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
  },
});

const BoxCom = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const UlTag = styled('ul')(({ theme }) => ({
  padding: 0,
  margin: 0,
  listStyle: 'none',
}));

const LiTag = styled('li')(({ theme }) => ({
  marginTop: theme.spacing(1),
  transition: '0.4s ease-out',
  ':hover': {
    cursor: 'pointer',
    color: theme.palette.primary.main,
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryApi.getAllCategory();
        const data = response.data;

        setCategoryList(
          data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failed to fetch category list: ', error);
      }
    })();
  });

  const handleCategoryClick = (category) => {
    if (onChange) onChange(category.id);
  };

  return (
    <ThemeProvider theme={theme}>
      <BoxCom>
        <Typography variant="subtitle2" fontWeight={'bold'}>
          DANH MỤC SẢN PHẨM
        </Typography>

        <UlTag>
          {categoryList.map((category) => (
            <LiTag key={category.id} onClick={() => handleCategoryClick(category)}>
              <Typography variant="body2">{category.name}</Typography>
            </LiTag>
          ))}
        </UlTag>
      </BoxCom>
    </ThemeProvider>
  );
}

export default FilterByCategory;
