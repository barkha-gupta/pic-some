import React, { useEffect, useState } from "react";

const Context= React.createContext();

function ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id){
        const updateArr= allPhotos.map((photo) => {
            if(photo.id === id){
                return {...photo, 
                    isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setAllPhotos(updateArr)
    }

    function addItems(image){
        setCartItems([...cartItems, image])
    }

    function removeFromCart(image){
        setCartItems(pre => pre.filter(item => item.id !== image.id))
    }

    function emptyCart(){
        setCartItems([]);
    }
    return(
        <Context.Provider value={{allPhotos, toggleFavorite, addItems, cartItems, removeFromCart, emptyCart}} >
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context};
