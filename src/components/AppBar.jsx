import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.dark,
    height: Constants.statusBarHeight * 3,
    padding: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" to="/" />
        <AppBarTab name="Sign in" to="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
