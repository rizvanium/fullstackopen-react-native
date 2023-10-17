import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { useAuthStorage } from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.dark,
    height: Constants.statusBarHeight * 3,
  },
  warning: {
    color: theme.colors.white,
    backgroundColor: theme.colors.error,
  },
});

const createAlert = (title, message, handleConfirmation) =>
  Alert.alert(title, message, [
    {
      text: 'No',
      onPress: () => {},
      style: 'cancel',
    },
    { text: 'Yes', onPress: () => handleConfirmation() },
  ]);

const AppBar = () => {
  const client = useApolloClient();
  const { loading, error, data } = useQuery(ME);
  const authStorage = useAuthStorage();

  const logout = () =>
    createAlert('Logout', 'do you really want to sign out?', () => {
      authStorage.removeAccessToken();
      client.resetStore();
    });

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab name="Repositories" to="/" />
        {loading || error || !data?.me?.id ? (
          <>
            <AppBarTab name="Sign in" to="/signin" />
          </>
        ) : (
          <>
            <AppBarTab name="Create a review" to="/new-review" />
            <AppBarTab
              name="Sign out"
              style={styles.warning}
              onPress={logout}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
