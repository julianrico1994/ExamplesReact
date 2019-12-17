// import { connect } from 'react-redux';
import { createStore } from 'redux';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state, 
                cart: state.cart.concat(action.product)
            }
            break;
        }
        case REMOVE_FROM_CART: {
            return {
                ...state, 
                cart: state.cart.filter((product) => product.id !== action.product.id)
            }
            break;
        }
        default: {
            return state;
            break;
        }
    }
}

export default createStore(reducer, { cart: [] });