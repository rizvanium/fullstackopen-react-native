import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import PrimaryButton from '../PrimaryButton';
import theme from '../../theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
  },
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={theme.content}>
      <FormikTextInput
        name="owner"
        placeholder="Repository owner's name"
        style={{ ...styles.input, ...theme.input }}
        testID="review-owner"
      />
      <FormikTextInput
        name="name"
        placeholder="Repository name"
        style={{ ...styles.input, ...theme.input }}
        testID="review-repo-name"
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={{ ...styles.input, ...theme.input }}
        testID="review-rating"
      />
      <FormikTextInput
        name="review"
        placeholder="Review"
        style={{ ...styles.input, ...theme.input }}
        testID="review-text"
      />
      <PrimaryButton
        text="Create review"
        onPress={onSubmit}
        testID="review-submit"
      />
    </View>
  );
};

export default ReviewForm;
