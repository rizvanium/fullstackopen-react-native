const { FlatList } = require('react-native');
import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';

const ReviewListContainer = ({ reviews }) => {
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={ReviewItem}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ReviewListContainer;
