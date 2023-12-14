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
                        <div className="strory" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1564698010692-0fe284aae806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlcnRpY2FsfGVufDB8fDB8fHww'})`}}>
                            <img src="https://isbscience.org/wp-content/uploads/Andrew-Magis.png" alt="storyImage"/>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Ava Davis

                        </div>
                        <div className="strory" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D'})`}}>
                            <img src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png" alt="storyImage"  />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Harper White

                        </div>
                        <div className="strory" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1530236668220-b9c6c098c9aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlcnRpY2FsfGVufDB8fDB8fHww'})`}}>
                            <img src="https://spng.pngfind.com/pngs/s/243-2430415_hello-my-name-is-anna-girl-hd-png.png" alt="storyImage"  />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            Olivia Taylor

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
                                    <img src="https://www.pngitem.com/pimgs/m/579-5794945_circle-profile-hd-png-download.png" alt="Img" style={{ height: "50px", width: "50px" }} />
                                    Johan Eza
                                    <div className="update">updated her cover picture</div>

                                </div>
                                <div className="edit"><MdMoreHoriz fontSize="1.5rem" /></div>
                            </div>
                            <div className="caption">I feel good today😊</div>
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
                        <div className="pages">
                            <img src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Harper White
                        </div>
                        <div className="pages">
                            <img src="https://spng.pngfind.com/pngs/s/243-2430415_hello-my-name-is-anna-girl-hd-png.png" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Olivia Taylor
                        </div>
                        <div className="pages">
                            <img src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Emma Johnson
                        </div>
                        <div className="pages">
                            <img src="https://isbscience.org/wp-content/uploads/Andrew-Magis.png" alt="logo" style={{ height: "30px", padding: "1rem" }} />
                            Ava Davis
                        </div>
                    </div>
                </div> 


        </div>
    );
}
export default MainArea