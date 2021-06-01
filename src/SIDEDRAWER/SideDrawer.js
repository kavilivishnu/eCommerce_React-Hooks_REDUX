import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import fire from "../config/fire";
import { backgroundGrey } from "../Actions/Actions";
import { useDispatch } from 'react-redux';
import { GiShoppingBag } from 'react-icons/gi';

function SideDrawer({ handleLogout }) {

    const dontShowComponent = false;
    const showComponent = true;

    useEffect(() => {
        dispatch(backgroundGrey(dontShowComponent))
    }, [])

    const dispatch = useDispatch();

    const [showDrawer, setShowDrawer] = useState(false);

    // const handleLogout = () => {
    //     fire.auth().signOut();
    //     console.log("working");
    // };

    return (
        <div className="Side_Drawer" >
            {showDrawer ?
                <div>
                    <nav className="Side_Drawer_Items" >
                        <br />
                        <span style={{ fontFamily: 'Varela Round', color: 'black' }} onClick={() => setShowDrawer(false)}>🤐Close</span>
                        <Link to="/MainPageCarousel" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(showComponent))}
                            style={{
                                fontFamily: 'Philosopher',
                                color: "lightsalmon",
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "25px",
                                textDecoration: "none"
                            }}
                        >
                            <GiShoppingBag size="30" color="black" /> { /* Replace this name with your APP'S ICON */}
                        </Link>

                        <Link to="/Men1" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                            style={{
                                fontFamily: 'Philosopher',
                                color: "lightsalmon",
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "25px",
                                textDecoration: "none"
                            }}
                        >
                            MEN
                        {/* <MEN /> From DropDown folder  */}
                        </Link>


                        <Link to="/Women" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                            style={{
                                fontFamily: 'Philosopher',
                                color: "lightsalmon",
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "25px",
                                textDecoration: "none"
                            }}
                        >
                            WOMEN
                </Link>


                        <Link to="/Kids" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                            style={{
                                fontFamily: 'Philosopher',
                                color: "lightsalmon",
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "25px",
                                textDecoration: "none"
                            }}
                        >
                            KIDS
                </Link>


                        <Link to="/Home_Living" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                            style={{
                                fontFamily: 'Philosopher',
                                color: "lightsalmon",
                                fontWeight: "bold",
                                fontSize: "20px",
                                marginTop: "25px",
                                textDecoration: "none"
                            }}
                        >
                            HOME & LIVING
                </Link>
                        <button className="NavigationBar_LogOut_Butoon" style={{ marginLeft: "10%", marginTop: "30%" }} onClick={handleLogout}>LOGOUT</button><br />


                        {/* <Link to="/Offers" className="OFFERS_LINK" >
                            OFFERS
                        </Link> */}

                    </nav><br />
                </div>
                :
                <span style={{ fontFamily: 'Varela Round' }} onClick={() => setShowDrawer(true)} >😃Open Me</span>
            }
        </div>
    );
}

export default SideDrawer;
