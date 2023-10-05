import { SafeAreaView } from 'react-native';
import LoginForm from 'screens/Login/LoginForm';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;
