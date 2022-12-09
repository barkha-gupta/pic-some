import React, { useContext, useState } from 'react'
import {Context} from "../Context";

export default function CartItem({item}) {
  const [trashClassName, setTrashClassNmae] = useState("ri-delete-bin-line")
    const { removeFromCart } = useContext(Context);
  return (
    <div className="cart-item">
            <i className={trashClassName}
                onMouseOver={() => setTrashClassNmae("ri-delete-bin-fill")}
                onMouseLeave={()=> setTrashClassNmae("ri-delete-bin-line")}
                onClick={() => removeFromCart(item)}></i>
            <img src={item.url} alt={item.url} width="130px" />
            <p>$5.99</p>
        </div>
  )
}
