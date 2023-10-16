import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 8,
    padding: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
  },
  button: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const PrimaryButton = ({ text, onPress, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Text
        fontSize="heading"
        fontWeight="bold"
        color="white"
        style={{ ...styles.input, ...styles.button }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
