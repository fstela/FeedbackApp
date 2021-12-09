import React from "react";
import { Layout } from "../layout";
import "./Home.css";
<button class="btn btn-ghost">ghost</button>;

const Home = () => {
  console.log("11111");
  return (
    <div className="homePage">
      <Layout>
        <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl homeTitle">
          Rate your course!
        </h1>
        <h6 className="text-1xl leading-snug homeDescription">
          Welcome to our website, the first platform <br /> where teachers
          publish their activities and <br /> students can offer feedback on
          them!
        </h6>

        <div className="btns p-20 bg-cover card bg-base-200">
          <button className="btnAccount btn btn-primary">
            Continue as student
          </button>
          <button className="btnAccount btn btn-primary">
            Continue as teacher
          </button>
        </div>
      </Layout>
    </div>
  );
};
export default Home;
