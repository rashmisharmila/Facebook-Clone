import React from "react";
import './MainArea.css';
import { FaAngleDown, FaCommentAlt, FaFacebookMessenger, FaFontAwesomeFlag, FaGrin, FaMedrt, FaRegShareSquare, FaRegThumbsUp, FaUserFriends } from 'react-icons/fa';
import { AiFillFileImage } from "react-icons/ai";
import { MdMoreHoriz, MdSearch, MdVideoCall } from "react-icons/md";
function MainArea() {
    return (

        <div className="main">
            <div className="rightSide">
                <div className="profileImage">
                    <div className="Profiles">
                        <img src="./image3.jpg" alt="logo" style={{ height: "35px", padding: "1rem" }} />
                        Rashmi Sharmila
                    </div>
                    <div className="SideNavi">
                       <FaUserFriends className="rightSideIcon" />
                        <div>Friends</div>
                    </div>
                    <div className="SideNavi">
                        <FaFontAwesomeFlag className="rightSideIcon" />
                        <div>Pages</div>
                    </div>
                    <div className="SideNavi">
                        <FaMedrt className="rightSideIcon" />
                        <div>COVID-19 Informetions Center</div>
                    </div>

                    <div className="SideNavi">
                        <FaFacebookMessenger className="rightSideIcon" />
                        <div>Messenger Kids</div>
                    </div>
                    <div className="SideNaviSeeMore">
                        <FaAngleDown className="seeMore" />
                        <div>See More</div>
                    </div>
                    <br></br>
                    <div className="pages">
                            <img src="image4.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            TechTrove
                        </div>
                    <div className="pages">
                            <img src="image4.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            ByteBurst
                        </div>
                    <div className="pages">
                            <img src="image4.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            CyberSphere
                        </div>
                    <div className="pages">
                            <img src="image4.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            DataDazzle
                        </div>
                    <div className="SideNaviSeeMore">
                        <FaAngleDown className="seeMore" />
                        <div>See More</div>
                    </div>
                </div>
                

            </div>
            <div className="mainScreen">
                    <div className="storyPart">
                        <div className="strory">
                            <img src="/image3.jpg" alt="storyImage" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Rashmi Sharmila

                        </div>
                        <div className="strory" style={{backgroundImage: `url(${'https://www.freepik.com/free-photo/medium-shot-woman-working-late-night_38170641.htm#&position=7&from_view=collections&uuid=4e8a1a7d-8507-4597-b130-d8331f87a7ce'})`}}>
                            <img src="/image5.png" alt="storyImage" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Ishan Kaushalya

                        </div>
                        <div className="strory">
                            <img src="/image5.png" alt="storyImage" style={{ height: "60px", width: "50px", borderRadius: "60%" }} />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Vishmi Anjali

                        </div>
                    </div>

                    <div className="mainPostContainer">
                        <div className="text">
                            <div className="post">
                                <img src="/image3.jpg" alt="post" />
                                <input type="Mind" placeholder="   What's on your mind, Rashmi?" />

                            </div>
                            <div className="call">
                                <div className="ico">
                                    <div className="icone">
                                        <MdVideoCall fontSize="2.5rem" color="#ee2b49" />
                                        <div style={{paddingRight:"2px"}}>LiveVideo</div>
                                    </div>
                                    <div className="icone">
                                        <AiFillFileImage fontSize="2.5rem" color="#4fb86a" />
                                        <div>Photo/Video</div>
                                    </div>
                                    <div className="icone">
                                        <FaGrin fontSize="2.5rem" color="#e8bb4f" />
                                        <div>Felling/Activity</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="posted">
                            <div className="poster">
                                <div className="simplilearn">
                                    <img src="/image3.jpg" alt="Img" style={{ height: "50px", width: "50px" }} />
                                    Ava Davis
                                    <div className="update">updated her profile picture</div>

                                </div>
                                <div className="edit"><MdMoreHoriz fontSize="1.5rem" /></div>
                            </div>
                            <div className="caption">
                                Please Like,comment and Subscribe to our Youtube chaneel.
                            </div>
                            <br></br>
                            <div className="facebooking">
                                <img src="image1.jpg" alt="dp" style={{ height: "auto", width: "100%" }} />

                            </div>
                            <div className="comment">
                                <div className="Like">
                                    <FaRegThumbsUp color="gray" />
                                    Like
                                </div>
                                <div className="Like">
                                    <FaCommentAlt color="gray" />
                                    Comment
                                </div>
                                <div className="Like">
                                    <FaRegShareSquare color="gray" />
                                    Share
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            <div className="LeftSide">
                    <div className="contact">
                        <div className="contacts">
                            Contacts
                        </div>
                        <div className="chatIcon">
                            <div className="icons">
                                <MdSearch fontSize="1.8rem" />
                            </div>
                            <div className="icons">
                                <MdMoreHoriz fontSize="1.8rem" />
                            </div>
                        </div>

                    </div>
                    <div className="concise">
                        <div className="profiless">
                            <img src="image3.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Harper White
                        </div>
                        <div className="profiless">
                            <img src="image3.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Olivia Taylor
                        </div>
                        <div className="profiless">
                            <img src="image3.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Emma Johnson
                        </div>
                        <div className="profiless">
                            <img src="image3.jpg" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Ava Davis
                        </div>
                    </div>
                </div> 


        </div>
    );
}
export default MainArea