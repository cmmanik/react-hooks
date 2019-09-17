import {useState, useEffect} from 'react'

export const useFetch = (url, initValie) => {
    const [result, setResult] = useState(initValie)
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setResult(json))
    },[url]);
    return result;
}
