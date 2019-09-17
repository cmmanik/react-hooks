import React from 'react';
import { useFetch } from './FetchData';

const Jokes = () => {

    const {setup, punchline} = useFetch('https://official-joke-api.appspot.com/random_joke',{})
 
   return (
       <div>
           <h1>wTf !! Jokes</h1>
           <h3>{setup}</h3>
           <p><em>{punchline}</em></p>
       </div>
   )

};

export default Jokes;