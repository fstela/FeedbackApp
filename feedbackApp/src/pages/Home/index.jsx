import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../layout";

import "./Home.css";


const Home = (img, alt, imgStart) => {

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
                <div className="box-1">
                  <Link to={"/auth?type=student"}>
                    <div className="btn " >
                    {/* btn-one btn-teacher */}
                      <span>Continue as a student</span>
                    </div>
                  </Link>
                
                </div>
                <div className="box-2">
                  <Link to={"/auth?type=teacher"}>
                    <div className="btn " >
                    <span>Continue as a teacher</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="home__hero-img-wrapper">
            <img src="/media/home.jpeg" alt={alt} className='hero__hero-img'></img>
          </div>
        </div>
        </Layout>
      </div>
  );
};

export default Home;
