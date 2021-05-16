export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_ITEM = "DELETE_ITEM";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const DECREMENT_COUNT_CART = "DECREMENT_COUNT_CART";
export const CLEAR_COUNT = "CLEAR_COUNT";
export const BACKGROUND_GREY = "BACKGROUND_GREY";

export function addToWishList(wish, id, photo, money, info, brand) {
    // ***The sequence of arguments of the function and the sequence of the arguments
    //    while returning the same parameters within return{} should be exactly same!
    //    If the sequence of arguments is changed, the the sequence in return should also be changed.

    // This argument passing method is used when you have a requirement of wanting to pass data from the
    // component to the main "state". Initially the data of props withing the object of initialState, will
    // contain nothing. With the help of these action function parameters, we pass the data from respective
    // component for the first time into state and make it reflect onto the screen. This process can be mainly
    // used when you're dealing with Api fetching part in your application.
    return {
        type: ADD_TO_WISHLIST,
        payload: wish,
        id,
        photo,
        money,
        info,
        brand
    };
}

export function addToCart(wish, id, photo, money, info, brand) {
    return {
        type: ADD_TO_CART,
        payload: wish,
        id,
        photo,
        money,
        info,
        brand
    }
}

export function deleteItem(index) {
    return {
        type: DELETE_ITEM,
        index
    };
}

export function decrementCount() {
    return {
        type: DECREMENT_COUNT
    }
}

export function decrementCountCart() {
    return {
        type: DECREMENT_COUNT_CART
    }
}

export function clearCount() {
    return {
        type: CLEAR_COUNT
    }
}

export function backgroundGrey(status) {
    return {
        type: BACKGROUND_GREY,
        status
    }
}

