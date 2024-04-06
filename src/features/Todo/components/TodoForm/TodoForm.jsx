import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField/InputField';
import Button from '@mui/material/Button';

// Proptype
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

// Yup
const yupSchema = yup
  .object()
  .shape({
    title: yup
      .string()
      .required('Please enter title')
      .min(5, 'Title is too short')
      .max(20, 'Title is too tall'),
  })
  .required('');

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(yupSchema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" lable="Todo" form={form} />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
