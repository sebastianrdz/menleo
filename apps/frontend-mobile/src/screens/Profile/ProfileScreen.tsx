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
import { useAuth } from 'hooks';
import TabHeaderActions from 'utils/TabHeaderActions';

const ProfileScreen = () => {
  const { authData } = useAuth();
  const [activeTab, setActiveTab] = useState('posts'); // Initialize with the first tab

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
        title={'PERFIL'}
        subtitle={'Domingo 16, Agosto'}
        actions={TabHeaderActions('Profile')}
      />
      <ProfileHeader
        username={`@${authData?.username}` || '@user127492'}
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
