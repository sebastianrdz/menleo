import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

interface UseFetchProps<Model> {
  callback: () => Promise<Model>;
}

function useFetch<Model>({ callback }: UseFetchProps<Model>) {
  const [data, setData] = useState<Model>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await callback();
      setData(response);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      Alert.alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
}

export default useFetch;
