import React,{useState, useEffect} from "react";
import {Link, useHistory, useParams} from "react-router-dom"
import Modal from "react-modal";
import "./AddModal.css";
import "./ActivityTeacher.css"

const initialState = {
    name: "",
    description: "",
    duration: "",
    accessCode: ""
}

const ActivityTeacher = () => {
//Activity
const [data, setData] = useState({});

//Modal
const [modalIsOpen, setModalIsOpen] = useState(false);
const [isFeedbackSent, setIsFeedbackSent] = useState(false);
const sendFeedbackHandler = () => {
    setIsFeedbackSent((prevState) => !prevState);
    setModalIsOpen(false)
  };
const [state, setState] = useState(initialState);
const {name, description, duration, accessCode} = state;

const history = useHistory();

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
};
const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !description || !duration || !accessCode) {
        alert("Please provide value in each input field");
    } else {
        /* TO DO SERVER PUSH
        fireDb.child("contacts").push(state, (err) => {
            if(err) {
                toast.error(err);
            } else {
                toast.success("Contact Added Successfully");
            }
        }); */
        alert("Contact Added Successfully");
        setTimeout(() => history.push("/"), 500);
        sendFeedbackHandler();  //close
    }
};
  return(
  <div className="activityTeacherPage">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 m-3 rounded"
          onClick={() => setModalIsOpen(true)}
        >
          +
        </button>
        <div style={{marginTop: "20px"}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>No.</th>
                        <th style={{textAlign: "center"}}>Name</th>
                        <th style={{textAlign: "center"}}>Description</th>
                        <th style={{textAlign: "center"}}>Duration</th>
                        <th style={{textAlign: "center"}}>Code</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                                <th scope="row">{1}</th>
                                <td>{"Diaconita"}</td>
                                <td>{"your mom gay"}</td>
                                <td>{"32"}</td>
                                <td>{"123"}</td>
                </tr>
                <tr>
                                <th scope="row">{1}</th>
                                <td>{"Diaconita"}</td>
                                <td>{"your mom gay"}</td>
                                <td>{"32"}</td>
                                <td>{"123"}</td>
                </tr>
                <tr>
                                <th scope="row">{1}</th>
                                <td>{"Diaconita"}</td>
                                <td>{"your mom gay"}</td>
                                <td>{"32"}</td>
                                <td>{"123"}</td>
                </tr>
                {/* {Object.keys(data).map((id, index) => {
                        // return (
                            
                        // )
                    })} */}
                </tbody>
            </table>
        </div>
        {modalIsOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add a course
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={sendFeedbackHandler}
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
                      <form style={{margin: "auto", padding: "15px", maxWidth: "500px", alignContent: "center"}} onSubmit={handleSubmit}>

                        <label className="nameText">Name</label>
                        <input className="inputField"
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Name..." 
                        value={name} 
                        onChange={handleInputChange}>
                        </input>

                        <label className="descriptionText">Description</label>
                        <input className="inputField"
                        type="text" 
                        id="description" 
                        name="description" 
                        placeholder="Description..." 
                        value={description} 
                        onChange={handleInputChange}>
                        </input>

                        <label className="durationText">Duration in minutes (e.g. 60)</label>
                        <input className="inputField"
                        type="text" 
                        id="duration" 
                        name="duration" 
                        placeholder="Duration..." 
                        value={duration} 
                        onChange={handleInputChange}>
                        </input>

                        <label className="accessCodeText">Access Code</label>
                        <input className="inputField"
                        type="text" 
                        id="accessCode" 
                        name="accessCode" 
                        placeholder="Access Code..." 
                        value={accessCode} 
                        onChange={handleInputChange}>
                        </input>
                      </form>
                 </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-purple-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150 hover:text-purple-500"
                    type="button"
                    onClick={sendFeedbackHandler}
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
        </>
        ) : null}
  </div>
  )
};

export default ActivityTeacher;