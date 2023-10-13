import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from 'hooks';
import { AuthStack, AppStack } from 'navigation';
import { Loading } from 'components';

const Navigation = () => {
  const { authData, loading } = useAuth();

  return (
    <NavigationContainer>
      {authData?.token ? <AppStack /> : <AuthStack />}
      <Loading isVisible={loading} message="Loading..." />
    </NavigationContainer>
  );
};

export default Navigation;
