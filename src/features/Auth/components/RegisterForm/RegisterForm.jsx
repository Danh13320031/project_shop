import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import Avartar from '@mui/material/Avatar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import '../../../../App.css';
import InputField from '../../../../components/form-controls/InputField/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField/PasswordField';

// createTheme MUI
const theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
  },
});

// Styled MUI
const DivTag = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));
const AvartarCom = styled(Avartar)(({ theme }) => ({
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,
}));
const TypographyCom = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  margin: theme.spacing(2, 0, 3, 0),
}));
const ButtonCom = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2, 0),
}));

// Proptypes
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

// Yup Validate Form
const yupSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Please enter your full name')
    .min(4, 'Please enter at least 4 characters')
    .max(20, 'Please enter no more than 20 characters'),
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter the correct email format'),

  password: yup
    .string()
    .required('Please enter your password')
    .min(5, 'Please enter at least 4 characters'),

  retypePassword: yup
    .string()
    .required('Please enter your retype password')
    .oneOf([yup.ref('password')], "Password doesn't match"),
});

// Component
function RegisterForm(props) {
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(yupSchema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(values);
    form.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <DivTag>
        <AvartarCom>
          <LockOutlined />
        </AvartarCom>

        <TypographyCom variant="h5" component="h3">
          Create Your Acount
        </TypographyCom>

        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField name="fullName" label="Full Name" form={form} />
          <InputField name="email" label="Email" form={form} />
          <PasswordField name="password" label="Password" form={form} />
          <PasswordField name="retypePassword" label="Retype Password" form={form} />

          <ButtonCom type="submit" variant="contained" color="primary" fullWidth>
            Create An Acount
          </ButtonCom>
        </form>
      </DivTag>
    </ThemeProvider>
  );
}

export default RegisterForm;
