import React from 'react';
import Navigation from 'navigation/Navigation';
import { AuthProvider } from 'utils/AuthProvider';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <Toast />
    </AuthProvider>
  );
};

export default App;
