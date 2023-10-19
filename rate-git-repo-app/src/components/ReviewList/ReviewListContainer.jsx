const { FlatList } = require('react-native');
import { useNavigate } from 'react-router-native';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';

const ReviewListContainer = ({ reviews }) => {
  const navigate = useNavigate();

  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem item={item} navigate={navigate} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ReviewListContainer;
