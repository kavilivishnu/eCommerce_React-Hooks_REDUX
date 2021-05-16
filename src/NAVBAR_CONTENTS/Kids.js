import React, { useState, useEffect } from "react";
import axios from "axios";
import WishListPage from "../MAINLOGIC/WishListPage";
import Navigate1 from "../MAINLOGIC/Navigate1";
import { addToWishList, addToCart } from "../Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import CartPage from '../MAINLOGIC/CartPage';
import { BsFillHeartFill } from 'react-icons/bs';
import { BiCartAlt } from 'react-icons/bi';

function Kids() {
    const globalState = useSelector((state) => state);
    const dispatch = useDispatch();

    const [checkedToys, setCheckedToys] = useState(false);
    const [checkedShoes, setCheckedShoes] = useState(false);
    const [checkedJacket, setCheckedJacket] = useState(false);

    const [toyArray, setToyArray] = useState([]);
    const [shoeArray, setShoeArray] = useState([]);
    const [jacketArray, setJacketArray] = useState([]);

    const [array, setArray] = useState([]);
    const [showList, setShowList] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const [check, setCheck] = useState("");
    const [text, setText] = useState(0);
    const [zoom, setZoom] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showWishList, setShowWishList] = useState(false);
    const [visibleAmount, setVisibleAmount] = useState(false);

    useEffect(() => {
        const result1 =
            "https://api.unsplash.com/search/photos?page=1&query=kids-clothe&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
        axios.get(result1).then((response) => {
            setArray(response.data.results);
        });
    }, []);

    const handleWishlist = (xy, id, photo, money, info, brand) => {
        // setCheck(index);
        if (globalState.wishlist.filter((object) => object.id === id).length > 0) {
            alert("Item is already pushed to the wishlist");
        }

        else {
            dispatch(
                addToWishList(xy, id, photo, money, info, brand)
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

    // const handleZoom = (index) => {
    //     setCheck(index);
    //     if (check === index) {
    //         setZoom(!zoom);
    //     }
    // }

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

    const handleChecked = (val) => {
        if (val === 1) {
            setCheckedToys(!checkedToys);
            const toys = "https://api.unsplash.com/search/photos?page=1&query=kids-toys&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(toys).then((response) => {
                setToyArray(response.data.results);
            });
        }
        if (val === 2) {
            setCheckedShoes(!checkedShoes);
            const shoe = "https://api.unsplash.com/search/photos?page=1&query=kids-shoes&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(shoe).then((response) => {
                setShoeArray(response.data.results);
            });
        }
        if (val === 3) {
            setCheckedJacket(!checkedJacket);
            const jackets = "https://api.unsplash.com/search/photos?page=1&query=kids-jackets&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(jackets).then((response) => {
                setJacketArray(response.data.results);
            });
        }

    }

    return (
        <div className={globalState.backdropTrigger ? "Grey_Background" : "Kids_Data"} >
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
            <div className="WishList_And_Cart" >
                <span style={{ marginRight: "10%" }} onClick={() => handleOpen(1)}>
                    {globalState.wishCount !== 0 ?
                        <BsFillHeartFill size="25" style={{ outline: "none", color: "red" }} />
                        :
                        <BsFillHeartFill size="25" style={{ color: "black", opacity: "25%" }} />}
                </span>
                <span onClick={() => handleOpen(2)}><BiCartAlt size="25" /></span>
            </div>
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
                    <div style={{ marginRight: "85%" }} >
                        <h3 className="Apply_Filters_Heading" >Apply Filters</h3>
                        <div>
                            <input type="checkbox" checked={checkedToys} onClick={() => handleChecked(1)} />
                            <label>Toys</label> <br />
                        </div>
                        <div>
                            <input type="checkbox" checked={checkedShoes} onClick={() => handleChecked(2)} />
                            <label >Shoes</label><br />
                        </div>
                        <div>
                            <input type="checkbox" checked={checkedJacket} onClick={() => handleChecked(3)} />
                            <label>Jackets</label>
                        </div>
                    </div>
                    { checkedToys ^ checkedShoes ^ checkedJacket === false ?
                        <div>
                            {array.map((photo, index) => (
                                <div key={index} className="Arrange_API_Data" >
                                    <img src={photo.urls.small} className="API_Images" />
                                    <br />
                                    <div className="Items_Descriptions" >
                                        <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                        {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} </p>}
                                        <p><b style={{ color: "rgb(255, 89, 71)" }} >Description:</b> {photo.alt_description} </p>
                                    </div>
                                    <br />
                                    {index === check ?
                                        <div>
                                            <p className="Quantity_Input" ><b>Quantity:</b></p> <input style={{ borderRadius: "7px" }} value={text} onChange={(e) => setText(e.target.value)} />
                                        </div>
                                        :
                                        " "
                                    }
                                    <div>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
                                            style={{ marginRight: "16px" }}
                                            onClick={() =>
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
                                            Add To Wishlist
                                        </button>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
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
                                </div>
                            ))}
                        </div>
                        :
                        ""
                    }
                    <br />
                    { checkedToys ?
                        <div>
                            <br />
                            <h1>Kids Toys</h1>
                            {toyArray.map((photo, index) => (
                                <div key={index} className="Arrange_API_Data" >
                                    <img src={photo.urls.small} className="API_Images" />
                                    <br />
                                    <div className="Items_Descriptions" >
                                        <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                        {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} </p>}
                                        <p><b style={{ color: "rgb(255, 89, 71)" }} >Description:</b> {photo.alt_description} </p>
                                    </div>
                                    <br />
                                    {index === check ?
                                        <div>
                                            <p className="Quantity_Input" ><b>Quantity:</b></p> <input style={{ borderRadius: "7px" }} value={text} onChange={(e) => setText(e.target.value)} />
                                        </div>
                                        :
                                        " "
                                    }
                                    <div>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
                                            style={{ marginRight: "16px" }}
                                            onClick={() =>
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
                                            Add To Wishlist
                                        </button>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
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
                                </div>
                            ))}
                        </div>
                        :
                        ""
                    }
                    <br />
                    { checkedShoes ?
                        <div>
                            <br />
                            <h1>Kids Shoes</h1>
                            {shoeArray.map((photo, index) => (
                                <div key={index} className="Arrange_API_Data" >
                                    <img src={photo.urls.small} className="API_Images" />
                                    <br />
                                    <div className="Items_Descriptions" >
                                        <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                        {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} </p>}
                                        <p><b style={{ color: "rgb(255, 89, 71)" }} >Description:</b> {photo.alt_description} </p>
                                    </div>
                                    <br />
                                    {index === check ?
                                        <div>
                                            <p className="Quantity_Input" ><b>Quantity:</b></p> <input style={{ borderRadius: "7px" }} value={text} onChange={(e) => setText(e.target.value)} />
                                        </div>
                                        :
                                        " "
                                    }
                                    <div>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
                                            style={{ marginRight: "16px" }}
                                            onClick={() =>
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
                                            Add To Wishlist
                                        </button>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
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
                                </div>
                            ))}
                        </div>
                        :
                        ""
                    }
                    <br />
                    { checkedJacket ?
                        <div>
                            <br />
                            <h1>Kids Jackets</h1>
                            {jacketArray.map((photo, index) => (
                                <div key={index} className="Arrange_API_Data" >
                                    <img src={photo.urls.small} className="API_Images" />
                                    <br />
                                    <div className="Items_Descriptions" >
                                        <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                        {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} </p>}
                                        <p><b style={{ color: "rgb(255, 89, 71)" }} >Description:</b> {photo.alt_description} </p>
                                    </div>
                                    <br />
                                    {index === check ?
                                        <div>
                                            <p className="Quantity_Input" ><b>Quantity:</b></p> <input style={{ borderRadius: "7px" }} value={text} onChange={(e) => setText(e.target.value)} />
                                        </div>
                                        :
                                        " "
                                    }
                                    <div>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
                                            style={{ marginRight: "16px" }}
                                            onClick={() =>
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
                                            Add To Wishlist
                                        </button>
                                        <button
                                            className="Add_To_WishList_And_Cart_Buttons"
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
                                </div>
                            ))}
                        </div>
                        :
                        ""
                    }
                </div>
            )}
        </div>
    );
}

export default Kids;
