import { Text, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    fontWeight: '700',
    fontSize: theme.fontSizes.heading,
  },
});

const AppBarTab = ({ name }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default AppBarTab;
