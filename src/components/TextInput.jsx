import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 64,
    margin: 12,
    padding: 10,
    fontSize: theme.fontSizes.heading,
    borderWidth: 1,
    borderRadius: 4,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.input];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
