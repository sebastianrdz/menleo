import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface NotificationRowComponentProps {
  type: string;
  content: string;
  timestamp: string;
}

const NotificationRowComponent = ({
  type,
  content,
  timestamp,
}: NotificationRowComponentProps) => {
  const iconName = () => {
    switch (type) {
      case 'like':
        return 'ios-heart-outline';
      case 'comment':
        return 'ios-chatbubbles-outline';
      case 'follow':
        return 'ios-person-add-outline';
      default:
        return 'ios-heart-outline';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePicture}>
        <Ionicons
          name={iconName()}
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{type.toLocaleUpperCase()}</Text>
        <Text style={styles.description}>{content}</Text>
        <Text style={styles.description}>{timestamp.split('-')[0]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
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
  icon: {
    marginLeft: 10,
  },
});

export default NotificationRowComponent;
