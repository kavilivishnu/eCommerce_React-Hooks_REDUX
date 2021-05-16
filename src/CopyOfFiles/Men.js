// import React, { useState } from 'react';
// import axios from "axios";
// import WishListPage from "../MAINLOGIC/WishListPage";
// import CartPage from "../MAINLOGIC/CartPage";

// function Men({ setShowList, wishListCount, cartListCount, cartTotal, setCartTotal, setWishListCount, setCartListCount }) {

//     const [array, setArray] = useState([]);
//     // const [showContent, setShowContent] = useState(false);
//     const [sendItems, setSendItems] = useState(false);
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

//     // const handleCheckBox = () => {
//     //     setShowContent(!showContent)
//     //     const result1 =
//     //         "https://api.unsplash.com/search/photos?page=13&query=men-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
//     //     axios.get(result1).then((response) => {
//     //         console.log(response);
//     //         setArray(response.data.results);
//     //     });
//     // };

//     const result1 =
//         "https://api.unsplash.com/search/photos?page=13&query=men-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
//     axios.get(result1).then((response) => {
//         console.log(response);
//         setArray(response.data.results);
//     });

//     const handleWishlist = (photo) => {
//         // setSendToWishList(true);
//         setSendItems(true);
//         // setShowList(!showList);
//         setWishListCount(wishListCount + 1);
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
//         // setSendToCart(true);
//         setSendItems(true);
//         // setShowList(!showList);
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
//         <div><br /><br />
//             <div className="men" >
//                 <a className="men_items" >1</a>
//                 <a className="men_items" >2</a>
//                 <a className="men_items" >3</a>
//             </div>
//             <div>
//                 {array.map((photo, index) => (
//                     <div key={index}>
//                         <img src={photo.urls.small} />
//                         <br />
//                         <p> Amount: {photo.width} </p>
//                         <p> Description: {photo.alt_description} </p>
//                         <button onClick={() => handleWishlist(photo)}>
//                             wishlist
//                         </button>
//                         <button onClick={() => handleTocart(photo)}>Cart</button>
//                     </div>
//                 ))}
//                 {sendItems ? <div>
//                     <WishListPage
//                         wishList={wishList}
//                         setWishList={setWishList}
//                         wishListCount={wishListCount}
//                         setWishListCount={setWishListCount}
//                         setShowList={setShowList}
//                     />
//                     <CartPage
//                         cartList={cartList}
//                         setCartList={setCartList}
//                         cartListCount={cartListCount}
//                         setCartListCount={setCartListCount}
//                         cartTotal={cartTotal}
//                         setCartTotal={setCartTotal}
//                         setShowList={setShowList}
//                     />
//                 </div> : ""}
//                 {/* <input type="checkbox" style={{ cursor: "pointer" }} onClick={(e) => handleCheckBox(e)} /> : Men */}
//                 {/* {showContent ?
//                     <div>
//                         <div>
//                             <WishListPage
//                                 wishList={wishList}
//                                 setWishList={setWishList}
//                                 wishListCount={wishListCount}
//                                 setWishListCount={setWishListCount}
//                                 setShowList={setShowList}
//                             />
//                             <CartPage
//                                 cartList={cartList}
//                                 setCartList={setCartList}
//                                 cartListCount={cartListCount}
//                                 setCartListCount={setCartListCount}
//                                 cartTotal={cartTotal}
//                                 setCartTotal={setCartTotal}
//                                 setShowList={setShowList}
//                             />
//                         </div>
//                     </div>
//                     :
//                     <div>
//                         {array.map((photo, index) => (
//                             <div key={index}>
//                                 <img src={photo.urls.small} />
//                                 <br />
//                                 <p> Amount: {photo.width} </p>
//                                 <p> Description: {photo.alt_description} </p>
//                                 <button onClick={() => handleWishlist(photo)}>
//                                     wishlist
//                         </button>
//                                 <button onClick={() => handleTocart(photo)}>Cart</button>
//                             </div>
//                         ))}
//                     </div>
//                 } */}
//                 {/* {showList ? <div>
//                     <WishListPage
//                         wishList={wishList}
//                         setWishList={setWishList}
//                         wishListCount={wishListCount}
//                         setWishListCount={setWishListCount}
//                         setShowList={setShowList}
//                     />
//                     <CartPage
//                         cartList={cartList}
//                         setCartList={setCartList}
//                         cartListCount={cartListCount}
//                         setCartListCount={setCartListCount}
//                         cartTotal={cartTotal}
//                         setCartTotal={setCartTotal}
//                         setShowList={setShowList}
//                     />
//                 </div> : ""} */}
//                 {/* {sendToWishList ? <WishListPage wishList={wishList} setWishList={setWishList} /> : ""}
//                 {sendToCart ? <CartPage cartList={cartList} setCartList={setCartList} /> : ""} */}
//             </div>
//         </div>
//     )
// }

// export default Men;


