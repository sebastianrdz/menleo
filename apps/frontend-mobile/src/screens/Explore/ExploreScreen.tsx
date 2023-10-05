import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderComponent } from 'components';
import { WorkInProgressContainer } from 'containers';
import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Tab1 = () => <Text>Tab 1 Content</Text>;
const Tab2 = () => <Text>Tab 2 Content</Text>;
const Tab3 = () => <Text>Tab 3 Content</Text>;

const ExploreScreen = () => {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('tab1'); // Initialize with the first tab

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <Tab1 />;
      case 'tab2':
        return <Tab2 />;
      case 'tab3':
        return <Tab3 />;
      default:
        return <Tab1 />;
    }
  };

  const headerActions = [
    {
      onPress: () => navigation.navigate('Create'),
      icon: <Ionicons name="add-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Search'),
      icon: <Ionicons name="search-outline" size={24} color="black" />,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'EXPLORAR'}
        subtitle={'Domingo 16, Agosto'}
        actions={headerActions}
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
              activeTab === 'tab1' ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab('tab1')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'tab1' ? styles.activeText : null,
              ]}
            >
              DESTACADO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'tab2' ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab('tab2')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'tab2' ? styles.activeText : null,
              ]}
            >
              ENTRENAMIENTOS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'tab3' ? styles.activeTab : null,
            ]}
            onPress={() => setActiveTab('tab3')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'tab3' ? styles.activeText : null,
              ]}
            >
              PROGRAMAS
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={{ padding: 16 }}>{renderTabContent()}</View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20, // Match the borderRadius with the container
    borderWidth: 1,
    backgroundColor: '#fff', // Background color for the tabs
    marginRight: 20,
  },
  activeTab: {
    backgroundColor: 'black', // Change the background color for the active tab
  },
  tabText: {
    fontWeight: 'bold',
  },
  activeText: {
    color: 'white',
  },
});
