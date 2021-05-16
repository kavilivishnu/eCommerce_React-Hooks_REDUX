import React, { useState } from "react";
import axios from "axios";
import WishListPage from "../MAINLOGIC/WishListPage";
import CartPage from "../MAINLOGIC/CartPage";
import Navigate1 from '../MAINLOGIC/Navigate1';
import { addWomenToWishList } from '../Actions/Actions';
import { useDispatch } from 'react-redux';


function Women() {
    const dispatch = useDispatch();
    const [value2, setValue2] = useState(0);
    // const [value2, setValue2] = useState(false);
    const [womenArray, setWomenArray] = useState([]);
    const [showList, setShowList] = useState(false);
    // const [womenWishList, setWomenWishList] = useState([
    //     {
    //         id: null,
    //         image: "",
    //         price: "",
    //         description: ""
    //     }
    // ]);
    // const [wishList, setWishList] = useState([
    //     {
    //         id: null,
    //         image: "",
    //         price: "",
    //         description: ""
    //     }
    // ]);
    const [womenCartList, setWomenCartList] = useState([
        {
            id: null,
            image: "",
            price: "",
            description: ""
        }
    ]);

    const [wishListCount, setWishListCount] = useState(0);
    const [cartListCount, setCartListCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const result1 =
        "https://api.unsplash.com/search/photos?page=5&query=womens-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
    axios.get(result1).then((response) => {
        console.log(response);
        setWomenArray(response.data.results);
    });

    const handleWishlist = (photo) => {
        setValue2(2);
        // setValue2(true);
        setWishListCount(wishListCount + 1);
        // setWomenWishList([
        //     ...womenWishList,
        //     {
        //         id: photo.id, // replace photo.id with uuidv4() later.
        //         image: photo.urls.small,
        //         price: photo.width,
        //         description: photo.alt_description
        //     }
        // ]);
        dispatch(
            addWomenToWishList(
                {
                    id: photo.id,
                    image: photo.urls.small,
                    peice: photo.width,
                    description: photo.alt_description
                }
            )
        )
    };

    const handleTocart = (photo) => {
        setValue2(2);
        const widthToInt = parseInt(photo.width);
        const resutlt = widthToInt + cartTotal;
        setCartTotal(resutlt);
        setCartListCount(cartListCount + 1);
        setWomenCartList([
            ...womenCartList,
            {
                id: photo.id, // replace photo.id with uuidv4() later.
                image: photo.urls.small,
                price: photo.width,
                description: photo.alt_description
            }
        ]);
    };

    // const handleOpen = () => {
    //     setShowList(true);
    // }

    return (
        <div style={{ textAlign: "center" }}>
            <h3 style={{ marginLeft: "45%", position: "fixed" }} >WishList ({wishListCount}) Cart({cartListCount}) </h3>
            <br />< br />
            {cartTotal > 0 ^ cartTotal === 0 ? "Happy shopping" : <Navigate1 setShowList={setShowList} showList={showList} />}
            <Navigate1 setShowList={setShowList} showList={showList} />
            <br />
            <br />
            {/* <button onClick={(e) => handleOpen(e)} >WishList And Cart</button> */}
            <span onClick={() => setShowList(true)} >WishList And Cart</span>
            {/* {array.map((photo, index) => (
                        <div key={index}>
                            <img src={photo.urls.small} />
                            <br />
                            <p> Amount: {photo.width} </p>
                            <p> Description: {photo.alt_description} </p>
                            <button onClick={() => handleWishlist(photo)}>
                                wishlist
                          </button>
                            <button onClick={() => handleTocart(photo)}>Cart</button>
                        </div>
                    ))} */}
            {showList ?
                <div>
                    <div style={{ float: "left" }}>
                        <WishListPage
                            value2={value2}
                            // wishList={wishList}
                            // setWishList={setWishList}
                            // womenWishList={womenWishList}
                            // setShowList={setShowList}
                            // setWomenWishList={setWomenWishList}
                            wishListCount={wishListCount}
                            setWishListCount={setWishListCount}
                        />
                    </div>
                    <div style={{ float: "right" }}>
                        <CartPage
                            value2={value2}
                            womenCartList={womenCartList}
                            setShowList={setShowList}
                            setWomenCartList={setWomenCartList}
                            cartListCount={cartListCount}
                            setCartListCount={setCartListCount}
                            cartTotal={cartTotal}
                            setCartTotal={setCartTotal}
                        />
                    </div>
                </div>
                :
                <div>
                    {womenArray.map((photo, index) => (
                        <div key={index}>
                            <img src={photo.urls.small} />
                            <br />
                            <p> Amount: {photo.width} </p>
                            <p> Description: {photo.alt_description} </p>
                            <button onClick={() => handleWishlist(photo)}>
                                wishlist
                          </button>
                            <button onClick={() => handleTocart(photo)}>Cart</button>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default Women;


// --------------------------------------------------------------------------------------------------------------------

//  Previous Logic

// import React, { useState } from "react";
// import axios from "axios";
// import WishListPage from "../MAINLOGIC/WishListPage";
// import CartPage from "../MAINLOGIC/CartPage";
// import Navigate1 from '../MAINLOGIC/Navigate1';


// function Women() {
//     const [array, setArray] = useState([]);
//     const [showList, setShowList] = useState(false);
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

//     const result1 =
//         "https://api.unsplash.com/search/photos?page=5&query=womens-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
//     axios.get(result1).then((response) => {
//         console.log(response);
//         setArray(response.data.results);
//     });

//     const handleWishlist = (photo) => {
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

//     const handleOpen = () => {
//         setShowList(true);
//     }

//     return (
//         <div style={{ textAlign: "center" }}>
//             <h3 style={{ marginLeft: "45%", position: "fixed" }} >WishList ({wishListCount}) Cart({cartListCount}) </h3>
//             <br />< br />
//             {cartTotal > 0 ^ cartTotal === 0 ? "Happy shopping" : <Navigate1 />}
//             <br />
//             <br />
//             <button onClick={(e) => handleOpen(e)} >WishList And Cart</button>
//             {/* {array.map((photo, index) => (
//                         <div key={index}>
//                             <img src={photo.urls.small} />
//                             <br />
//                             <p> Amount: {photo.width} </p>
//                             <p> Description: {photo.alt_description} </p>
//                             <button onClick={() => handleWishlist(photo)}>
//                                 wishlist
//                           </button>
//                             <button onClick={() => handleTocart(photo)}>Cart</button>
//                         </div>
//                     ))} */}
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
//                     {array.map((photo, index) => (
//                         <div key={index}>
//                             <img src={photo.urls.small} />
//                             <br />
//                             <p> Amount: {photo.width} </p>
//                             <p> Description: {photo.alt_description} </p>
//                             <button onClick={() => handleWishlist(photo)}>
//                                 wishlist
//                           </button>
//                             <button onClick={() => handleTocart(photo)}>Cart</button>
//                         </div>
//                     ))}
//                 </div>
//             }
//         </div>
//     );
// }

// export default Women;
