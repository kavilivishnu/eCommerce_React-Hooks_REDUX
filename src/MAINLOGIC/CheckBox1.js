// import React, { useState } from "react";
// import axios from "axios";
// import WishListPage from "./WishListPage";
// import CartPage from "./CartPage";
// import Navigate from "./Navigate";
// // import LandingPage from '../CARDS_ON_MAINPAGE/LandingPage';


// function CheckBox1() {
//     const [array, setArray] = useState([]);
//     const [state, setState] = useState("");
//     const [show, setShow] = useState(false);
//     const [show1, setShow1] = useState(false);
//     const [showList, setShowList] = useState(false);
//     const [showWishList, setShowWishList] = useState(false);
//     const [openWishList, setOpenWishList] = useState(false);
//     const [wishList, setWishList] = useState([
//         {
//             id: null,
//             image: "",
//             price: "",
//             description: ""
//         }
//     ]);
//     const [cartList, setCartList] = useState([
//         {
//             id: null,
//             image: "",
//             price: "",
//             description: ""
//         }
//     ]);

//     const [wishListCount, setWishListCount] = useState(0);
//     const [cartListCount, setCartListCount] = useState(0);
//     const [cartTotal, setCartTotal] = useState(0);

//     const handleCheckBox = (val) => {
//         if (val === 1) {
//             setShow(!show);
//             setState(val);
//             const result1 =
//                 "https://api.unsplash.com/search/photos?page=5&query=men-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
//             axios.get(result1).then((response) => {
//                 console.log(response);
//                 setArray(response.data.results);
//             });
//         }
//         if (val === 2) {
//             setShow1(!show1);
//             setState(val);
//             const result1 =
//                 "https://api.unsplash.com/search/photos?page=5&query=womens-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
//             axios.get(result1).then((response) => {
//                 console.log(response);
//                 setArray(response.data.results);
//             });
//         }
//     };

//     const handleWishlist = (photo) => {
//         setWishListCount(wishListCount + 1);
//         setShowWishList(true);
//         setWishList([
//             ...wishList,
//             {
//                 id: photo.id,
//                 image: photo.urls.small,
//                 price: photo.width,
//                 description: photo.alt_description
//             }
//         ]);
//     };

//     const handleTocart = (photo) => {
//         const widthToInt = parseInt(photo.width);
//         const resutlt = widthToInt + cartTotal;
//         setCartTotal(resutlt);
//         setCartListCount(cartListCount + 1);
//         setCartList([
//             ...cartList,
//             {
//                 id: photo.id,
//                 image: photo.urls.small,
//                 price: photo.width,
//                 description: photo.alt_description
//             }
//         ]);
//     };

//     return (
//         <div style={{ textAlign: "center" }}>
//             <Navigate
//                 showList={showList}
//                 setShowList={setShowList}
//                 wishListCount={wishListCount}
//                 cartListCount={cartListCount}
//                 cartTotal={cartTotal}
//                 setCartTotal={setCartTotal}
//                 setWishListCount={setWishListCount}
//                 setCartListCount={setCartListCount}
//             />
//             <br />
//             <br />
//             {showList ?
//                 <div>
//                     <div style={{ float: "left" }}>
//                         <WishListPage
//                             wishList={wishList}
//                             setShowList={setShowList}
//                             setWishList={setWishList}
//                             wishListCount={wishListCount}
//                             setWishListCount={setWishListCount}
//                         />
//                     </div>
//                     <div style={{ float: "right" }}>
//                         <CartPage
//                             cartList={cartList}
//                             setShowList={setShowList}
//                             setCartList={setCartList}
//                             cartListCount={cartListCount}
//                             setCartListCount={setCartListCount}
//                             cartTotal={cartTotal}
//                             setCartTotal={setCartTotal}
//                         />
//                     </div>
//                 </div>
//                 :
//                 <div>
//                     <input type="checkbox" onClick={() => handleCheckBox(1)} /> : Men
//                        <input type="checkbox" onClick={() => handleCheckBox(2)} /> : Women
//                        {show ? (
//                         <div>
//                             {state === 1 ? (
//                                 <div>
//                                     {array.map((photo, index) => (
//                                         <div key={index}>
//                                             <img src={photo.urls.small} />
//                                             <br />
//                                             <p> Amount: {photo.width} </p>
//                                             <p> Description: {photo.alt_description} </p>
//                                             <button onClick={() => handleWishlist(photo)}>
//                                                 wishlist
//                           </button>
//                                             <button onClick={() => handleTocart(photo)}>Cart</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             ) : (
//                                 ""
//                             )}
//                         </div>
//                     ) : (
//                         ""
//                     )}
//                     {show1 ? (
//                         <div>
//                             {state === 2 ? (
//                                 <div>
//                                     {array.map((photo, index) => (
//                                         <div key={index}>
//                                             <img src={photo.urls.small} />
//                                             <p> Amount: {photo.width} </p>
//                                             <p> Description: {photo.alt_description} </p>
//                                             <button onClick={() => handleWishlist(photo)}>
//                                                 wishlist
//                           </button>
//                                             <button onClick={() => handleTocart(photo)}>Cart</button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             ) : (
//                                 ""
//                             )}
//                         </div>
//                     ) : (
//                         ""
//                     )}
//                 </div>
//             }
//         </div>
//     );
// }

