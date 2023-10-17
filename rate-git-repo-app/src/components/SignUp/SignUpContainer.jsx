import * as yup from 'yup';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const signInValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username must be at most 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(30, 'Password must be at most 30 characters'),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Must match password'),
});

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
