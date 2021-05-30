import {
    ADD_TO_WISHLIST,
    DELETE_ITEM,
    ADD_TO_CART,
    DECREMENT_COUNT,
    DECREMENT_COUNT_CART,
    CLEAR_COUNT,
    BACKGROUND_GREY,
    SHOW_CONTENTS
} from "../Actions/Actions";

export const wish = {

    wishlist: [],

    // men: [
    //     {
    //         id: null,
    //         image: "",
    //         price: "",
    //         description: ""
    //     }
    // ],

    cart: [],
    wishCount: 0,
    cartCount: 0,
    watchCheck: "",
    shoesCheck: "",
    walletCheck: "",
    backdropTrigger: "",
    contentsDisplay: ""
};

export const Reducer = (state = wish, action) => {
    // const value = state.men[0].price;
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const count1 = state.wishCount + 1;
            const list = [
                ...state.wishlist,
                {
                    // **The action."name" should be the same name as the arguments that had been passed
                    //   in the action function. Any difference in the parameters name, won't execute the
                    //   result as expected.
                    // This action.something pattern can only be used when you're passing parameters/arguments
                    // to the action function. Then the corresponding action should be called in the component where
                    // we want to use and again pass the arguments there inside the action function impoorted in a
                    // particular folder, in the same sequence as in the action function.
                    id: action.id,
                    image: action.photo,
                    price: action.money,
                    description: action.info,
                    brand: action.brand
                }
            ];
            return {
                ...state,
                wishlist: list,
                wishCount: count1,
            };
        // return {
        //     ...state,
        //     men: [
        //         ...state.men, {
        //             id: action.id,
        //             image: action.photo,
        //             price: action.money,
        //             description: action.info
        //         }
        //     ]
        // };
        case ADD_TO_CART:
            const cartList = [
                ...state.cart,
                {
                    id: action.id,
                    image: action.photo,
                    price: action.money,
                    description: action.info,
                    brand: action.brand
                }
            ];
            return {
                ...state,
                cart: cartList
            };
        case DELETE_ITEM:
            const set = action.index;
            const something = state.men.filter(
                (individualItem) => individualItem.id !== set
            );
            return {
                ...state,
                men: something
            };
        case DECREMENT_COUNT:
            const minusWishListCount = state.wishCount - 1
            return {
                ...state,
                wishCount: minusWishListCount,
            }
        case DECREMENT_COUNT_CART:
            const minusCartCount = state.cartCount - 1;
            return {
                ...state,
                cartCount: minusCartCount
            }
        case CLEAR_COUNT:
            return {
                ...state,
                wishCount: 0,
                cartCount: 0
            }
        case BACKGROUND_GREY:
            const Status = action.status
            return {
                ...state,
                backdropTrigger: Status
            }
        case SHOW_CONTENTS:
            const contentsStatus = action.status;
            return {
                ...state,
                contentsDisplay: contentsStatus
            }
        default:
            return state;
    }
};

export default Reducer;
