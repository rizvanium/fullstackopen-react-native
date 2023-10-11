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
  submitButton: {
    height: 64,
    margin: 12,
    padding: 10,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    borderRadius: 4,
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
      <FormikTextInput name="username" placeholder="Enter username" />
      <FormikTextInput
        name="password"
        placeholder="Enter password"
        secureTextEntry
      />
      <Pressable onPress={onSubmit}>
        <Text fontSize="heading" style={styles.submitButton}>
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
