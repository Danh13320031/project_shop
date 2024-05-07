import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

const BoxCom = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const UlTag = styled('ul')(() => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
}));

const LiTag = styled('li')(({ theme }) => ({
  marginTop: -10,
}));

FilterByService.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function FilterByService({ filters, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;

    const { checked, name } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <BoxCom>
      <Typography variant="subtitle2" fontWeight={'bold'} marginBottom={1}>
        CHỌN LOẠI DỊCH VỤ
      </Typography>

      <UlTag>
        {[
          { value: 'isPromotion', label: 'Đang có khuyến mãi' },
          { value: 'isFreeShip', label: 'Miễn phí vận chuyển' },
        ].map((service) => (
          <LiTag key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters[service.value]}
                  name={service.value}
                  color="primary"
                  onChange={handleChange}
                />
              }
              label={service.label}
            />
          </LiTag>
        ))}
      </UlTag>
    </BoxCom>
  );
}

export default FilterByService;
