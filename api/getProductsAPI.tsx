import { useEffect, useState } from 'react';
import api from './api';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getProducts = async () =>  {
    try {
      const response = await api.get('/products');
      setResults(response.data.data);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return [getProducts, results, errorMessage];
};