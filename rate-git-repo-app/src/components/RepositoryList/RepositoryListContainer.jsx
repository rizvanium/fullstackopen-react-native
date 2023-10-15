import { FlatList, StyleSheet, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const PressableRepositoryItem = ({ item }) => {
  return (
    <Link to={`/repository/${item.id}`}>
      <RepositoryItem item={item} />
    </Link>
  );
};

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={PressableRepositoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryListContainer;
