import { StyleSheet } from 'react-native';
import { useLocation, Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  link: {
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  selected: {
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.white,
  },
});

const useLinkStyles = (...paths) => {
  const { pathname } = useLocation();

  const pathToStyle = new Map();

  paths.forEach((path) => {
    pathToStyle.set(
      path,
      pathname === path ? [styles.link, styles.selected] : [styles.link]
    );
  });

  return pathToStyle;
};

const AppBarTab = ({ name, to }) => {
  const linkStyles = useLinkStyles(to);

  return (
    <Link to={to}>
      <Text
        fontSize="heading"
        color="white"
        fontWeight="bold"
        style={linkStyles.get(to)}
      >
        {name}
      </Text>
    </Link>
  );
};

export default AppBarTab;
