import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderComponent, ProfileHeader } from 'components';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ProfileTabPosts from './ProfileTabPosts';
import ProfileTabPrograms from './ProfileTabPrograms';
import ProfileTabWorkouts from './ProfileTabWorkouts';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('posts'); // Initialize with the first tab

  const headerActions = [
    {
      onPress: () => navigation.navigate(''),
      icon: <Ionicons name="create-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate(''),
      icon: <Ionicons name="share-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Settings'),
      icon: <Ionicons name="settings-outline" size={24} color="black" />,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return <ProfileTabPosts />;
      case 'programs':
        return <ProfileTabPrograms />;
      case 'workouts':
        return <ProfileTabWorkouts />;
      default:
        return <ProfileTabPosts />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'JOHN DOE'}
        subtitle={'@johndoe123'}
        actions={headerActions}
      />
      <ProfileHeader
        username={'@johndoe123'}
        bio={'Eat, gym, sleep, repeat...'}
        profilePicture={{ uri: 'https://picsum.photos/seed/6/80' }}
      />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabContainer}
        >
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'posts' ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab('posts')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'posts' ? styles.activeText : null,
              ]}
            >
              PUBLICACIONES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'programs' ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab('programs')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'programs' ? styles.activeText : null,
              ]}
            >
              PROGRAMAS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'workouts' ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab('workouts')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'workouts' ? styles.activeText : null,
              ]}
            >
              ENTRENAMIENTOS
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {renderTabContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    borderBottomColor: '#fff',
  },
  activeTab: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontWeight: 'bold',
    color: '#B4B4B4',
  },
  activeText: {
    color: '#000',
  },
});

export default ProfileScreen;
