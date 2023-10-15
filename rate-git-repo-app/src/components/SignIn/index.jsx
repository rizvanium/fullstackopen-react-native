import { useNavigate } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data?.authenticate?.accessToken) {
        navigate('/');
      }
    } catch (error) {
      console.log('SignIn error block');
      console.log(error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
