import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const signInValidationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  inputBase: {
    height: 50,
    margin: 8,
    padding: 10,
    fontSize: theme.fontSizes.heading,
    borderRadius: 4,
  },
  input: {
    borderWidth: 2,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
  },
  submitButton: {
    fontWeight: theme.fontWeights.bold,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Enter username"
        style={{ ...styles.input, ...styles.inputBase }}
      />
      <FormikTextInput
        name="password"
        placeholder="Enter password"
        secureTextEntry
        style={{ ...styles.input, ...styles.inputBase }}
      />
      <Pressable onPress={onSubmit}>
        <Text
          fontSize="heading"
          style={{ ...styles.submitButton, ...styles.inputBase }}
        >
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data?.authenticate?.accessToken) {
        navigate('/');
      }
    } catch (error) {
      console.log('SignIn error block');
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
