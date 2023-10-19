import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import { ME } from '../graphql/queries';

const useRemoveReview = (id) => {
  const [deleteReview, result] = useMutation(DELETE_REVIEW);

  const remove = async () => {
    const response = await deleteReview({
      variables: {
        deleteReviewId: id,
      },
      refetchQueries: () => [
        { query: ME, variables: { includeReviews: true } },
      ],
    });

    return response;
  };

  return [remove, result];
};

export default useRemoveReview;
