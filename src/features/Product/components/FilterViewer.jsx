import { Box, Chip } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

const BoxCom = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  padding: 0,
  alignItems: 'center',
  margin: theme.spacing(1, 0),
  listStyle: 'none',
}));
const LiTag = styled('li')(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(1),
}));

const FILTER_LIST = [
  {
    id: 1,
    isRemovable: false,
    getLabel: () => 'Miễn phí vận chuyển',
    isActive: (filters) => Boolean(filters.isFreeShip) === true,
    isVisible: () => true,
    onRemove: () => false,
    onToggle: (filters) => {
      const newFilter = { ...filters };

      if (newFilter.isFreeShip) delete newFilter.isFreeShip;
      else newFilter.isFreeShip = true;

      return newFilter;
    },
  },
  {
    id: 2,
    isRemovable: true,
    getLabel: () => 'Đang có khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes('isPromotion'),
    onRemove: (filters) => {
      const newFilter = { ...filters };
      delete newFilter.isPromotion;
      return newFilter;
    },
    onToggle: () => {},
  },
  {
    id: 3,
    isRemovable: true,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_gte') &&
      Object.keys(filters).includes('salePrice_lte'),
    onRemove: (filters) => {
      const newFilter = { ...filters };

      delete newFilter.salePrice_gte;
      delete newFilter.salePrice_lte;

      return newFilter;
    },
    onToggle: (filters) => {},
  },
  {
    id: 4,
    isRemovable: true,
    getLabel: (filters) => `Danh mục: ${filters['category.name']}`,
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes('category.id'),
    onRemove: (filters) => {
      const newFilter = { ...filters };
      delete newFilter['category.id'];
      return newFilter;
    },
    onToggle: () => {},
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  return (
    <BoxCom component="ul">
      {FILTER_LIST.filter((x) => x.isVisible(filters)).map((x) => (
        <LiTag key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'primary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilter = x.onToggle(filters);
                    onChange(newFilter);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;

                    const newFilter = x.onRemove(filters);
                    onChange(newFilter);
                  }
                : null
            }
          />
        </LiTag>
      ))}
    </BoxCom>
  );
}

export default FilterViewer;
