import { HeaderComponent, Loading, MessagesRowComponent } from 'components';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import useFetch from 'hooks/useFetch';
import apiChat from 'services/api/chat';
import { useAuth } from 'hooks';
import { IChat } from 'services/models/chat';
import { useCallback, useState } from 'react';

const MessagesScreen = () => {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const { isLoading, data, refetch } = useFetch<IChat[]>({
    callback: () => apiChat.getSingle(authData?.username || ''),
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, [refetch]);

  const navigateToChat = (item: IChat) => {
    navigation.navigate('Chat', item);
  };

  if (isLoading) {
    <Loading isVisible={isLoading} />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderComponent
        title={'Mensajes'}
        onBackPress={() => navigation.dispatch(StackActions.pop(1))}
      />
      <FlatList
        data={data?.slice().reverse()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(item) => item._id || ''}
        renderItem={({ item }) => (
          <MessagesRowComponent
            {...item}
            onPress={() => navigateToChat(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;
