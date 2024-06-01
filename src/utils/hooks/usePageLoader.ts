import { useState, useEffect } from "react";

type TUsePageLoader = [boolean, Function];

export default function usePageLoader(
  time = 700,
  initialState = false
): TUsePageLoader {
  const [loading, setLoading] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!initialState);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return [loading, setLoading];
}
