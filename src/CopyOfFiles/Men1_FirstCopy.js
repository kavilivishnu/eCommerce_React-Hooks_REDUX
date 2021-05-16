import React, { useState, useEffect } from "react";
import axios from "axios";
import WishListPage from "../MAINLOGIC/WishListPage";
import CartPage from "../MAINLOGIC/CartPage";
import Navigate1 from '../MAINLOGIC/Navigate1';
import { addMenToWishList } from '../Actions/Actions';
import { useSelector, useDispatch } from 'react-redux';


function Men1() {

    const select = useSelector(state => state);
    const dispatch = useDispatch();
    // const [value, setValue] = useState(false);
    const [array, setArray] = useState([]);
    const [showList, setShowList] = useState(false);
    // const [wishList, setWishList] = useState([
    //     {
    //         id: null,
    //         image: "",
    //         price: "",
    //         description: ""
    //     }
    // ]);
    const [cartList, setCartList] = useState([
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
        "https://api.unsplash.com/search/photos?page=5&query=men-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
    axios.get(result1).then((response) => {
        // console.log(response);
        setArray(response.data.results);
    });

    // const handleWishlist = (xy, info, photo, money) => { // The main part
    const handleWishlist = (xy, photo, money, info) => { // The original way
        // Now follow the same sequence for the parameters that are associated with the data of parameters that you 
        // have passed inside the function written in the JSX fromat below.  

        var value1 = wishListCount + 1
        setWishListCount(value1);
        // setWishList([
        //     ...wishList,
        //     {
        //         id: photo.id, // replace photo.id with uuidv4() later.
        //         image: photo.urls.small,
        //         price: photo.width,
        //         description: photo.alt_description
        //     }
        // ]);
        dispatch(
            addMenToWishList(xy, photo, money, info) // The original way
            // Follow the same sequence for the parameters within the action function mentioned above same as the sequence
            // in the original action function folder. And also the sequence should be same as the sequence that you have
            // maintained for the parameters of the main handler function.

            // Once all these are steps are followed correctly, the entire code will run without any errors for the first time.
            // Now you can map the items in this array in whichever component you want by importing the state there.

            // addMenToWishList(xy, money, info, money, photo) // This has the right sequence and correct way
        )
    };

    const handleTocart = (photo) => {
        // setValue(true);
        const widthToInt = parseInt(photo.width);
        const resutlt = widthToInt + cartTotal;
        setCartTotal(resutlt);
        var value2 = cartListCount + 1
        setCartListCount(value2);
        setCartList([
            ...cartList,
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

    // useEffect(() => {
    //     setWishList(JSON.parse(localStorage.getItem("firstItem")));
    // }, [])

    // useEffect(() => {
    //     window.localStorage.setItem("firstItem", JSON.stringify(wishList));
    // }, [wishList])

    return (
        <div style={{ textAlign: "center" }}>
            <h3 style={{ marginLeft: "45%", position: "fixed" }} >WishList ({wishListCount}) Cart({cartListCount}) </h3>
            <br />< br />
            {/* {cartTotal > 0 ^ cartTotal === 0 ? "Happy shopping" : <Navigate1 setShowList={setShowList} showList={showList} />} */}
            <Navigate1 setShowList={setShowList} showList={showList} />
            {/* <Women setWishList={setWishList} wishList={wishList} /> */}
            {/* {cartTotal > 0 ^ cartTotal === 0 ? " " : <Women setWishList={setWishList} wishList={wishList} />} */}
            <br />
            <br />
            {/* <button onClick={(e) => handleOpen(e)} >WishList And Cart</button> */}
            <span onClick={() => setShowList(true)} >WishList And Cart</span>
            {showList ?
                <div>
                    <div style={{ float: "left" }}>
                        {/* <WishListPage
                            value={value}
                            wishList={wishList}
                            setShowList={setShowList}
                            setWishList={setWishList}
                            wishListCount={wishListCount}
                            setWishListCount={setWishListCount}
                        /> */}
                        <WishListPage />
                    </div>
                    <div style={{ float: "right" }}>
                        <CartPage
                            cartList={cartList}
                            setShowList={setShowList}
                            setCartList={setCartList}
                            cartListCount={cartListCount}
                            setCartListCount={setCartListCount}
                            cartTotal={cartTotal}
                            setCartTotal={setCartTotal}
                        />
                    </div>
                </div>
                :
                <div>
                    {array.map((photo, index) => (
                        <div key={index}>
                            <img src={photo.urls.small} />
                            <br />
                            <p> Amount: {photo.width} </p>
                            <p> Description: {photo.alt_description} </p>
                            <button onClick={() => handleWishlist(photo.id, photo.urls.small, photo.width, photo.alt_description)}>
                                {/* 
                                    Pass the required data as parameters seprated with commas as shown above into the function 
                                    in the sequence you want the data to be displayed in. Also it is necessary to maintain the
                                    sequence of data of parameters same as the sequence of the parameters that you have 
                                    maintained in the action function folder
                                */}
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

export default Men1;

// {showList ?
//     <div>
//         <div style={{ float: "left" }}>
//             <WishListPage
//                 wishList={wishList}
//                 setShowList={setShowList}
//                 setWishList={setWishList}
//                 wishListCount={wishListCount}
//                 setWishListCount={setWishListCount}
//             />
//         </div>
//         <div style={{ float: "right" }}>
//             <CartPage
//                 cartList={cartList}
//                 setShowList={setShowList}
//                 setCartList={setCartList}
//                 cartListCount={cartListCount}
//                 setCartListCount={setCartListCount}
//                 cartTotal={cartTotal}
//                 setCartTotal={setCartTotal}
//             />
//         </div>
//     </div>
//     :
//     <div>
//         {array.map((photo, index) => (
//             <div key={index}>
//                 <img src={photo.urls.small} />
//                 <br />
//                 <p> Amount: {photo.width} </p>
//                 <p> Description: {photo.alt_description} </p>
//                 <button onClick={() => handleWishlist(photo)}>
//                     wishlist
//               </button>
//                 <button onClick={() => handleTocart(photo)}>Cart</button>
//             </div>
//         ))}
//     </div>

// }