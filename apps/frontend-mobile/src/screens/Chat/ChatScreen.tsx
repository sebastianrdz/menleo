import {
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { HeaderComponent, Loading } from 'components';
import { useAuth } from 'hooks';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import apiChat from 'services/api/chat';
import { IMessage } from 'services/models/chat';

const ChatScreen = () => {
  const { params } = useRoute<any>();
  const { authData } = useAuth();
  const navigation = useNavigation();

  const [messages, setMessages] = useState<IMessage[]>(params?.messages || []);
  const [newMessage, setNewMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitMessage = async () => {
    setIsLoading(true);
    const body: IMessage = {
      text: newMessage,
      username: authData?.username || '',
      timestamp: 'now',
    };
    await apiChat.patchMessages(params._id, body);
    setIsLoading(false);
  };

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const updatedMessages = [
      ...messages,
      {
        text: newMessage,
        username: authData?.username || '',
        timestamp: 'now',
      },
    ];
    handleSubmitMessage();
    setMessages(updatedMessages);
    setNewMessage('');
  };

  const participantUsername = params?.usernames.filter(
    (username: string) => username !== authData?.username
  )[0];

  if (isLoading) {
    <Loading isVisible={isLoading} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        title={participantUsername}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={
              item.username === authData?.username
                ? styles.sentMessage
                : styles.receivedMessage
            }
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  messageText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: '#128c7e',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});

export default ChatScreen;
