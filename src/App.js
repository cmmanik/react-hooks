import React, {useState} from 'react';
import Jokes from './Jokes';
import Story from './Story';
import Tasks from './Tasks';

function App() {

  const [serchQuery, setserchQuery] = useState('');
  const cngHandler = event => {
    setserchQuery(event.target.value)
  }

  const serch = () => {
    window.open(`https://google.com/search?q=${serchQuery}`, '_blank')
  }

  const serchKeyPres = event => {
    if(event.key === 'Enter') {
      serch();
    }
  }

  
  return (
    
      <div className="container">
      <div className="form">
        <input type="text" value={serchQuery} onKeyPress={serchKeyPres} onChange={cngHandler} />
        <button onClick={serch}>Serch</button>
      </div>
      <Jokes />
      <Tasks/>
      <Story/>
    </div>
  );
}

export default App;
