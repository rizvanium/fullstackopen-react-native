import { useNavigate } from 'react-router-native';
import ReviewFormContainer from './ReviewFormContainer';
import theme from '../../theme';

const NewReview = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { owner, name, rating, review } = values;
    try {
      console.log('submitted:', owner, name, rating, review);
    } catch (error) {
      console.log('SignIn error block');
      console.log(error);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default NewReview;
