import React, { useState, useEffect } from "react";
import axios from "../../../service/http";

import "./ActivityTeacher.css";


const AddCourseModal = (props) => {

  const [state, setState] = useState({
    name: "",
    description: "",
    duration: "",
    accessCode: "",
  });
  const { courseName, courseDescription, durationInMinutes, accessCode } = state;
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (
      !courseName ||
      !courseDescription ||
      !durationInMinutes ||
      !accessCode
    ) {
      setError("All fileds are required!");
    } else {
      const data = {
        courseName: courseName,
        courseDescription: courseDescription,
        durationInMinutes: durationInMinutes,
        accessCode: accessCode,
      };
      await axios.post("/api/courses", data).then(
        () => {
          props.handleCourseAdded();
        },
        (err) => {
          setError(err.response.data.error);
        }).catch(err => {
          setError("Server error");
        });
    }
  };

  return (<>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Add a course</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => props.handleClose()}
            >
              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              Please fill in the course data:
            </p>
            <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
              <form
                style={{
                  margin: "auto",
                  padding: "15px",
                  maxWidth: "500px",
                  alignContent: "center",
                }}
                onSubmit={handleSubmit}
              >
                <label className="nameText">Name</label>
                <input
                  className="inputField"
                  type="text"
                  name="courseName"
                  id="courseName"
                  placeholder="Name..."
                  value={courseName}
                  onChange={handleInputChange}
                ></input>

                <label className="descriptionText">Description</label>
                <input
                  className="inputField"
                  type="text"
                  name="courseDescription"
                  id="courseDescription"
                  placeholder="Description..."
                  value={courseDescription}
                  onChange={handleInputChange}
                ></input>

                <label className="durationText">
                  Duration in minutes (e.g. 60)
                </label>
                <input
                  className="inputField"
                  type="number"
                  name="durationInMinutes"
                  id="durationInMinutes"
                  placeholder="Duration..."
                  value={durationInMinutes}
                  onChange={handleInputChange}
                ></input>

                <label className="accessCodeText">Access Code</label>
                <input
                  className="inputField"
                  type="text"
                  id="accessCode"
                  name="accessCode"
                  placeholder="Access Code..."
                  value={accessCode}
                  onChange={handleInputChange}
                ></input>

              <p className="mt-5 text-red-500 text-center text-sm">{error}</p>
              </form>
            </div>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-purple-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150 hover:text-purple-500"
              type="button"
              onClick={() => props.handleClose()}
            >
              Close
            </button>
            <button
              className="bg-purple-400  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-purple-500"
              type="button"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>)
}

const ViewGradesModal = (props) => {
  const selectedData = props.data;
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-black text-2xl font-semibold">
                Course details
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.handleClose()}
              >
                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none" >
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Details about this course:
              </p>
              <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                <form
                  style={{
                    margin: "auto",
                    padding: "20px",
                    maxWidth: "500px",
                    alignContent: "center",
                  }}
                >
                  <label className="nameViewText">
                    <b>Name: </b>
                    {selectedData.courseName}
                  </label>
                  <br></br>
                  <label className="descriptionViewText">
                    <b>Description: </b>
                    {selectedData.courseDescription}
                  </label>
                  <br></br>
                  <label className="durationViewText">
                    <b>Duration: </b>
                    {selectedData.durationInMinutes}
                  </label>
                  <br></br>
                  <label className="accessCodeViewText">
                    <b>Access Code: </b>
                    {selectedData.accessCode}
                  </label>
                  <div className="grid grid-cols-4 mt-4 sm:mt-0 sm:pr-4 gap-1 emojiGrid">
                    <div className="mb-auto emojiHover">
                      <img
                        src="/media/SurprisedFace.svg"
                        alt="SurprisedFace"
                        className="emojiFace emojiFaceSmall"
                      />
                      {selectedData.feedbackSurprised
                        ? selectedData.feedbackSurprised
                        : 0}
                    </div>
                    <div className="mb-auto emojiHover">
                      <img
                        src="/media/SmileyFace.svg"
                        alt="SmileyFace"
                        className="emojiFace emojiFaceSmall"
                      />
                      {selectedData.feedbackSmiley
                        ? selectedData.feedbackSmiley
                        : 0}
                    </div>
                    <div className="mb-auto emojiHover">
                      <img
                        src="/media/AngryFace.svg"
                        alt="AngryFace"
                        className="emojiFace emojiFaceSmall"
                      />
                      {selectedData.feedbackFrowney
                        ? selectedData.feedbackFrowney
                        : 0}
                    </div>
                    <div className="mb-auto emojiHover">
                      <img
                         src="/media/ConfusedFace.svg"
                        alt="ConfusedFace"
                        className="emojiFace emojiFaceSmall"
                      />
                      {selectedData.feedbackConfused
                        ? selectedData.feedbackConfused
                        : 0}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-purple-400  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-purple-500"
                type="button"
                onClick={() => props.handleClose()}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

const ActivityTeacher = () => {

  //Activity
  const [courses, setCourses] = useState([]);

  const getCoursesData = async () => {
    const { data } = await axios.get("/api/courses").catch(e => {alert("Server error"); console.log(e)});
    setCourses(data);
  };

  useEffect(() => {
    getCoursesData();
  }, []);

  const [selectedCourse, setSelectedCourse] = useState();
  const [viewModalIsOpen, setViewModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const viewGrades = (course) => {
    setSelectedCourse(course);
    setViewModalIsOpen(true);
  }
  
  return (
    <div className="ontainer mx-auto px-4 sm:px-8">
      
      <div style={{ marginTop: "20px" }}>
      <div className="py-8">
      <div className="flex justify-between">
      <h2 className="text-2xl font-semibold leading-tight">My Courses</h2>
      <button 
        className="btn-add rounded-full px-4 py-2 font-semibold lowercase duration-700" 
        onClick={() => setModalIsOpen(true)}> + Add course</button>
    </div>
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      ></div>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">No.</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Duration</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Code</th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <th className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{course.id}</th>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{course.courseName}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{course.courseDescription}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{course.durationInMinutes}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{course.accessCode}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      className="btn-add rounded-full px-4 py-2 lowercase duration-700" 
                      onClick={() => {
                        viewGrades(course);
                      }}
                    >
                      <b>grades</b>
                    </button>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        </div>
      </div>
      {modalIsOpen && <AddCourseModal handleClose={() => setModalIsOpen(false)} handleCourseAdded={() => {
        setModalIsOpen(false);
        getCoursesData();
      }}/>}
      {viewModalIsOpen && <ViewGradesModal data={selectedCourse} handleClose={() => setViewModalIsOpen(false)}/>}
    </div>
  );
};


export default ActivityTeacher;
