import React from "react";
import './HeaderArea.css';
import {AiFillHome, AiOutlineSearch,AiOutlineWallet,} from 'react-icons/ai'
import { FaUsers ,FaRegFlag, FaPlusCircle, FaFacebookMessenger, FaBell} from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import MainArea from "../MainArea/MainArea";
function HeaderArea() {
    return(
        <div className="HomePage">
           <div className="header">
                <div className="first-header">
                    <div className="logo">
                        <img src="/Logo.png" alt="logo" style={{height:"50px",padding:"2rem"}}/>
                    </div>
                    <div className="search">
                        <AiOutlineSearch style={{height:'4rem'}}/>
                        <input placeholder="Serach Facebook" type="search"/>
                    </div>
                </div>
                <div className="middle-header">
                    <div className="icon">
                        <AiFillHome fontSize="2.3rem"  color="#1877F2"/>
                    </div>
                    <div className="icon">
                        <FaRegFlag fontSize="2.3rem"/>
                    </div>
                    <div className="icon">
                        <MdOndemandVideo fontSize="2.3rem"/>
                    </div>
                    <div className="icon">
                        <FaUsers fontSize="2.3rem"/>
                    </div>
                    <div className="icon">
                        <AiOutlineWallet fontSize="2.3rem"/>
                    </div>
                </div>
                <div className="third-header">
                    <div className="plus">
                        <FaPlusCircle fontSize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontSize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaBell fontSize="2rem"/>
                    </div>
                    <div className="pluss">
                        <img src="./image3.jpg" alt="dp" style={{height:"30px", width:"60px"}}/>
                    </div>
                </div>
           </div>
           <MainArea/>
        </div>
        
    )
}

export default HeaderArea;