import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { formState } = form;
  const hasError = formState.errors[name]?.message;

  return (
    <Controller
      name={name}
      disabled={disable}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={!!hasError}
          helperText={formState.errors[name]?.message}
          id="outlined-basic"
          variant="outlined"
          margin="normal"
          fullWidth
          required={true}
        />
      )}
    />
  );
}

export default InputField;
