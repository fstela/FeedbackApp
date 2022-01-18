import React from 'react'
import Card from '../layout/Card';
import CourseData from '../layout/CourseData';
import "./ActivityStudent.css";

const ActivityStudent = () =>{
  return (
    <React.Fragment>
      <div className='introSection my-5'>
        <h1 className='coursesTitle text-center hover:uppercase'>All Courses</h1>
        <h4 className='description text-center'>Rate one of your courses </h4>
      </div>
      <div className='container mx-auto flex flex-wrap items-start'>
        <div className='row p-5'>
          <div className='col-8 mx-auto'>
            <div class="row gy-4 p-7">
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


export default ActivityStudent;
