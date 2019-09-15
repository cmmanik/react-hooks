import React,{useState, useEffect} from 'react';


const fetchData = (url, initValue) => {

    useEffect(() => {
        fetch(url)
    })
}

const Jokes = () => {

    const [Jokes, setJokes] = useState({})

   useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response =>response.json())
            .then(data => {
                setJokes(data)
            })
   }, [])

   console.log(Jokes)
   const {setup, punchline} = Jokes;
   return (
       <div>
           <h1>wTf !! Jokes</h1>
           <h3>{setup}</h3>
           <p><em>{punchline}</em></p>
       </div>
   )

};

export default Jokes;