import { SafeAreaView } from 'react-native';
import ForgotPasswordForm from 'screens/ForgotPassword/ForgotPasswordForm';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ForgotPasswordForm />
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
