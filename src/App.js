import React, { useState } from 'react';
import './App.css';
import OrderList from './compnnet/list/OrderList';
import ClientRegistration from './compnnet/newClient/ClientRegistration';
import Newclient from './compnnet/newClient/NewClient';
import SearchingArea from './compnnet/searching/SearchingArea';
import ItemsAvailable from './compnnet/itemsAvailable/ItemsAvailable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchDetails from './compnnet/searching/WatchDetails';
import Home from './compnnet/list/Home';



function App() {


  const [clients, setClients] = useState([]);

    const items = [
    {
      id: 1,
      name: "nine west",
      title: "Man's wristwatch",
      price: 1000,
      quantity: 10,
      image: "https://m.media-amazon.com/images/I/81-HbGIsxVL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      name: "rolex",
      title: "women's wristwatch",
      price: 2000,
      quantity: 5,
      image: "https://www.frostnyc.com/cdn/shop/products/Rolex_1ct_yellow_1_2_600x.jpg?v=1677628267",
    }
  ];
    
  
  const handleRegistration = (client) => {
    setClients((prevClient) => 
       [...prevClient,client]
    )
  };

  const handleWatchClick = (watch) => {
    console.log("Watch clicked:", watch);
  };
  
  return (
    <div>
      <BrowserRouter>
      <header>
        <h1>My Watch</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZf3-DyADBvaNmphZbUcPLaB38IeTDReUGyQ&usqp=CAU" width={350} alt="Logo" />
      </header>
      <>
        <ItemsAvailable items={items}/>
        <OrderList/>
        <Newclient register={handleRegistration} />
        {clients.map((c, i) => (
          <ClientRegistration name={c} key={i}/>
        ))}
      </>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/watch/:id" element={<WatchDetails />} />
   <Route path="/search" element={<SearchingArea watches={items} handleWatchClick={handleWatchClick} />} />
   </Routes>
      </BrowserRouter>
  </div>
  );
  
}


export default App;
