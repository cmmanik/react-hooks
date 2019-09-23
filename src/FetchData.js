import { useEffect, useState } from "react";

const FetchData = (url, initState) => {
  const [result, setResult] = useState(initState);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setResult(json))
      .catch(err => console.log(err));
  }, [url]);
  return result;
};

export default FetchData;
