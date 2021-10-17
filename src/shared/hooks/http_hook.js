import { useState, useCallback, useRef, useEffect } from "react";

import axios from "../../config/axios";

export const useHttpClient = (props) => {
  const [loadingMode, setLoadingMode] = useState(false);
  const [error, setError] = useState();

  //  <!-- useref hook to abort request when switching pages -->
  const activeHttpReq = useRef([]);

  //  <!-- async function with callback -->
  const sendRequest = useCallback(async (url, method = "get", body = null) => {
    setLoadingMode(true);

    //  <!-- browser supported api -->
    const abortCtrl = new AbortController();
    activeHttpReq.current.push(abortCtrl);

    try {
      const response = await axios({
        method: method,
        url: url,
        data: body,
        // signal: abortCtrl.signal,
      });

      activeHttpReq.current = activeHttpReq.current.filter(
        (reqCtrl) => reqCtrl !== abortCtrl
      );

      setLoadingMode(false);
      return response;
    } catch (err) {
      setError(err.response.data.message);
      setLoadingMode(false);
      throw err;
    }
  }, []);

  //  <!-- error cleaner state -->
  const clearError = () => {
    setError(null);
  };

  //  <!-- to clean up data when component unmounts -->
  useEffect(() => {
    return () => {
      activeHttpReq.current.forEach((aC) => aC.abort());
    };
  }, []);

  return { loadingMode, error, sendRequest, clearError };
};

// export default useHttpClient; // it will throw Attempted import error
