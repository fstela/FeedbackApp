import {React,useState} from "react";
import coursePic from '../assets/images/coursePic.jpg';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import './Card.css';
import Emojify from 'react-emojione';

// const rateCourseContext = React.createContext();

Modal.setAppElement('#root');
const Card = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg col-md-4 p-4 col-10 mx-auto m-3">
                <img class="w-full" src={props.imgsrc} alt=""></img>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.title}</div>
                    <p class="text-gray-700 text-base">
                    This is a description about the course you are taking.
                    </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 m-3 rounded" onClick={() => setModalIsOpen(true)}>
                     Rate
                </button>
                <Modal className="modal" isOpen={modalIsOpen} shouldCloseOnOverlayClick onRequestClose={() =>setModalIsOpen(false)}>
                    <div className="grid grid-cols-2 sm:justify-items-center mt-4 sm:mt-0 sm:pr-4 gap-12">
                        <div className="mb-auto">
                            <Emojify style={{height: '200%', width:'200%'}}>
                                <span>:D</span>
                            </Emojify>
                        </div>
                        <div className="mb-auto">
                            <Emojify style={{height: '200%', width:'200%'}}>
                                <span>:-/</span>
                            </Emojify>
                        </div>
                        <div className="mb-auto">
                            <Emojify style={{height: '200%', width:'200%'}}>
                                <span>X(</span>
                            </Emojify>
                        </div>
                        <div className="mb-auto">
                            <Emojify style={{height: '200%', width:'200%'}}>
                                <span>:O</span>
                            </Emojify>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                    </div>

                </Modal>
       
            </div>
             
        </>
        
    );

};

export default Card;