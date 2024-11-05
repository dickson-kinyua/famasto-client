import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await fetch(url, { signal: abortCont.signal });

        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const json = await response.json();
        setProducts(json);

        console.log(json);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(error.message);
          console.log("failed to fetch");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    return () => abortCont.abort();
  }, [url]);

  return { products, loading, error };
}
