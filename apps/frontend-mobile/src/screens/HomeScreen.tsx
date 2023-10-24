import { HeaderComponent, Loading, PostComponent } from 'components';
import { useAuth } from 'hooks';
import useFetch from 'hooks/useFetch';
import { useCallback, useState } from 'react';
import { RefreshControl, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import apiPost from 'services/api/post';
import { IPost } from 'services/models/post';
import TabHeaderActions from 'utils/TabHeaderActions';

const HomeScreen = () => {
  const { authData } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  const { isLoading, data, refetch } = useFetch<IPost[]>({
    callback: () => apiPost.getAll(),
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, [refetch]);

  if (isLoading) {
    <Loading isVisible={isLoading} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={authData?.username ? authData.username : 'Home'}
        subtitle={'Bienvenido de regreso'}
        actions={TabHeaderActions('Home')}
      />
      <FlatList
        data={data?.slice().reverse()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(item) => item._id || ''}
        renderItem={({ item }) => <PostComponent {...item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
