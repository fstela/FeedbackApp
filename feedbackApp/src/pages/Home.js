import React from "react";
import { Layout } from "../layout";
import "./Home.css";

const Home = () => {
  console.log("11111");
  return (
    <Layout>
      <h1 className=" xl:text-6xl lg:text-5xl sm:text-4xl text-3xl homeTitle">
        Rate your course!
      </h1>
    </Layout>
  );
};
export default Home;
