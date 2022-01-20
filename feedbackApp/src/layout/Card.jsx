import { React, useState } from "react";
// import SurprisedFace from "../assets/images/SurprisedFace.svg";
// import AngryFace from "../assets/images/AngryFace.svg";
// import SmileyFace from "../assets/images/SmileyFace.svg";
// import ConfusedFace from "../assets/images/ConfusedFace.svg";
import Modal from "react-modal";
import "./Card.css";


Modal.setAppElement("#root");

const Card = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);
  const sendFeedbackHandler = () => {
    setIsFeedbackSent((prevState) => !prevState);
    setModalIsOpen(false)
  };
  
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg col-md-4 p-4 col-10 mx-auto m-3">
        <img className="w-full" src={props.imgsrc} alt=""></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            This is a description about the course you are taking.
          </p>
            <label id="accessCodeText" for="accessCode">Course Access Code: </label>
            <input type="text" id="accessCode"  ></input>
          
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 m-3 ml-6 rounded"
          onClick={() =>{
                if(document.getElementById('accessCode').value.length !== 0){
                  setModalIsOpen(true)
                }
                
          } }
        >
          Rate
        </button>
        <div className="modalContainer">
          <Modal
            className="modal"
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="grid justify-items-center grid-cols-2 mt-4 sm:mt-0 sm:pr-4 gap-12 emojiGrid">
              <div className="mb-auto emojiHover">
                <img src="/media/SurprisedFace.svg" alt="" className="emojiFace" onClick={sendFeedbackHandler}/>
              </div>
              <div className="mb-auto emojiHover">
                <img src="/media/SmileyFace.svg" alt="" className="emojiFace" onClick={sendFeedbackHandler}/>
              </div>
              <div className="mb-auto emojiHover">
                <img src="/media/AngryFace.svg" alt="" className="emojiFace" onClick={sendFeedbackHandler}/>
              </div>
              <div className="mb-auto emojiHover">
                <img src="/media/ConfusedFace.svg" alt="" className="emojiFace" onClick={sendFeedbackHandler}/>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Card;
