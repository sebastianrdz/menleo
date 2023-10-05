import { HeaderComponent, MessagesRowComponent } from 'components';
import { FlatList, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const messages = [
  {
    id: '1',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    name: 'John Doe',
    message: 'Hey there!',
    time: '2:30 PM',
    badgeCount: 2,
  },
  {
    id: '2',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    name: 'Jane Smith',
    message: 'What are you up to?',
    time: '3:15 PM',
    badgeCount: 12,
  },
  {
    id: '3',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    name: 'John Doe',
    message: 'Hey there!',
    time: '2:30 PM',
    // badgeCount: 2,
  },
  {
    id: '4',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    name: 'Jane Smith',
    message: 'What are you up to?',
    time: '3:15 PM',
    badgeCount: 15,
  },
  {
    id: '5',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    name: 'John Doe',
    message: 'Hey there!',
    time: '2:30 PM',
    // badgeCount: 2,
  },
  {
    id: '6',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    name: 'Jane Smith',
    message: 'What are you up to?',
    time: '3:15 PM',
    // badgeCount: 12,
  },
];

const MessagesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'Mensajes'}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessagesRowComponent
            profilePicture={item.profilePicture}
            name={item.name}
            message={item.message}
            time={item.time}
            badgeCount={item.badgeCount}
            onPress={() => void 0}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
