import React from "react";
import "./Item.css";
function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}VND</div>
        <div className="item-price-old">{props.old_price}VND</div>
      </div>
    </div>
  );
}

export default Item;