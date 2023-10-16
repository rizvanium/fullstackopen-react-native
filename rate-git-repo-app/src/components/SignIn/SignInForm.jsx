import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import PrimaryButton from '../PrimaryButton';

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
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Enter username"
        style={{ ...styles.input, ...styles.inputBase }}
        testID="sign-in-username"
      />
      <FormikTextInput
        name="password"
        placeholder="Enter password"
        secureTextEntry
        style={{ ...styles.input, ...styles.inputBase }}
        testID="sign-in-password"
      />
      <PrimaryButton
        text="Sign in"
        onPress={onSubmit}
        testID="sign-in-submit"
      />
    </View>
  );
};

export default SignInForm;
