import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.background,
    color: theme.colors.textSecondary,
    height: Constants.statusBarHeight * 3,
    padding: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab name="Repositories" />
      <AppBarTab name="Sign in" />
    </View>
  );
};

export default AppBar;
