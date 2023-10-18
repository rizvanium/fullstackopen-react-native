import ReviewListContainer from './ReviewListContainer';
import { ME } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import Text from '../Text';

const ReviewList = () => {
  const { loading, error, data } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error...</Text>;
  }

  return <ReviewListContainer reviews={data?.me?.reviews} />;
};

export default ReviewList;
