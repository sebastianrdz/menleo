import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HeaderComponent, Loading, PostComponent } from 'components';
import { useAuth } from 'hooks';
import useFetch from 'hooks/useFetch';
import { useCallback, useState } from 'react';
import { RefreshControl, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import apiPost from 'services/api/post';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  const headerActions = [
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

  const { isLoading, data, refetch } = useFetch({
    callback: () => apiPost.getAll(),
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  if (isLoading) {
    <Loading isVisible={isLoading} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={authData?.username ? authData.username : 'Home'}
        subtitle={'Bienvenido de regreso'}
        actions={headerActions}
      />
      <FlatList
        data={(data as any)?.slice().reverse()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <PostComponent
            author={item.author_username}
            content={item.content}
            timestamp={item.timestamp}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
