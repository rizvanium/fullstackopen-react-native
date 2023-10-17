import { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import Text from '../Text';
import { SORTING_CONFIG, SORT_BY } from '../../constants';
const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
});

const RepositoryList = () => {
  const [sortedBy, setSortedBy] = useState(SORT_BY.CREATED_AT);
  const { repositories, loading, error } = useRepositories(
    SORTING_CONFIG[sortedBy]
  );

  if (loading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Failed to fetch repository data</Text>
      </View>
    );
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortedBy={sortedBy}
      selectSortedBy={setSortedBy}
    />
  );
};

export default RepositoryList;
