import { FlatList } from 'react-native';
import { Link } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { SORT_BY } from '../../constants';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from '../ItemSeparator';

const PressableRepositoryItem = ({ item }) => {
  return (
    <Link to={`/repository/${item.id}`}>
      <RepositoryItem item={item} />
    </Link>
  );
};

export const RepositoryListContainer = ({
  repositories,
  sortedBy,
  selectSortedBy,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={PressableRepositoryItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <Picker
          selectedValue={sortedBy}
          onValueChange={(value, itemIndex) => selectSortedBy(value)}
        >
          <Picker.Item label="Latest repositories" value={SORT_BY.CREATED_AT} />
          <Picker.Item
            label="Highest rated repositories"
            value={SORT_BY.RATING_AVERAGE_DESC}
          />
          <Picker.Item
            label="Lowest rated repositories"
            value={SORT_BY.RATING_AVERAGE_ASC}
          />
        </Picker>
      )}
    />
  );
};

export default RepositoryListContainer;
