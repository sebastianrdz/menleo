import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from 'hooks';
import { Text } from 'react-native';
import { AuthStack, AppStack } from 'navigation';

const Navigation = () => {
  const { authData, loading } = useAuth();

  if (loading) return <Text>Loading...</Text>;

  return (
    <NavigationContainer>
      {authData?.token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
