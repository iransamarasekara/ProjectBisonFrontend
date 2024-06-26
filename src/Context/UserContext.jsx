import { useEffect } from "react";
import { useState } from "react";
import React, { createContext } from 'react';

export const UserContext = createContext(null);

// const getDefaultCart = ()=>{
//     let cart = {};
//     for(let index = 0; index < 300+1; index++){
//         cart[index] = 0;
//     }
//     return cart;
// }


const UserContextProvider = (props) => {
    // const [all_user,setAll_User] = useState([]);
    const [currentId,setCurrentId] = useState(null);

    // useEffect(() => {
    //     fetch(process.env.LinkForUsers).then((response)=>response.json()).then((data)=>setAll_User(data));
        // if(localStorage.getItem('auth-token')){
        //     fetch('https://projectbisonbackend.onrender.com/getcart',{
        //         method:'POST',
        //         headers:{
        //             Accept:'application/form-data',
        //             'auth-token':`${localStorage.getItem('auth-token')}`,
        //             'Content-Type':'application/json',
        //         },
        //         body:"",
        //     }).then((response)=>response.json()).then((data)=>setCartItems(data));
        // }
    // },[])
    

    // const addToCart = (itemId)=>{
    //     setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    //     if(localStorage.getItem('auth-token')){
    //         fetch('https://projectbisonbackend.onrender.com/addtocart',{
    //             method:'POST',
    //             headers:{
    //                 Accept:'application/form-data',
    //                 'auth-token':`${localStorage.getItem('auth-token')}`,
    //                 'Content-Type':'application/json',
    //             },
    //             body:JSON.stringify({"itemId":itemId}),
    //         }).then((response)=>response.json()).then((data)=>console.log(data));
    //     }
    // }
    
    // const removeFromCart = (itemId)=>{
    //     setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    //     if(localStorage.getItem('auth-token')){
    //         fetch('https://projectbisonbackend.onrender.com/removefromcart',{
    //             method:'POST',
    //             headers:{
    //                 Accept:'application/form-data',
    //                 'auth-token':`${localStorage.getItem('auth-token')}`,
    //                 'Content-Type':'application/json',
    //             },
    //             body:JSON.stringify({"itemId":itemId}),
    //         }).then((response)=>response.json()).then((data)=>console.log(data));
    //     }
    // }

    // const getTotalCartAmount = ()=> {
    //     let totalAmount = 0;
    //     for(const item in cartItems){
    //         if(cartItems[item]>0){
    //             let itemInfo = all_product.find((product)=>product.id===Number(item));
    //             totalAmount += (itemInfo.new_price * cartItems[item]);
    //         }
            
    //     }
    //     return totalAmount;
    // }

    const getProductId = (currentId)=> {
      setCurrentId(currentId);
    }

    const contextValue = { getProductId, currentId};

    return(
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
