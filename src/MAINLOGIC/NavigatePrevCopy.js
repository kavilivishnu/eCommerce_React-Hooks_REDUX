// import React, { useState } from "react";
// import Men from '../DROPDOWN_CONTENTS/Men';
// import Women from '../DROPDOWN_CONTENTS/Women';
// import Kids from '../DROPDOWN_CONTENTS/Kids';
// import Home_Living from '../DROPDOWN_CONTENTS/Home_Living';
// import Offers from '../DROPDOWN_CONTENTS/Offers';
// import { Link } from 'react-router-dom';
// import fire from "../config/fire";
// import CheckBox1 from "./CheckBox1";

// function Navigate({ showList, setShowList, wishListCount, cartListCount, cartTotal, setCartTotal, setWishListCount, setCartListCount }) {

//     const [cardOpen, setCardOpen] = useState("");
//     const [display, setDisplay] = useState(0)

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
//                 setDisplay(2);
//             case 3:
//                 setCardOpen(3);
//                 setDisplay(3);
//             default:
//                 break;
//         }
//     }

//     return (
//         <div>
//             <div style={{ marginLeft: "40%", position: "fixed" }}>
//                 <span onClick={() => setShowList(true)}>
//                     Wishlist ({wishListCount}) And Cart ({cartListCount})
//                 </span>
//             </div>
//             <nav style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginRight: "16px" }} >
//                 <div><br />
//                     <Link to="/Men" className="MEN_LINK" >
//                         MEN
//                             {/* {display === 3 ? <Men
//                             showList={showList}
//                             wishListCount={wishListCount}
//                             cartListCount={cartListCount}
//                             cartTotal={cartTotal}
//                             setCartTotal={setCartTotal}
//                             setWishListCount={setWishListCount}
//                             setCartListCount={setCartListCount}
//                             setShowList={setShowList}
//                         /> : ""} */}
//                         <Men
//                             showList={showList}
//                             wishListCount={wishListCount}
//                             cartListCount={cartListCount}
//                             cartTotal={cartTotal}
//                             setCartTotal={setCartTotal}
//                             setWishListCount={setWishListCount}
//                             setCartListCount={setCartListCount}
//                             setShowList={setShowList}
//                         />
//                     </Link>
//                 </div>
//                 <div>
//                     <Link to="/Women" className="WOMEN_LINK" >
//                         WOMEN
//                             {display === 2 ? <Women
//                             showList={showList}
//                             setShowList={setShowList}
//                             wishListCount={wishListCount}
//                             cartListCount={cartListCount}
//                             cartTotal={cartTotal}
//                             setCartTotal={setCartTotal}
//                             setWishListCount={setWishListCount}
//                             setCartListCount={setCartListCount}
//                         /> : ""}
//                     </Link>
//                 </div>
//                 <div>
//                     <Link to="/Kids" className="KIDS_LINK" >
//                         KIDS
//                     <Kids
//                             showList={showList}
//                             setShowList={setShowList}
//                             wishListCount={wishListCount}
//                             cartListCount={cartListCount}
//                             cartTotal={cartTotal}
//                             setCartTotal={setCartTotal}
//                             setWishListCount={setWishListCount}
//                             setCartListCount={setCartListCount}
//                         />
//                     </Link>
//                 </div>
//                 <div>
//                     <Link to="/Home_Living" className="HOME_LIVING_LINK" >
//                         HOME & LIVING
//                     <Home_Living
//                             showList={showList}
//                             setShowList={setShowList}
//                             wishListCount={wishListCount}
//                             cartListCount={cartListCount}
//                             cartTotal={cartTotal}
//                             setCartTotal={setCartTotal}
//                             setWishListCount={setWishListCount}
//                             setCartListCount={setCartListCount}
//                         />
//                     </Link>
//                 </div>
//                 <div>
//                     <Link to="/Offers" className="OFFERS_LINK" >
//                         OFFERS
//                     <Offers
//                             showList={showList}
//                             setShowList={setShowList}
//                             wishListCount={wishListCount}
//                             cartListCount={cartListCount}
//                             cartTotal={cartTotal}
//                             setCartTotal={setCartTotal}
//                             setWishListCount={setWishListCount}
//                             setCartListCount={setCartListCount}
//                         />
//                     </Link>
//                 </div>
//             </nav>
//             {/* {cardOpen === 3 ? <CheckBox1 /> : <div>
//                 <button style={{ marginLeft: "10%" }} onClick={(e) => handleLogout(e)}>LOGOUT</button>
//                 <div style={{ marginLeft: "40%", position: "fixed" }}>
//                     <span onClick={() => setShowList(true)}>
//                         Wishlist ({wishListCount}) And Cart ({cartListCount})
//                 </span>
//                 </div><br /> */}
//             {/* <nav style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginRight: "16px" }} >
//                     <div><br />
//                         <Link to="/Men" className="MEN_LINK" >
//                             MEN
//                             {display === 3 ? <Men
//                                 showList={showList}
//                                 wishListCount={wishListCount}
//                                 cartListCount={cartListCount}
//                                 cartTotal={cartTotal}
//                                 setCartTotal={setCartTotal}
//                                 setWishListCount={setWishListCount}
//                                 setCartListCount={setCartListCount}
//                                 setShowList={setShowList}
//                             /> : ""}
//                         </Link>
//                     </div>
//                     <div>
//                         <Link to="/Women" className="WOMEN_LINK" >
//                             WOMEN
//                             {display === 2 ? <Women
//                                 showList={showList}
//                                 setShowList={setShowList}
//                                 wishListCount={wishListCount}
//                                 cartListCount={cartListCount}
//                                 cartTotal={cartTotal}
//                                 setCartTotal={setCartTotal}
//                                 setWishListCount={setWishListCount}
//                                 setCartListCount={setCartListCount}
//                             /> : ""}
//                         </Link>
//                     </div>
//                     <div>
//                         <Link to="/Kids" className="KIDS_LINK" >
//                             KIDS
//                     <Kids
//                                 showList={showList}
//                                 setShowList={setShowList}
//                                 wishListCount={wishListCount}
//                                 cartListCount={cartListCount}
//                                 cartTotal={cartTotal}
//                                 setCartTotal={setCartTotal}
//                                 setWishListCount={setWishListCount}
//                                 setCartListCount={setCartListCount}
//                             />
//                         </Link>
//                     </div>
//                     <div>
//                         <Link to="/Home_Living" className="HOME_LIVING_LINK" >
//                             HOME & LIVING
//                     <Home_Living
//                                 showList={showList}
//                                 setShowList={setShowList}
//                                 wishListCount={wishListCount}
//                                 cartListCount={cartListCount}
//                                 cartTotal={cartTotal}
//                                 setCartTotal={setCartTotal}
//                                 setWishListCount={setWishListCount}
//                                 setCartListCount={setCartListCount}
//                             />
//                         </Link>
//                     </div>
//                     <div>
//                         <Link to="/Offers" className="OFFERS_LINK" >
//                             OFFERS
//                     <Offers
//                                 showList={showList}
//                                 setShowList={setShowList}
//                                 wishListCount={wishListCount}
//                                 cartListCount={cartListCount}
//                                 cartTotal={cartTotal}
//                                 setCartTotal={setCartTotal}
//                                 setWishListCount={setWishListCount}
//                                 setCartListCount={setCartListCount}
//                             />
//                         </Link>
//                     </div>
//                 </nav> */}
//             {/* <div className={cartTotal !== 0 ^ cartTotal > 0 ? "block" : "none"} >
//                     <div onClick={() => handleClick(1)} >Card1</div>
//                     <div onClick={() => handleClick(2)} >Card2</div>
//                     <div onClick={() => handleClick(3)} >Card3</div>
//                 </div> */}
//             {/* </div>} */}
//         </div>
//     );
// }

// export default Navigate;
