import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
// import fire from "../config/fire";
import { GiShoppingBag } from 'react-icons/gi';
import { backgroundGrey } from '../Actions/Actions';
import { useDispatch } from 'react-redux';

function Navigate1({ handleLogout }) {

    const dispatch = useDispatch();

    const dontShowComponent = false;
    const showComponent = true;

    useEffect(() => {
        dispatch(backgroundGrey(dontShowComponent))
    }, [])

    // const handleLogout = () => {
    //     fire.auth().signOut();
    //     console.log("working");
    // };

    return (
        <div className="Navigation_Bar" >
            <nav className="Navigation_Bar_Items">
                <Link to="/MainPageCarousel" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(showComponent))}
                    style={{
                        fontFamily: 'Philosopher',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}
                >
                    <GiShoppingBag size="30" />
                </Link>

                <Link to="/Men1" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                    style={{
                        fontFamily: 'Philosopher',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}
                >
                    MEN
                        {/* <MEN /> From DropDown folder  */}
                </Link>


                <Link to="/Women" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                    style={{
                        fontFamily: 'Philosopher',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}
                >
                    WOMEN
                </Link>


                <Link to="/Kids" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                    style={{
                        fontFamily: 'Philosopher',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}
                >
                    KIDS
                </Link>


                <Link to="/Home_Living" className="Navigation_Bar_Items" onClick={() => dispatch(backgroundGrey(dontShowComponent))}
                    style={{
                        fontFamily: 'Philosopher',
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}
                >
                    HOME & LIVING
                </Link>

                <button className="NavigationBar_LogOut_Butoon" onClick={handleLogout}>LOGOUT</button><br />

                {/* <Link to="/Offers" className="OFFERS_LINK" >
                    OFFERS
                </Link> */}

            </nav>
        </div>
    );
}

export default Navigate1;
