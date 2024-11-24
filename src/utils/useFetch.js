import { useState, useEffect, useRef } from 'react';

function useFetch(url, options = {}) {
  const { method = 'GET', headers = {}, body = null, dependencies = [] } = options;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);
  const prevUrlRef = useRef(url);

  useEffect(() => {
    if (prevUrlRef.current === url && hasFetched.current) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        prevUrlRef.current = url;
        hasFetched.current = true;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }

  }, [url, method, body, headers, ...dependencies]);

  return { data, error, loading };
}

export default useFetch;
