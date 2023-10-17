import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [authenticate, result] = useMutation(CREATE_REVIEW);

  const create = async ({ owner, name, rating, review }) => {
    const response = await authenticate({
      variables: {
        review: {
          ownerName: owner,
          repositoryName: name,
          rating,
          text: review,
        },
      },
    });

    return response;
  };

  return [create, result];
};

export default useCreateReview;
