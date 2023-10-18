import { FlatList, View } from 'react-native';
import { Link } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { SORT_BY } from '../../constants';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from '../ItemSeparator';
import theme from '../../theme';

const PressableRepositoryItem = ({ item }) => {
  return (
    <Link to={`/repository/${item.id}`}>
      <RepositoryItem item={item} />
    </Link>
  );
};

const RepositoryListContainer = ({
  repositories,
  sortedBy,
  selectSortedBy,
  searchKeyword,
  setSearchKeyword,
}) => {
  const onChangeSearch = (query) => setSearchKeyword(query);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={PressableRepositoryItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={{ margin: 16, marginBottom: 0 }}>
          <Searchbar
            style={{
              backgroundColor: theme.colors.white,
              borderRadius: 4,
              height: 44,
            }}
            inputStyle={{
              minHeight: '100%',
            }}
            containerStyle={{ flex: 1, height: undefined }}
            showDivider={false}
            mode="view"
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchKeyword}
          />
          <Picker
            style={{
              marginLeft: -10,
              marginRight: -10,
              marginTop: 5,
              marginBottom: 5,
            }}
            selectedValue={sortedBy}
            onValueChange={(value, itemIndex) => selectSortedBy(value)}
          >
            <Picker.Item
              label="Latest repositories"
              value={SORT_BY.CREATED_AT}
            />
            <Picker.Item
              label="Highest rated repositories"
              value={SORT_BY.RATING_AVERAGE_DESC}
            />
            <Picker.Item
              label="Lowest rated repositories"
              value={SORT_BY.RATING_AVERAGE_ASC}
            />
          </Picker>
        </View>
      }
    />
  );
};

export default RepositoryListContainer;
