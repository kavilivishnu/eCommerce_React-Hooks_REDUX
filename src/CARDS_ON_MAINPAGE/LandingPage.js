import React, { useState } from 'react';
import CheckBox1 from "../MAINLOGIC/CheckBox1";
import Navigate from "../MAINLOGIC/Navigate";
import fire from "../config/fire";

function LandingPage({ setShowList, wishListCount, cartListCount }) {

    const [cardOpen, setCardOpen] = useState("");

    const handleLogout = () => {
        fire.auth().signOut();
        console.log("working");
    };

    const handleClick = (val) => {
        switch (val) {
            case 1:
                setCardOpen(1);
            case 2:
                setCardOpen(2);
            case 3:
                // setCardOpen(!cardOpen);
                setCardOpen(3);
            default:
                break;
        }
    }

    return (
        <div>
            <Navigate />
            <div>
                {cardOpen === 3 ? <CheckBox1 /> :
                    <div>
                        <div onClick={() => handleClick(1)} >Card1</div>
                        <div onClick={() => handleClick(2)} >Card2</div>
                        <div onClick={() => handleClick(3)} >Card3</div>
                    </div>}
            </div>
        </div>
    )
}

export default LandingPage;


// import React, { useState } from 'react';
// import CheckBox1 from "../MAINLOGIC/CheckBox1";
// import Men from '../DROPDOWN_CONTENTS/Men';
// import Women from '../DROPDOWN_CONTENTS/Women';
// import Kids from '../DROPDOWN_CONTENTS/Kids';
// import Home_Living from '../DROPDOWN_CONTENTS/Home_Living';
// import Offers from '../DROPDOWN_CONTENTS/Offers';
// import { Link } from 'react-router-dom';
// import fire from "../config/fire";

// function LandingPage({ setShowList, wishListCount, cartListCount }) {

//     const [cardOpen, setCardOpen] = useState("");

//     const handleLogout = () => {
//         fire.auth().signOut();
//         console.log("working");
//     };

//     const handleClick = (val) => {
//         switch (val) {
//             case 1:
//                 setCardOpen(1);
//             case 2:
//                 setCardOpen(2);
//             case 3:
//                 // setCardOpen(!cardOpen);
//                 setCardOpen(3);
//             default:
//                 break;
//         }
//     }

//     return (
//         <div>
//             {cardOpen !== 0 ?
//                 <div>
//                     <nav style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginRight: "16px" }} >
//                         <div>
//                             <Link to="/Men" className="MEN_LINK" >
//                                 MEN
//                     <Men />
//                             </Link>
//                         </div>
//                         <div>
//                             <Link to="/Women" className="WOMEN_LINK" >
//                                 WOMEN
//                     <Women />
//                             </Link>
//                         </div>
//                         <div>
//                             <Link to="/Kids" className="KIDS_LINK" >
//                                 KIDS
//                     <Kids />
//                             </Link>
//                         </div>
//                         <div>
//                             <Link to="/Home_Living" className="HOME_LIVING_LINK" >
//                                 HOME & LIVING
//                     <Home_Living />
//                             </Link>
//                         </div>
//                         <div>
//                             <Link to="/Offers" className="OFFERS_LINK" >
//                                 OFFERS
//                     <Offers />
//                             </Link>
//                         </div>
//                     </nav>
//                 </div> : ""}
//             {/* <nav style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginRight: "16px" }} >
//                      <div>
//                              <Link to="/Men" className="MEN_LINK" >
//                                      MEN
//                      <Men />
//                      </Link>
//                  </div>
//                  <div>
//                              <Link to="/Women" className="WOMEN_LINK" >
//                                      WOMEN
//                      <Women />
//                      </Link>
//                  </div>
//                  <div>
//                              <Link to="/Kids" className="KIDS_LINK" >
//                                      KIDS
//                      <Kids />
//                      </Link>
//                  </div>
//                  <div>
//                              <Link to="/Home_Living" className="HOME_LIVING_LINK" >
//                                      HOME & LIVING
//                      <Home_Living />
//                      </Link>
//                  </div>
//                  <div>
//                              <Link to="/Offers" className="OFFERS_LINK" >
//                                      OFFERS
//                      <Offers />
//                      </Link>
//                  </div>
//              </nav> */}
//             <button onClick={(e) => handleLogout(e)}>LOGOUT</button>
//             {/* <div style={{ marginLeft: "30%", position: "fixed" }}>
//                 <span onClick={() => setShowList(false)}>
//                     Wishlist ({wishListCount}) And Cart ({cartListCount})
//                 </span>
//             </div> */}
//             <div>
//                 {cardOpen === 3 ? <CheckBox1 /> :
//                     <div>
//                         <div onClick={() => handleClick(1)} >Card1</div>
//                         <div onClick={() => handleClick(2)} >Card2</div>
//                         <div onClick={() => handleClick(3)} >Card3</div>
//                     </div>}
//                 {/* <div onClick={() => handleClick(1)} >Card1</div>
//                 <div onClick={() => handleClick(2)} >Card2</div>
//                 <div onClick={() => handleClick(3)} >Card3</div> */}
//                 {/* {cardOpen === 1 ? <MenFolder /> : ""}
//                 {cardOpen === 2 ? <WomenFolder /> : ""} */}
//                 {/* {cardOpen === 3 ? <CheckBox1 /> : ""} */}
//                 {/* {cardOpen ? <CheckBox1 /> : ""} */}
//             </div>
//         </div>
//     )
// }

// export default LandingPage;
