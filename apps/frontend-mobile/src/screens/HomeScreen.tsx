import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderComponent } from 'components';
import { WorkInProgressContainer } from 'containers';
import { useAuth } from 'hooks';
import { SafeAreaView, Text } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { authData } = useAuth();

  const headerActions = [
    {
      onPress: () => navigation.navigate('Post'),
      icon: <Ionicons name="add-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Notifications'),
      icon: <Ionicons name="notifications-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Messages'),
      icon: <Ionicons name="mail-outline" size={24} color="black" />,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={authData?.username ? authData.username : 'Home'}
        subtitle={'Bienvenido de regreso'}
        actions={headerActions}
      />
      <WorkInProgressContainer />
    </SafeAreaView>
  );
};

export default HomeScreen;
