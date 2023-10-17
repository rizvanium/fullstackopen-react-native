import * as yup from 'yup';
import { Formik } from 'formik';
import ReviewForm from './ReviewForm';

const initialValues = {
  owner: '',
  name: '',
  rating: 0,
  review: '',
};

const reviewValidationSchema = yup.object().shape({
  owner: yup.string().required('Repository owner name is required'),
  name: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'min is 0')
    .max(100, 'max is 100')
    .required('Rating is required'),
  review: yup.string(),
});

const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={reviewValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewFormContainer;
