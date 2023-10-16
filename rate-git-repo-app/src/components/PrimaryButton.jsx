import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
});

const PrimaryButton = ({ text, onPress, style, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Text
        fontSize="heading"
        fontWeight="bold"
        color="white"
        style={[{ ...theme.input, ...styles.button }, style]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
