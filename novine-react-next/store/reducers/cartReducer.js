import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE
} from '../actions/action-types/cart-actions'

const initState = {
    products: [
        {
            id: 1,
            title: "Belted chino trousers polo",
            price: 190,
            image: require("../../images/img1.jpg"),
            imageHover: require("../../images/img-hover1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Belted chino trousers polo",
            price: 120,
            image: require("../../images/img2.jpg"),
            imageHover: require("../../images/img-hover2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 3,
            title: "Belted chino trousers polo",
            price: 160,
            image: require("../../images/img3.jpg"),
            imageHover: require("../../images/img-hover3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 4,
            title: "Belted chino trousers polo",
            price: 130,
            image: require("../../images/img4.jpg"),
            imageHover: require("../../images/img-hover4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 5,
            title: "Belted chino trousers polo",
            price: 90,
            image: require("../../images/img5.jpg"),
            imageHover: require("../../images/img-hover5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 6,
            title: "Belted chino trousers polo",
            price: 180,
            image: require("../../images/img6.jpg"),
            imageHover: require("../../images/img-hover6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 7,
            title: "Belted chino trousers polo",
            price: 330,
            image: require("../../images/img7.jpg"),
            imageHover: require("../../images/img-hover7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 8,
            title: "Belted chino trousers polo",
            price: 140,
            image: require("../../images/img8.jpg"),
            imageHover: require("../../images/img-hover8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 9,
            title: "Belted chino trousers polo",
            price: 430,
            image: require("../../images/img1.jpg"),
            imageHover: require("../../images/img-hover1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 10,
            title: "Belted chino trousers polo",
            price: 650,
            image: require("../../images/img2.jpg"),
            imageHover: require("../../images/img-hover2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 11,
            title: "Belted chino trousers polo",
            price: 230,
            image: require("../../images/img3.jpg"),
            imageHover: require("../../images/img-hover3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 12,
            title: "Belted chino trousers polo",
            price: 670,
            image: require("../../images/img4.jpg"),
            imageHover: require("../../images/img-hover4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 13,
            title: "Belted chino trousers polo",
            price: 120,
            image: require("../../images/img5.jpg"),
            imageHover: require("../../images/img-hover5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 14,
            title: "Belted chino trousers polo",
            price: 540,
            image: require("../../images/img6.jpg"),
            imageHover: require("../../images/img-hover6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 15,
            title: "Belted chino trousers polo",
            price: 230,
            image: require("../../images/img7.jpg"),
            imageHover: require("../../images/img-hover7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 16,
            title: "Belted chino trousers polo",
            price: 530,
            image: require("../../images/img8.jpg"),
            imageHover: require("../../images/img-hover8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    addedItems:[],
    addedItemsToCompare:[],
    total: 0,
    shipping: 0
}

const cartReducer = (state = initState, action) => {
   
    if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(existed_item){
            addedItem.quantity += 1 
            return {
                ...state,
                total: state.total + addedItem.price 
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }

    if(action.type === ADD_TO_COMPARE){
        let addedItemToCompare = state.products.find(item => item.id === action.id)
        
        addedItemToCompare.quantity = 1;
        
        return {
            ...state,
            addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === REMOVE_ITEM_FROM_COMPARE){
        let new_items = state.addedItemsToCompare.filter(item=> action.id !== item.id)
        
        return {
            ...state,
            addedItemsToCompare: new_items
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING'){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}

export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}