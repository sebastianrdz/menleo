import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import FastImage from 'react-native-fast-image';

interface ProfileHeaderProps {
  username: string;
  bio: string;
  profilePicture: { uri: string };
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  bio,
  profilePicture,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image source={profilePicture} style={styles.profilePicture} />
      </View>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  profilePictureContainer: {
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 80, // Make sure this value is half of your image width/height
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
});

export default ProfileHeader;
