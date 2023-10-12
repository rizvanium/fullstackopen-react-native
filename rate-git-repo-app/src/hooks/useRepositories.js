import { useEffect } from 'react';
import { useState } from 'react';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState();

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch('http://172.27.238.72:5000/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return {
    repositories,
    loading,
    refetch: fetchRepositories,
  };
};

export default useRepositories;
