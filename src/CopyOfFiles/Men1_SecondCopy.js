import React, { useState, useEffect } from "react";
import axios from "axios";
import WishListPage from "../MAINLOGIC/WishListPage";
import Navigate1 from "../MAINLOGIC/Navigate1";
import { addToWishList, addToCart } from "../Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import CartPage from '../MAINLOGIC/CartPage';

function Men1() {
    const globalState = useSelector((state) => state);

    const dispatch = useDispatch();
    const [array, setArray] = useState([]);
    const [showList, setShowList] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const [check, setCheck] = useState("");
    const [text, setText] = useState(0);
    const [zoom, setZoom] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showWishList, setShowWishList] = useState(false);
    const [visibleAmount, setVisibleAmount] = useState(false);
    // const check = 0;

    // you can't have the API call as a constant in the file
    // it was calling the API infinitely causing an infinite loop
    // in the app. You want to call it just once when the project is
    // rendered. That's why we use UseEffect here to call only on mount
    // However this is not the best approach we don't usually keep the API
    // calls in views in React
    // The best way to do that is to move in the actions

    useEffect(() => {
        const result1 =
            "https://api.unsplash.com/search/photos?page=5&query=men-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
        axios.get(result1).then((response) => {
            setArray(response.data.results);
        });
    }, []);

    const handleWishlist = (xy, id, photo, money, info, brand) => {
        // setCheck(index);
        if (globalState.wishlist.filter((object) => object.id === id).length > 0) {
            alert("Item is already pushed to the wishlist");
        }
        // else if (text === 0) {
        //     alert("enter the quantity please");
        // }

        // The original way
        // Now follow the same sequence for the parameters that are associated with the data of parameters that you
        // have passed inside the function written in the JSX fromat below.

        // The parameters count within the function is very important too. If there are 2 parameters in the original
        // action function and you want tO make use of only 1 paramter here but not the 2nd one. Even in that case,
        // you should call bot the parameters but the other parameter which you don't need can be mentioned with some
        // randomm name like i did above. Explanation: The main action fucntion has 4 parameters. They are:
        // (wish(the array parameter), photo(the image parameter), money(amount), info(description)).
        // But i only need three in this component which are: photo, money and info. I don't need "wish".
        // SO, I mentioned it with the parameter name: "xy".Which don't bring any affect to your code.
        // The main concept here is that, the specification that you do in your code should be accurate and cannot
        // be given as you like.

        // Ultimately, "THE SEQUENCE AND COUNT OF THE PARAMETERS OF THE ACTION FUNCTIONS, SHOULD
        // BE FOLLOWED STRICTLY THROUGHOUT YOUR APPLICATION WHENEVER OR WHEREVER YOU'RE USING THOSE PARAMETERS".
        else {
            dispatch(
                addToWishList(xy, id, photo, money, info, brand) // The original way
                // Follow the same sequence for the parameters within the action function mentioned above same as the sequence
                // in the original action function folder. And also the sequence should be same as the sequence that you have
                // maintained for the parameters of the main handler function.

                // Once all these are steps are followed correctly, the entire code will run without any errors for the first time.
                // Now you can map the items in this array in whichever component you want by importing the state there.

            );
            // console.log(globalState.men[0]); 
        }
        setText(0);

    };

    const handleTocart = (xy, id, photo, money, info, brand, index) => {
        setVisibleAmount(true);
        setCheck(index);
        if (globalState.wishlist.filter((object) => object.id === id).length > 0) {
            alert("Item is already pushed to the wishlist");
        }
        else if (text === 0) {
            alert("enter the quantity please");
        }
        else {
            const widthToInt = parseInt(money);
            const result = widthToInt + cartTotal;
            console.log(result)
            setCartTotal(result);
            dispatch(
                addToCart(xy, id, photo, money, info, brand)

            );
        }
        setText(0);
    };

    const handleZoom = (index) => {
        setCheck(index);
        if (check === index) {
            setZoom(!zoom);
        }
    }

    const handleOpen = (val) => {
        if (val === 1) {
            setShowList(true);
            setShowWishList(true);
            setShowCart(false);
        }
        if (val === 2) {
            setShowList(true);
            setShowWishList(false);
            setShowCart(true);
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h3 style={{ marginLeft: "45%", position: "fixed" }}>
                WishList ({globalState.wishCount}) Cart({globalState.cartCount}){" "}
                {/* WishList ({globalState.wishCount}){" "} */}
            </h3>
            <br />
            <br />
            {globalState.wishCount !== 0 ^ globalState.wishCount > 0 ? <Navigate1 setShowList={setShowList} showList={showList} /> : ""}
            {/* <Navigate1 setShowList={setShowList} showList={showList} /> */}
            <br />
            <br />
            <span onClick={() => handleOpen(1)}>WishList</span><br />
            <span onClick={() => handleOpen(2)}>Cart</span>
            {showList ? (
                <div>
                    {showWishList ? <div style={{ justifyContent: 'center' }}>
                        <WishListPage
                            setShowList={setShowList}
                        />
                    </div> : ""}
                    {showCart ? <div style={{ justifyContent: 'center' }}>
                        <CartPage
                            setShowList={setShowList}
                            cartTotal={cartTotal}
                            setCartTotal={setCartTotal}
                        />
                    </div> : ""}
                </div>
            ) : (
                <div>
                    {array.map((photo, index) => (
                        <div key={index}>
                            <img src={photo.urls.small} onClick={() => handleZoom(index)} className={zoom ? "zoom" : " "} />
                            <br />
                            {index === check ?
                                <div>
                                    Quantity: <input value={text} onChange={(e) => setText(e.target.value)} />
                                </div>
                                :
                                " "
                            }
                            <p> Brand: {photo.user.first_name} </p>
                            {visibleAmount ? <p> Amount: {photo.width * text} </p> : <p> Amount: {photo.width} </p>}
                            {/* <p> Amount: {photo.width * text} </p> */}
                            <p> Description: {photo.alt_description} </p>
                            <button
                                onClick={() =>
                                    // you were not passing the id here and
                                    // in WishListPage file in the state the id
                                    // was undefined so the comparison in the filter
                                    // function there was not working (That was one
                                    // reason why delete was not working)
                                    handleWishlist(
                                        null,
                                        photo.id,
                                        photo.urls.small,
                                        photo.width,
                                        photo.alt_description,
                                        photo.user.first_name,
                                        index
                                    )
                                }
                            >
                                {/* 
                                  Pass the required data as parameters seprated with commas as shown above into the function 
                                  in the sequence you want the data to be displayed in. Also it is necessary to maintain the
                                  sequence of data of parameters same as the sequence of the parameters that you have 
                                  maintained in the action function folder
                              */}
                            Add To Wishlist
                            </button>
                            {/* {something === photo.id ? "" : <p>{value.result}</p>} */}
                            <button
                                onClick={() =>
                                    handleTocart(
                                        null,
                                        photo.id,
                                        photo.urls.small,
                                        photo.width * text,
                                        photo.alt_description,
                                        photo.user.first_name,
                                        index
                                    )
                                }
                            >
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Men1;
