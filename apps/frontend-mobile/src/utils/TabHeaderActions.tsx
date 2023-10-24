import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

type TabsHeaderActionsOption = 'Home' | 'Explore' | 'Progress' | 'Profile';

const TabHeaderActions = (option: TabsHeaderActionsOption) => {
  const navigation = useNavigation();

  const homeHeaderActions = [
    {
      onPress: () => navigation.navigate('CreatePost'),
      icon: <Ionicons name="add-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Notifications'),
      icon: <Ionicons name="notifications-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Messages'),
      icon: <Ionicons name="mail-outline" size={24} color="black" />,
    },
  ];

  const exploreHeaderActions = [
    {
      onPress: () => navigation.navigate('Create'),
      icon: <Ionicons name="add-outline" size={24} color="black" />,
    },
    {
      onPress: () => navigation.navigate('Search'),
      icon: <Ionicons name="search-outline" size={24} color="black" />,
    },
  ];

  const profileHeaderActions = [
    // {
    //   onPress: () => navigation.navigate(''),
    //   icon: <Ionicons name="create-outline" size={24} color="black" />,
    // },
    // {
    //   onPress: () => navigation.navigate(''),
    //   icon: <Ionicons name="share-outline" size={24} color="black" />,
    // },
    {
      onPress: () => navigation.navigate('Settings'),
      icon: <Ionicons name="settings-outline" size={24} color="black" />,
    },
  ];

  switch (option) {
    case 'Home':
      return homeHeaderActions;
    case 'Explore':
      return exploreHeaderActions;
    case 'Progress':
      return [];
    case 'Profile':
      return profileHeaderActions;
    default:
      return [];
  }
};

export default TabHeaderActions;
