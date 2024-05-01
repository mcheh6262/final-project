import React from "react";
import "./ListItems.css"

function ListItems(props) {
    const items = props.items;
    return(
        <div>
            {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.title} - {item.price} ₪
        </li>
      ))}
    </div>
    );
}
export default ListItems;
