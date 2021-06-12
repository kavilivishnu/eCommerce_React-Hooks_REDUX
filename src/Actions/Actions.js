export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const DECREMENT_COUNT_CART = "DECREMENT_COUNT_CART";
export const CLEAR_WISHLIST_COUNT = "CLEAR_WISHLIST_COUNT";
export const CLEAR_CART_COUNT = "CLEAR_CART_COUNT";
export const BACKGROUND_GREY = "BACKGROUND_GREY";
export const SHOW_CONTENTS = "SHOW_CONTENTS";
export const CURRENCY_SELECT = "CURRENCY_SELECT";
export const WISHLIST_DELETE = "WISHLIST_DELETE";
export const CART_DELETE = "CART_DELETE";

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

export function clearWishListCount() {
    return {
        type: CLEAR_WISHLIST_COUNT
    }
}

export function clearCartCount() {
    return {
        type: CLEAR_CART_COUNT
    }
}

export function backgroundGrey(status) {
    return {
        type: BACKGROUND_GREY,
        status
    }
}

export function showContents(status) {
    return {
        type: SHOW_CONTENTS,
        status
    }
}

export function currencySelect(currency) {
    return {
        type: CURRENCY_SELECT,
        currency
    }
}

export function wishListDelete(id) {
    return {
        type: WISHLIST_DELETE,
        id
    }
}

export function cartDelete(id) {
    return {
        type: CART_DELETE,
        id
    }
}



