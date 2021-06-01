import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCountCart } from "../Actions/Actions";

function CartPage({
    setShowList,
    cartTotal,
    setCartTotal,
}) {

    const [fetchUpdated, setFetchUpdated] = useState(
        useSelector((state) => state)
    );
    const dispatch = useDispatch();

    const handleDelete = (photo) => {
        const convertToInt = parseInt(photo.price);
        const final = cartTotal - convertToInt;
        setCartTotal(final);
        if (cartTotal === 0) {
            setCartTotal(0);
        }
        if (fetchUpdated.cartCount !== 0) {
            dispatch(decrementCountCart());
        }
        const id = photo.id;
        const filteredFetch = {
            ...fetchUpdated,
            cart: fetchUpdated.cart.filter(
                (inidividualItem) => inidividualItem.id !== id
            )
        };
        setFetchUpdated(filteredFetch);
    };

    const handleClear = () => {
        const clearAll = {
            cart: [],
            ...fetchUpdated,
            cartCount: 0
        }
        setFetchUpdated(clearAll);
        setCartTotal(0);
    }

    return (
        <div>
            <h1>Cart</h1><br />
            <p className="Items_Descriptions">
                <b style={{ color: "rgb(255, 89, 71)" }} >
                    Total Amout:
                </b> {cartTotal} {fetchUpdated.symbol}
            </p><br />
            <button
                // className="Add_To_WishList_And_Cart_Buttons"
                className="Go_Back_To_Home"
                onClick={() => setShowList(false)}>
                Go Back to home
            </button>
            <button
                className="Remove_All_Items_From_WishList_And_Cart"
                onClick={(e) => handleClear(e)}>
                Clear Cart
            </button>
            {fetchUpdated.cart &&
                fetchUpdated.cart.map((photo, index) => (
                    <div key={index} className="Arrange_API_Data" >
                        {photo.description === "" ? (
                            ""
                        ) : (
                            <div className="Arrange_API_Data" >
                                <img src={photo.image} className="API_Images" />
                                <br />
                                <div className="Items_Descriptions" >
                                    <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.brand} </p>
                                    <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.price} {fetchUpdated.symbol}</p>
                                    <p> <b style={{ color: "rgb(255, 89, 71)" }} >Description:</b> {photo.description} </p>
                                </div>
                                <button className="NavigationBar_LogOut_Butoon" onClick={() => handleDelete(photo)}>Remove</button>
                                <hr />
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    );
}

export default CartPage;