// export default CheckBox1;


// // {showList ? (
//                 //     <div>
//                 //         <input type="checkbox" onClick={() => handleCheckBox(1)} /> : Men
//                 //         <input type="checkbox" onClick={() => handleCheckBox(2)} /> : Women
//                 //         {show ? (
//                 //             <div>
//                 //                 {state === 1 ? (
//                 //                     <div>
//                 //                         {array.map((photo, index) => (
//                 //                             <div key={index}>
//                 //                                 <img src={photo.urls.small} />
//                 //                                 <br />
//                 //                                 <p> Amount: {photo.width} </p>
//                 //                                 <p> Description: {photo.alt_description} </p>
//                 //                                 <button onClick={() => handleWishlist(photo)}>
//                 //                                     wishlist
//                 //           </button>
//                 //                                 <button onClick={() => handleTocart(photo)}>Cart</button>
//                 //                             </div>
//                 //                         ))}
//                 //                     </div>
//                 //                 ) : (
//                 //                     ""
//                 //                 )}
//                 //             </div>
//                 //         ) : (
//                 //             ""
//                 //         )}
//                 //         {show1 ? (
//                 //             <div>
//                 //                 {state === 2 ? (
//                 //                     <div>
//                 //                         {array.map((photo, index) => (
//                 //                             <div key={index}>
//                 //                                 <img src={photo.urls.small} />
//                 //                                 <p> Amount: {photo.width} </p>
//                 //                                 <p> Description: {photo.alt_description} </p>
//                 //                                 <button onClick={() => handleWishlist(photo)}>
//                 //                                     wishlist
//                 //           </button>
//                 //                                 <button onClick={() => handleTocart(photo)}>Cart</button>
//                 //                             </div>
//                 //                         ))}
//                 //                     </div>
//                 //                 ) : (
//                 //                     ""
//                 //                 )}
//                 //             </div>
//                 //         ) : (
//                 //             ""
//                 //         )}
//                 //     </div>
//                 // ) : (
//                 //     <div>
//                 //         <div style={{ float: "left" }}>
//                 //             <WishListPage
//                 //                 wishList={wishList}
//                 //                 setShowList={setShowList}
//                 //                 setWishList={setWishList}
//                 //                 wishListCount={wishListCount}
//                 //                 setWishListCount={setWishListCount}
//                 //             />
//                 //         </div>
//                 //         <div style={{ float: "right" }}>
//                 //             <CartPage
//                 //                 cartList={cartList}
//                 //                 setShowList={setShowList}
//                 //                 setCartList={setCartList}
//                 //                 cartListCount={cartListCount}
//                 //                 setCartListCount={setCartListCount}
//                 //                 cartTotal={cartTotal}
//                 //                 setCartTotal={setCartTotal}
//                 //             />
//                 //         </div>
//                 //     </div>
//                 // )}

//         //          <div style={{ float: "left" }}>
//         //      <WishListPage
//         //          wishList={wishList}
//         //          setShowList={setShowList}
//         //          setWishList={setWishList}
//         //          wishListCount={wishListCount}
//         //          setWishListCount={setWishListCount}
//         //      />
//         //  </div>
//         //  <div style={{ float: "right" }}>
//         //      <CartPage
//         //          cartList={cartList}
//         //          setShowList={setShowList}
//         //          setCartList={setCartList}
//         //          cartListCount={cartListCount}
//         //          setCartListCount={setCartListCount}
//         //          cartTotal={cartTotal}
//         //          setCartTotal={setCartTotal}
//         //      />  
//         //      </div>