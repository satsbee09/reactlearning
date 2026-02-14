import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    const fetchCurrency = async () => {
      setLoading(true);
      setError(null);

      const primaryURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
      const fallbackURL = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;

      try {
        // Try Primary CDN
        let response = await fetch(primaryURL);

        if (!response.ok) {
          throw new Error("Primary CDN failed");
        }

        let result = await response.json();
        setData(result[currency]);

      } catch (primaryError) {
        console.warn("Primary failed, trying fallback...");

        try {
          // Try Fallback URL
          let response = await fetch(fallbackURL);

          if (!response.ok) {
            throw new Error("Fallback also failed");
          }

          let result = await response.json();
          setData(result[currency]);

        } catch (fallbackError) {
          setError("Failed to fetch currency data");
          setData({});
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCurrency();
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;
