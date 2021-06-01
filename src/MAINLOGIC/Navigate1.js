import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import fire from "../config/fire";
import { GiShoppingBag } from 'react-icons/gi';
import { backgroundGrey } from '../Actions/Actions';
import { useDispatch } from 'react-redux';
import { currencySelect } from '../Actions/Actions';

function Navigate1({ handleLogout }) {

    const dispatch = useDispatch();

    const dontShowComponent = false;
    const showComponent = true;

    const showTheContents = true;

    const [selected, setSelected] = useState("");

    useEffect(() => {
        dispatch(backgroundGrey(dontShowComponent))
    }, [])

    // const handleLogout = () => {
    //     fire.auth().signOut();
    //     console.log("working");
    // };

    const handleSelect = (e) => {
        const res = e.target.value;
        setSelected(res);
        dispatch(currencySelect(res));
    }

    return (
        <>
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

                    <button className="NavigationBar_LogOut_Butoon" onClick={handleLogout}>LOGOUT</button><br /><br />

                    {/* <Link to="/Offers" className="OFFERS_LINK" >
                    OFFERS
                </Link> */}

                </nav>
            </div>
            <div className="Navigation_Bar_Items" >
                <select
                    className="select"
                    value={selected}
                    onChange={handleSelect}
                // style={{
                //     marginTop: "40px",
                //     fontFamily: "Overlock SC",
                //     fontSize: "20px",
                //     fontWeight: "bold",
                //     outline: "none",
                //     cursor: "pointer",
                //     borderTop: "none",
                //     borderLeft: "none",
                //     borderRight: "none",
                //     // borderBottom: "3px solid rgb(47, 61, 253)",
                //     borderBottom: "3px solid rgb(207, 189, 221)",
                //     width: "17%"
                // }}
                >
                    <option value=" " >
                        Select currency
                        </option>

                    <option value="₹" >
                        ₹ (Indian RUPEES)
                        </option>

                    <option value="£" >
                        £ (POUND Sterling)
                        </option>

                    <option value="€" >
                        € (EURO)
                        </option>

                    <option value="¥" >
                        ¥ (Japaneese YEN)
                        </option>

                    <option value="د.إ" >
                        د.إ (DIRHAMS)
                        </option>

                    <option value="$" >
                        $ (Us DOLLAR)
                        </option>

                    <option value="C$" >
                        C$ (Canadian DOLLAR)
                        </option>

                </select>
            </div>
            <div style={{ marginTop: "-85px" }} >
                <p style={{ marginLeft: "3.2%" }} >ORDER NOW</p>
            </div>
        </>
    );
}

export default Navigate1;
