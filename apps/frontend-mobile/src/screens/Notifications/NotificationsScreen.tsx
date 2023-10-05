import { HeaderComponent, NotificationRowComponent } from 'components';
import { FlatList, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const notifications = [
  {
    id: '1',
    // profilePicture:
    //   "https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg",
    title: 'John Doe',
    description: 'Liked your post.',
    iconName: 'ios-heart-outline',
  },
  {
    id: '2',
    profilePicture:
      'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
    title: 'Jane Smith',
    description: 'Commented on your photo.',
    iconName: 'ios-chatbubble-outline',
  },
  {
    id: '3',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    title: 'John Doe',
    description: 'Liked your post.',
    iconName: 'ios-heart-outline',
  },
  {
    id: '4',
    profilePicture:
      'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
    title: 'Jane Smith',
    description: 'Commented on your photo.',
    iconName: 'ios-chatbubble-outline',
  },
  {
    id: '5',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    title: 'John Doe',
    description: 'Liked your post.',
    iconName: 'ios-heart-outline',
  },
  {
    id: '6',
    profilePicture:
      'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
    title: 'Jane Smith',
    description: 'Commented on your photo.',
    iconName: 'ios-chatbubble-outline',
  },
  {
    id: '7',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    title: 'John Doe',
    description: 'Liked your post.',
    iconName: 'ios-heart-outline',
  },
  {
    id: '8',
    profilePicture:
      'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
    title: 'Jane Smith',
    description: 'Commented on your photo.',
    iconName: 'ios-chatbubble-outline',
  },
  {
    id: '9',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    title: 'John Doe',
    description: 'Liked your post.',
    iconName: 'ios-heart-outline',
  },
  {
    id: '10',
    profilePicture:
      'https://cdn.pixabay.com/photo/2023/08/21/23/11/woman-8205187_1280.jpg',
    title: 'Jane Smith',
    description: 'Commented on your photo.',
    iconName: 'ios-chatbubble-outline',
  },
];

const NotificationsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'Notificaciones'}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationRowComponent
            profilePicture={item.profilePicture}
            title={item.title}
            description={item.description}
            iconName={item.iconName}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
