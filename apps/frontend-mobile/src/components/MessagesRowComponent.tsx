import { Ionicons } from '@expo/vector-icons';
import { useAuth } from 'hooks';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { IMessage } from 'screens/Messages/MessagesScreen';

interface MessagesRowComponentProps {
  profilePicture?: string;
  usernames: string[];
  messages: IMessage[];
  badgeCount?: number;
  onPress: () => void;
}

const MessagesRowComponent = ({
  profilePicture,
  usernames,
  messages,
  badgeCount,
  onPress,
}: MessagesRowComponentProps) => {
  const { authData } = useAuth();
  const participantUsername = usernames.filter(
    (username: string) => username !== authData?.username
  )[0];
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {profilePicture ? (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      ) : (
        <Ionicons
          name="person-circle-outline"
          style={styles.profilePicture}
          size={50}
          color="gray"
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{participantUsername}</Text>
        <Text style={styles.description}>{messages.at(-1)?.text}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>{messages.at(-1)?.timestamp}</Text>
        {badgeCount && badgeCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  infoContainer: {
    alignItems: 'flex-end',
    height: '100%',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  badge: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default MessagesRowComponent;
