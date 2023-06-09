import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../request";

const Home = () => {
  return (
    <div className="">
      <Main />
      <Row title="up coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top rated" fetchURL={requests.requestTopRated} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
