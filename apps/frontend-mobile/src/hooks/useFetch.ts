import { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

interface UseFetchProps {
  callback: () => Promise<any>;
}

const useFetch = ({ callback }: UseFetchProps) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
};

export default useFetch;
