import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const BoxCom = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const BoxCom2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',

  margin: `${theme.spacing(1)} 0px`,
}));

const TextFieldCom = styled(TextField)(({ theme }) => ({
  input: {
    padding: `${theme.spacing(0.5)} 14px`,
  },
}));

const SpanTag = styled('span')(({ theme }) => ({
  margin: `0px ${theme.spacing(1)}`,
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (values.salePrice_gte === '' || values.salePrice_lte === '') return;
    if (values.salePrice_gte < 0 || values.salePrice_lte < 0) return;
    if (values.salePrice_lte <= values.salePrice_gte) return;

    if (onChange) onChange(values);
  };

  return (
    <BoxCom>
      <Typography variant="subtitle2" fontWeight={'bold'}>
        CHỌN KHOẢNG GIÁ SẢN PHẨM
      </Typography>

      <BoxCom2>
        <TextFieldCom name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
        <SpanTag>đến</SpanTag>
        <TextFieldCom name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
      </BoxCom2>

      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </BoxCom>
  );
}

export default FilterByPrice;
