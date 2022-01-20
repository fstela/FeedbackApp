import { React, useState } from "react";
import Modal from "react-modal";
import axios from "../service/http";
import "./Card.css";


Modal.setAppElement("#root");

const Card = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [accessCode, setAccessCode] = useState();;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const grade = (vote) => {
    setModalIsOpen(false);
    axios.post(`/api/courses/${props.data.id}/grade`, {
      accessCode: accessCode,
      grade: vote
    }).then((_) => {
      setSuccess("Grade registered");
    }, (err) => {
      setError(err.response.data.error);
    }).catch(e => {alert("Server error"); console.log(e)});
  };
  
  const course = props.data;

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg col-md-4 p-4 col-10 mx-auto m-3">
        <img className="w-full" src="/media/coursePic.jpg" alt=""></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{course.courseName}</div>
          <p className="text-gray-700 text-base" className="mt-5 mb-5">
            {course.courseDescription}
          </p>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          {success && <p className="text-green-500 mb-2">{success}</p>}
          <label id="accessCodeText" htmlFor="accessCode" className="text-sm lowercase">Course Access Code</label>
          <input type="text" id="accessCode" className="p-2 rounded w-full" onChange={(e) => setAccessCode(e.target.value)} ></input>
          
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 m-3 ml-6 rounded"
          onClick={() => {
            setError(null);
            setSuccess(null);
            if(!accessCode) {
              setError("Please set the access code")
            } else {
              setModalIsOpen(true)
            }
          }} 
        >
          Rate
        </button>
        <div className="modalContainer">
          {modalIsOpen && <Modal
            className="modal"
            isOpen={true}
            shouldCloseOnOverlayClick
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="grid justify-items-center grid-cols-2 mt-4 sm:mt-0 sm:pr-4 gap-12 emojiGrid">
              <div className="mb-auto emojiHover cursor-pointer">
                <img src="/media/SurprisedFace.svg" alt="" className="emojiFace" onClick={() => grade("surprised")}/>
              </div>
              <div className="mb-auto emojiHover cursor-pointer">
                <img src="/media/SmileyFace.svg" alt="" className="emojiFace" onClick={() => grade("smiley")}/>
              </div>
              <div className="mb-auto emojiHover cursor-pointer">
                <img src="/media/AngryFace.svg" alt="" className="emojiFace" onClick={() => grade("frowney")}/>
              </div>
              <div className="mb-auto emojiHover cursor-pointer">
                <img src="/media/ConfusedFace.svg" alt="" className="emojiFace" onClick={() => grade("confused")}/>
              </div>
            </div>
          </Modal> }
        </div>
      </div>
    </>
  );
};

export default Card;
