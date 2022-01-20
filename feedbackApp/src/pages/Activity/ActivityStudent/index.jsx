import React, { useEffect, useState } from 'react'

import Card from '../../../layout/Card';
import axios from "../../../service/http";

import "./ActivityStudent.css";

const ActivityStudent = () =>{

  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    axios.get("/api/courses").then((response) => {
      console.log(response.data);
      setCourses(response.data)
    })
  }
  

  useEffect(() => {
    
    fetchCourses();
  }, [])

  return (
    <React.Fragment>
      <div className='introSection my-5'>
        <h1 className='coursesTitle text-center hover:uppercase'>All Courses</h1>
        <h4 className='description text-center'>Rate one of your courses </h4>
      </div>
      <div className='container mx-auto flex flex-wrap items-start'>
        <div className='row p-5'>
          <div className='col-8 mx-auto'>
            <div className="row gy-4 p-7 gap-10">
             {
              courses.map((course, index) =>{
                return <Card key={index} data={course}/>
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
