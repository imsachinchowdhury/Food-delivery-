import {fetchCart,fetchUser} from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();


console.log(userInfo);
export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow:false,
    cartItems : cartInfo,
};



