import { Loading, PostComponent } from 'components';
import { useAuth } from 'hooks';
import useFetch from 'hooks/useFetch';
import { useState, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import apiPost from 'services/api/post';
import { IPost } from 'services/models/post';

const ProfileTabPosts = () => {
  const { authData } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const { isLoading, data, refetch } = useFetch<IPost[]>({
    callback: () => apiPost.getSingle(authData?.username || ''),
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
    <FlatList
      data={data?.slice().reverse()}
      keyExtractor={(item) => item._id || ''}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => <PostComponent {...item} />}
    />
  );
};

export default ProfileTabPosts;
