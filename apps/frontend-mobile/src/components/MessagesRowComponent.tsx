import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface MessagesRowComponentProps {
  profilePicture?: string;
  name: string;
  message: string;
  time: string;
  badgeCount?: number;
  onPress: () => void;
}

const MessagesRowComponent = ({
  profilePicture,
  name,
  message,
  time,
  badgeCount,
  onPress,
}: MessagesRowComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {profilePicture ? (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      ) : (
        <View style={styles.profilePicture} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{message}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.time}>{time}</Text>
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
