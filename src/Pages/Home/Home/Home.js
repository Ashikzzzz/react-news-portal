import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCart from "../../Shared/NewsSummaryCart/NewsSummaryCart";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h1>Total data : {allNews.length}</h1>
      {allNews.map((news) => (
        <NewsSummaryCart key={news.id} news={news}></NewsSummaryCart>
      ))}
    </div>
  );
};

export default Home;
