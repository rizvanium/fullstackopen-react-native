import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import PrimaryButton from '../PrimaryButton';

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={theme.content}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={{ ...styles.input, ...theme.input }}
        testID="sign-up-username"
      />
      <FormikTextInput
        secureTextEntry
        name="password"
        placeholder="Password"
        style={{ ...styles.input, ...theme.input }}
        testID="sign-up-password"
      />
      <FormikTextInput
        secureTextEntry
        name="passwordConfirmation"
        placeholder="Confirm password"
        style={{ ...styles.input, ...theme.input }}
        testID="sign-up-password-confirmation"
      />
      <PrimaryButton
        text="Sign up"
        onPress={onSubmit}
        testID="sign-up-submit"
      />
    </View>
  );
};

export default SignUpForm;
