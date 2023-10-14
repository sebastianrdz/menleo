import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PostComponentProps {
  author: string;
  content: string;
  timestamp: string;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onMenu?: () => void; // Callback for the menu button
}

const PostComponent: React.FC<PostComponentProps> = ({
  author,
  content,
  timestamp,
  onLike,
  onComment,
  onShare,
  onMenu,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.author}>{author}</Text>

        <TouchableOpacity onPress={onMenu}>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onLike}>
          <Ionicons name="heart-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onComment}>
          <Ionicons name="chatbubble-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare}>
          <Ionicons name="paper-plane-outline" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
});

export default PostComponent;
