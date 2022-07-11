import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import Carsol from "../components/Carsol";
import Footer from "../components/Footer";
import Items from "../data/Items";
import { useSelector } from "react-redux";
import Admin from "./Admin";

const Home = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/items")
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Carsol />
      <div
        className='my-5'
        style={{ marginLeft: "150px", marginRight: "150px " }}
      >
        <div className='row w-100 my-2 '>
          {item &&
            item
              .filter((post) => post.status === "accept")
              .map((post) => (
                <div className='col-lg-4 col-md-6 col-sm-12 my-2' key={post.id}>
                  <Cards posts={post} />
                </div>
              ))}
        </div>
      </div>
      <div style={{ marginBottom: "200px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
