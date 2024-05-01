import React, { useEffect, useState } from "react";
import "./ItemsAvailable.css";

function ItemsAvailable(props) {
  const [items, setItems] = useState(props.items);
  const [images, setImages] = useState([]); 

  useEffect(() => {
    items.forEach((item) => {
      const image = new Image();
      image.src = item.image;
      image.onload = () => {
        setImages((prevImages) => [...prevImages, image]);
        setItems((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.id === item.id ? { ...prevItem, image } : prevItem
          )
        );
      };
    });
  }, [items]);
 
  return (
    <ul>
        <h3>watch</h3>
      {items.map((item) => (
        <li key={item.id} className="items-available-ul-li li">
        <img src={images[item.id]?.src} alt={item.name} className="item-image" />
        {item.name} - {item.title} - {item.price} ₪
      </li>
      ))}
    </ul>
  );
}

export default ItemsAvailable;