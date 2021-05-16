import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCount, clearCount } from "../Actions/Actions";

function WishListPage({ setShowList }) {
    // let fetch = useSelector((state) => state);

    // because we want to modify fetch we can't declare that
    // as a constant variable. The app will not render if we modify a variable
    // We should use local state to do that
    // I've called it fetchedUpdated and initialize it with the
    // value read from state
    const [fetchUpdated, setFetchUpdated] = useState(
        useSelector((state) => state)
    );
    const dispatch = useDispatch();

    const handleDelete = (photo) => {
        if (fetchUpdated.wishCount !== 0) {
            dispatch(decrementCount());
        }

        const id = photo.id;

        // Because fetch is an object with some properties
        // (in this case men and women) we should leave
        // the rest of it as it is and only modifiy men property which
        // is an array and then we set the state with modified value
        const filteredFetch = {
            ...fetchUpdated,
            wishlist: fetchUpdated.wishlist.filter(
                (inidividualItem) => inidividualItem.id !== id
            )
        };
        setFetchUpdated(filteredFetch);
    };

    const handleClear = () => {
        dispatch(clearCount());
        const clearAll = {
            wishlist: [],
        }
        setFetchUpdated(clearAll);
    }

    return (
        <div>
            <h1>WishList</h1>
            <button
                // className="Add_To_WishList_And_Cart_Buttons"
                className="Go_Back_To_Home"
                onClick={() => setShowList(false)}>
                Go Back to Home
            </button>
            <button

                className="Remove_All_Items_From_WishList_And_Cart"
                onClick={(e) => handleClear(e)}>Clear WishLisht
            </button><br />
            {/* since we are using the local state we read that here */}
            {fetchUpdated.wishlist &&
                fetchUpdated.wishlist.map((photo, index) => (
                    <div key={index} >
                        {photo.description === "" ? (
                            ""
                        ) : (
                            <div className="Arrange_API_Data" >
                                <img src={photo.image} className="API_Images" />
                                <br />
                                <div className="Items_Descriptions" >
                                    <p> <b style={{ color: "rgb(255, 89, 71)" }} >Brand:</b> {photo.brand} </p>
                                    <p> <b style={{ color: "rgb(255, 89, 71)" }} >Amount:</b> {photo.price}</p>
                                    <p> <b style={{ color: "rgb(255, 89, 71)" }} >Description:</b> {photo.description} </p>
                                </div>
                                <button className="NavigationBar_LogOut_Butoon" onClick={() => handleDelete(photo)}>Remove</button>
                                <hr />
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default WishListPage;
