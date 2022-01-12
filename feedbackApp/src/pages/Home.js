import React from "react";
import { Layout } from "../layout";
import "./Home.css";
import background from "../AdobeStock_369243587.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";



<button class="btn btn-ghost">ghost</button>;

const Home = (img, alt, imgStart) => {
  const [studentToLogIn, setStudentToLogIn] = useState(true);
  let studentToLogIn2 = true;
  const switchAccountTypeHandler = () => {
    setStudentToLogIn((prevState) => !prevState);
    studentToLogIn2 = studentToLogIn;
  };
  //console.log("11111");
  return (
      <div className="homePage h-full mb-auto row"
           style={{ 
          display:'flex',
          flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
          }}>
        <Layout>

        <div className='col'>
          <div className='home__hero-text-wrapper'>
              <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl homeTitle">
                Rate your course!
              </h1>
              <h6 className="text-1xl leading-snug homeDescription">
                Welcome to our website, the first platform <br /> where teachers
                publish their activities and <br /> students can offer feedback on
                them!
              </h6>

              <div className="btns">
                <div class="box-1">
                  <Link to={"/login"}>
                    <div className="btn btn-one" onClick={!studentToLogIn ? switchAccountTypeHandler : 0}>
                      <span>Continue as a student</span>
                    </div>
                  </Link>
                
                </div>
                <div class="box-2">
                  <Link to={"/login"}>
                    <div className="btn btn-one btn-teacher" onClick={studentToLogIn ? switchAccountTypeHandler : 0}>
                    <span>Continue as a teacher</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home__hero-img-wrapper">
            <img src={background} alt={alt} className='hero__hero-img'></img>
          </div>
        </div>
        </Layout>
      </div>
  );
};
export default Home;
