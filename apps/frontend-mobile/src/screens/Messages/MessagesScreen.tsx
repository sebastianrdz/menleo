import { HeaderComponent, MessagesRowComponent } from 'components';
import { FlatList, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export interface IMessage {
  text: string;
  username: string;
  timestamp: string;
}
export interface IChat {
  id: string;
  profilePicture: string;
  usernames: string[];
  messages: IMessage[];
  badgeCount: number;
}

const chats: IChat[] = [
  {
    id: '1',
    profilePicture:
      'https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg',
    usernames: ['johndoesmith', 'samsmith32'],
    messages: [
      {
        text: 'Hello',
        username: 'johndoesmith',
        timestamp: '3:15',
      },
      {
        text: 'Hello',
        username: 'samsmith32',
        timestamp: '3:15',
      },
      {
        text: 'Hello',
        username: 'samsmith32',
        timestamp: '3:15',
      },
    ],
    badgeCount: 12,
  },
  {
    id: '2',
    profilePicture: '',
    usernames: ['johndoesmith', 'nathan95'],
    messages: [
      {
        text: 'Hello',
        username: 'johndoesmith',
        timestamp: '3:15',
      },
      {
        text: 'Hello',
        username: 'samsmith32',
        timestamp: '3:15',
      },
      {
        text: 'Hello',
        username: 'samsmith32',
        timestamp: '3:15',
      },
      {
        text: 'Hello',
        username: 'johndoesmith',
        timestamp: '3:15',
      },
    ],
    badgeCount: 12,
  },
];

const MessagesScreen = () => {
  const navigation = useNavigation();

  const navigateToChat = (item: IChat) => {
    navigation.navigate('Chat', item);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'Mensajes'}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessagesRowComponent
            {...item}
            onPress={() => navigateToChat(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
