import React, { useEffect, useState } from "react";
import axios from "axios";
import { getItems } from "./getItems";
import Cards from "../components/Cards";
const Items = () => {
  const [item, setItem] = useState([]);
 

  useEffect(() => {


    axios
    .get("http://localhost:3001/items")
    .then((res) =>{
      setItem(res.data)
    })
    .catch((err) => console.log(err));
    

  }, []);
  

  return (
    <>
      {item.map((x)=>{
      return (<Cards posts={x}/>)
     })}
    </>
  );
};

export default Items;
