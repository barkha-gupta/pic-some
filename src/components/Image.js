import React, { useContext } from "react"
import {useState} from "react";
import {Context} from "../Context";
import PropTypes from "prop-types";

function Image({className, img}) {
    const { toggleFavorite } = useContext(Context);
    const { addItems } = useContext(Context);
    const {cartItems, removeFromCart} = useContext(Context);
    const [hovered, setHovered] = useState(false);

    function cartIcon(img) {
        const found= cartItems.some((ele) =>{
            return ele.id === img.id;
        })
       
        if(found){
            return <i className="ri-shopping-cart-fill cart"
            onClick={() => removeFromCart(img)}></i>
        }
        else if(hovered){
            return <i className="ri-add-circle-line cart"
            onClick={() => addItems(img)}></i>
        }
    }

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    return (
        <div className={`${className} image-container`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
            <img src={img.url} 
            alt={img.url}
            className="image-grid"/>

            {heartIcon()}
            {cartIcon(img)}
        </div>
    )
}

Image.propTypes= {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
