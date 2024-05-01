import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WatchDetails.css";


function WatchDetails(){
    const {id} = useParams();
    const [watch, setWatch] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
      fetch(`/api/watches/${id}`)
        .then(response => response.json())
        .then(data => {
        setWatch(data);
        setIsLoading(false)
    })
    .catch( (error) => {
        console.log(error);
        setIsLoading(false);
    });
    }, [id]);

    if (isLoading) {
        return <p>Loading watch details...</p>;
      }
    
      if (!watch) {
        return <p>Error: Watch not found.</p>;
      }

    return (
      <div>
        <h1>{watch.name}</h1>
        <img src={watch.image} alt={watch.name} />
        <p>price: {watch.price} ₪</p>
        <p>quantity: {watch.quantity}</p>
      </div>
 );
}
export default WatchDetails;