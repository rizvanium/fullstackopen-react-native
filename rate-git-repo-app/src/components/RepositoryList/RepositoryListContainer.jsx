import { FlatList } from 'react-native';
import { Link } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from '../ItemSeparator';

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
