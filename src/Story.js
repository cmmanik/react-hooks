import React from 'react';
import { useFetch } from './FetchData';

const Story = () => {

   
    const story = useFetch('https://news-proxy-server.appspot.com/topstories', [])

    return (
      
          <div className="Stories">
                {story.map(item => {
                    let {id, by, time, title, url} = item;
                    return (
                        <div className="card" key={id}>
                            
                            <div className="card-body">
                                <p><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></p>
                                <p>by - <em>{by}</em> - {new Date(time * 1000).toLocaleString()} </p>
                            </div>
                        </div>
                    )

                })}
        </div>   
        
    );
};

export default Story;