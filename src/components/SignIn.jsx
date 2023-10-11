import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  inputBase: {
    height: 64,
    margin: 12,
    padding: 10,
    fontSize: theme.fontSizes.heading,
    borderRadius: 4,
  },
  input: {
    borderWidth: 1,
  },
  submitButton: {
    fontWeight: theme.fontWeights.bold,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  const onSubmit = (values) => {
    console.log('submited', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
