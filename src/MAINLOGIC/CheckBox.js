import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { addWislist, addToCart } from "../Actions/Actions";
import { useSelector, useDispatch } from "react-redux";
import WishListPage from "./WishListPage";
import CartPage from "./CartPage";
import Navigate from "./Navigate";

function CheckBox() {
    const [array, setArray] = useState("");
    const [state, setState] = useState("");
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [showList, setShowList] = useState(false);

    const fetching = useSelector((state) => state);

    const dispatch = useDispatch();

    let PRICE;

    const handleCheckBox = (val) => {
        if (val === 1) {
            setShow(!show);
            setState(val);
            const result1 =
                "https://api.unsplash.com/search/photos?page=5&query=men-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(result1).then((response) => {
                console.log(response);
                setArray(response.data.results);
            });
        }
        if (val === 2) {
            setShow1(!show1);
            setState(val);
            const result1 =
                "https://api.unsplash.com/search/photos?page=5&query=womens-fashion&client_id=0gZWxHSSauOXUSFb47wPsYWsNh29f7NqcQk4fJGpOrg";
            axios.get(result1).then((response) => {
                console.log(response);
                setArray(response.data.results);
            });
        }
    };

    const handleWishlist = () => {
        // setShowList(true);
        dispatch(
            addWislist({
                // id: array.id,
                // image: array.urls,
                // price: array.width,
                // yo: 2,
                // description: 2
            })
        );
    };

    // const handleTocart = (photo) => {
    //   setShowList(true);
    //   const ID = uuidv4();
    //   const IMAGE = photo.urls.small;
    //   const PRICE = photo.width;
    //   const DESCRIPTION = photo.alt_description;
    //   dispatch(
    //     addToCart({
    //       id: ID,
    //       image: IMAGE,
    //       price: PRICE,
    //       description: DESCRIPTION
    //     })
    //   );
    // };

    return (
        <div>
            <Navigate setShowList={setShowList} />
            <h1>hello</h1>
            <div>
                {fetching.wishlist.map((items, id) => (
                    <div key={id}>
                        <p>{items.description}</p>
                    </div>
                ))}
                <button onClick={(e) => handleCheckBox(e)}>Set</button>
                <button onClick={(e) => handleWishlist(e)}>Show</button>
                <p>{fetching.wishlist.Description}</p>
                <p>{fetching.yo}</p>
            </div>
        </div>
    );
}

export default CheckBox;
