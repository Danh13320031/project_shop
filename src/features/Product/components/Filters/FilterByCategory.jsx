import { Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import categoryApi from '../../../../apis/categoryApi';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
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
  padding: '7.5px 0px 7.5px 5px',
  transition: '0.4s ease-out',
  borderRadius: 3,
  ':hover': {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    backgroundColor: '#F6FAFD',
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
        const data = await response.data;

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
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) onChange(category.id, category.name);
  };

  return (
    <ThemeProvider theme={theme}>
      <BoxCom>
        <Typography variant="subtitle2" fontWeight={'bold'}>
          CHỌN LOẠI SẢN PHẨM
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
