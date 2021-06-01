import React, { useState, useEffect } from "react";
import axios from "axios";
import WishListPage from "../MAINLOGIC/WishListPage";
import Navigate1 from "../MAINLOGIC/Navigate1";
import { addToWishList, addToCart } from "../Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import CartPage from '../MAINLOGIC/CartPage';
import { BsFillHeartFill } from 'react-icons/bs';
import { BiCartAlt } from 'react-icons/bi';

function Home_Living() {
    const globalState = useSelector((state) => state);
    const dispatch = useDispatch();

    const [checkedBedsheets, setCheckedBedSheets] = useState(false);
    const [checkedCushionCovers, setCheckedCushionCovers] = useState(false);
    const [checkedCurtainsAndBlinds, setCheckedCurtainAndBlinds] = useState(false);

    const [array, setArray] = useState([]);

    const [bedSheetsArray, setBedSheetsArray] = useState([]);
    const [cushionCoversArray, setCusionCoversArray] = useState([]);
    const [curtainAndBlindsArray, setCurtainAndBlindsArray] = useState([]);

    const [showList, setShowList] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);
    const [check, setCheck] = useState("");
    const [text, setText] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [showWishList, setShowWishList] = useState(false);
    const [visibleAmount, setVisibleAmount] = useState(false);

    useEffect(() => {
        const result1 =
            "https://api.unsplash.com/search/photos?page=5&query=home-and-living&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
        axios.get(result1).then((response) => {
            setArray(response.data.results);
        });
    }, []);

    const handleWishlist = (xy, id, photo, money, info, brand) => {
        if (globalState.wishlist.filter((object) => object.id === id).length > 0) {
            alert("Item is already pushed to the wishlist");
        }
        else {
            dispatch(
                addToWishList(xy, id, photo, money, info, brand)

            );
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
            setCheckedBedSheets(!checkedBedsheets);
            const watch = "https://api.unsplash.com/search/photos?page=1&query=bedsheets&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(watch).then((response) => {
                setBedSheetsArray(response.data.results);
            });
        }
        if (val === 2) {
            setCheckedCushionCovers(!checkedCushionCovers);
            const shoe = "https://api.unsplash.com/search/photos?page=1&query=cushion-covers&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(shoe).then((response) => {
                setCusionCoversArray(response.data.results);
            });
        }
        if (val === 3) {
            setCheckedCurtainAndBlinds(!checkedCurtainsAndBlinds);
            const wallet = "https://api.unsplash.com/search/photos?page=1&query=curtains-and-blinds&per_page=40&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(wallet).then((response) => {
                setCurtainAndBlindsArray(response.data.results);
            });
        }

    }

    return (
        <div className={globalState.backdropTrigger ? "Grey_Background" : "Home_Living_Data"} >
            {globalState.contentsDisplay ?
                <div>
                    <h3 className="WishList_And_Cart_Count" >
                        WishList ({globalState.wishCount}) Cart({globalState.cartCount}){" "}
                    </h3>
                    <br />
                    <br />
                    {globalState.wishCount !== 0 ^ globalState.wishCount > 0 ? <Navigate1 setShowList={setShowList} showList={showList} /> : ""}
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
                                    <input type="checkbox" checked={checkedBedsheets} onClick={() => handleChecked(1)} />
                                    <label>Bedsheets</label> <br />
                                </div>
                                <div>
                                    <input type="checkbox" checked={checkedCushionCovers} onClick={() => handleChecked(2)} />
                                    <label style={{ marginLeft: "32%" }} >Cushion Covers</label><br />
                                </div>
                                <div>
                                    <input type="checkbox" checked={checkedCurtainsAndBlinds} onClick={() => handleChecked(3)} />
                                    <label style={{ marginLeft: "38%" }} >Curtains and blinds</label>
                                </div>
                            </div>
                            { checkedBedsheets ^ checkedCushionCovers ^ checkedCurtainsAndBlinds === false ?
                                <div>
                                    {array.map((photo, index) => (
                                        <div key={index} className="Arrange_API_Data" >
                                            <img src={photo.urls.small} className="API_Images" />
                                            <br />
                                            <div className="Items_Descriptions" >
                                                <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                                {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} {globalState.symbol} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} {globalState.symbol} </p>}
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
                            { checkedBedsheets ?
                                <div>
                                    <br />
                                    <h1>Bedsheets</h1>
                                    {bedSheetsArray.map((photo, index) => (
                                        <div key={index} className="Arrange_API_Data" >
                                            <img src={photo.urls.small} className="API_Images" />
                                            <br />
                                            <div className="Items_Descriptions" >
                                                <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                                {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} {globalState.symbol} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} {globalState.symbol} </p>}
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
                            { checkedCushionCovers ?
                                <div>
                                    <br />
                                    <h1>Cushion Covers</h1>
                                    {cushionCoversArray.map((photo, index) => (
                                        <div key={index} className="Arrange_API_Data" >
                                            <img src={photo.urls.small} className="API_Images" />
                                            <br />
                                            <div className="Items_Descriptions" >
                                                <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                                {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} {globalState.symbol} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} {globalState.symbol} </p>}
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
                            { checkedCurtainsAndBlinds ?
                                <div>
                                    <br />
                                    <h1>Curtains and blinds</h1>
                                    {curtainAndBlindsArray.map((photo, index) => (
                                        <div key={index} className="Arrange_API_Data" >
                                            <img src={photo.urls.small} className="API_Images" />
                                            <br />
                                            <div className="Items_Descriptions" >
                                                <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.user.first_name} </p>
                                                {visibleAmount ? <p><b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width * text} {globalState.symbol} </p> : <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.width} {globalState.symbol} </p>}
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
                :
                ""
            }
        </div>
    );
}

export default Home_Living;

