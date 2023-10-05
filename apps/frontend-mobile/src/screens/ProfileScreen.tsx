import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderComponent } from 'components';
import { WorkInProgressContainer } from 'containers';
import { SafeAreaView } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const headerActions = [
    {
      onPress: () => navigation.navigate(''),
      icon: <Ionicons name="create-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate(''),
      icon: <Ionicons name="share-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Settings'),
      icon: <Ionicons name="settings-outline" size={24} color="black" />,
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'JOHN DOE'}
        subtitle={'@johndoe123'}
        actions={headerActions}
      />
      <WorkInProgressContainer />
    </SafeAreaView>
  );
};

export default ProfileScreen;
