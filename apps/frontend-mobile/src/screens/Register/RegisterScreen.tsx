import { SafeAreaView } from 'react-native';
import RegisterForm from 'screens/Register/RegisterForm';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <RegisterForm />
    </SafeAreaView>
  );
};

export default RegisterScreen;
