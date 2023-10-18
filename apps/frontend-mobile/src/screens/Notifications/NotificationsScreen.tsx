import { HeaderComponent, Loading, NotificationRowComponent } from 'components';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useAuth } from 'hooks';
import apiNotification from 'services/api/notification';
import useFetch from 'hooks/useFetch';
import { useCallback, useEffect, useState } from 'react';
import { INotification } from 'services/models/notification';

const notifications = [
  {
    id: '1',
    type: 'like',
    content: 'user liked your post.',
    user_id: '1',
    timestamp: '2020-08-27T08:00:00.000Z',
  },
  {
    id: '2',
    type: 'like',
    content: 'user liked your post.',
    user_id: '1',
    timestamp: '2020-08-27T08:00:00.000Z',
  },
];

const NotificationsScreen = () => {
  const { authData } = useAuth();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const { isLoading, data, refetch } = useFetch({
    callback: () => apiNotification.getSingle(authData?.user_id || ''),
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  if (!data) {
    return <Loading isVisible={isLoading} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'Notificaciones'}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <FlatList
        data={(data as any)?.slice().reverse()}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <NotificationRowComponent
            id={item._id}
            type={item.type}
            content={item.content}
            user_id={item.user_id}
            timestamp={item.timestamp}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
