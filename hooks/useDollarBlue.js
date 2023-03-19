import { useState, useEffect } from "react";

export default function useDollarBlue() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/dollar-blue")
      .then((res) => {
        setLoading(true)
        return res.json();
      })
      .then((data) => {
        setData(data)
        setLoading(false)
        return
    })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(err);
      });
  }, []);

  return { loading, data, error };
}
