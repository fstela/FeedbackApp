import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';
import CourseData from './CourseData';

const Courses = () =>{
  return (
    <React.Fragment>
      <div className='introSection my-5'>
        <h1 className='text-center text-capitalize'>All Courses</h1>
        <h4 className='text-center'>Rate one of your courses</h4>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-8 mx-auto'>
            <div class="row gy-3">
             {
              CourseData.map((val, ind) =>{
                return <Card key={ind}

                    imgsrc={val.imgsrc}
                    title={val.title}

                />
              })
             }

            </div>   
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default Courses;
