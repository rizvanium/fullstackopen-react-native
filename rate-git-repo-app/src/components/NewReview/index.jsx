import { useNavigate } from 'react-router-native';
import ReviewFormContainer from './ReviewFormContainer';
import useCreateReview from '../../hooks/useCreateReview';

const NewReview = () => {
  const navigate = useNavigate();
  const [create] = useCreateReview();
  const onSubmit = async (values) => {
    const { owner, name, rating, review } = values;
    try {
      const {
        data: {
          createReview: { repositoryId },
        },
      } = await create({ owner, name, rating: +rating, review });
      navigate(`/repository/${repositoryId}`);
    } catch (error) {
      console.log('SignIn error block');
      console.log(error);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default NewReview;
