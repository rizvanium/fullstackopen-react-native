import { useNavigate } from 'react-router-native';
import useCreateUser from '../../hooks/useCreateUser';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const navigate = useNavigate();
  const [create] = useCreateUser();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await create({ username, password });
      const { data } = await signIn({ username, password });

      if (data?.authenticate?.accessToken) {
        navigate('/');
      }
    } catch (error) {
      console.log('SignUp error block');
      console.log(error);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
