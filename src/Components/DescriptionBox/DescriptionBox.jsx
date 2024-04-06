import React from "react";
import "./DescriptionBox.css";
function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Comfortable, casual and loose fitting, our heavyweight dark color
          t-shirt will quickly become one of your favorites. Made from 100%
          cotton, it's unisex and wears well on anyone and everyone. We've
          double-needle stitched the bottom and sleeve hems for extra
          durability. Select a design from our marketplace or customize it to
          make it uniquely yours!
        </p>
        <p>
          An e-commerce (electronic commerce) platform is a website or online
          application that facilitates the buying and selling of goods and
          services over the internet. It enables businesses and consumers to
          conduct transactions electronically without the need for physical
          interaction.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
