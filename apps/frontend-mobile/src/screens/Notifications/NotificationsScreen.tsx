import { HeaderComponent, Loading, NotificationRowComponent } from 'components';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import { useAuth } from 'hooks';
import apiNotification from 'services/api/notification';
import useFetch from 'hooks/useFetch';
import { useCallback, useState } from 'react';
import { INotification } from 'services/models/notification';
const NotificationsScreen = () => {
  const { authData } = useAuth();
  const navigation = useNavigation();
  const { isLoading, data, refetch } = useFetch<INotification[]>({
    callback: () => apiNotification.getSingle(authData?.user_id || ''),
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, [refetch]);

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
        data={data?.slice().reverse()}
        keyExtractor={(item) => item._id || ''}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <NotificationRowComponent {...item} />}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
