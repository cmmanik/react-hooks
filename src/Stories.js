import React from "react";
import FetchData from "./FetchData";

const Stories = () => {
  const URL = "https://news-proxy-server.appspot.com/topstories";

  const stories = FetchData(URL, []);

  return (
    <div className={stories}>
      <h3>
        <em>Top Stores!</em>
      </h3>
      {stories.map(story => {
        const { title, time, url, by } = story;
        return (
          <div key={story.id}>
            <div className="Stories">
              <h3>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </h3>
              <p>
                <em>By - {by} </em> at {new Date(time * 1000).toLocaleString()}{" "}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
