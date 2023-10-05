import React from 'react';
import Navigation from 'navigation/Navigation';
import { AuthProvider } from 'utils/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
