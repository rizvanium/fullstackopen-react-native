import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import theme from '../theme';
import { Navigate, Route, Routes } from 'react-router-native';
import NewReview from './NewReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.light,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<RepositoryList />} />
        <Route exact path="/repository/:id" element={<RepositoryDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new-review" element={<NewReview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
