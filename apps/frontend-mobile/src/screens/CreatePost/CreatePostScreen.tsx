import { Ionicons } from '@expo/vector-icons';
import { StackActions, useNavigation } from '@react-navigation/native';
import { HeaderComponent, Loading } from 'components';
import { useAuth } from 'hooks';
import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import apiPost from 'services/api/post';
import { IPost } from 'services/models/post';

const CreatePostScreen = () => {
  const { authData } = useAuth();
  const navigation = useNavigation();
  const [postContent, setPostContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddImage = () => {
    // Implement logic to add images to the post
  };

  const handleSubmitPost = async () => {
    setIsLoading(true);
    const body: IPost = {
      content: postContent,
      author_username: authData?.username || '',
      timestamp: new Date().toISOString(),
    };
    await apiPost.post(body);
    setIsLoading(false);
    navigation.dispatch(StackActions.pop(1));
  };

  if (isLoading) {
    return <Loading isVisible={isLoading} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'Post'}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <TextInput
        style={styles.input}
        placeholder="What's on your mind?"
        multiline
        value={postContent}
        onChangeText={(text) => setPostContent(text)}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddImage}>
        <Ionicons name="add-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmitPost}
        disabled={postContent ? false : true}
      >
        <Ionicons name="send-outline" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    padding: 8,
    borderRadius: 8,
  },
  submitButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    padding: 8,
    borderRadius: 8,
  },
});

export default CreatePostScreen;
