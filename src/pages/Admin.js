import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Admin = () => {
  const [item, setItem] = useState([]);
  const [item2, setItem2] = useState([]);
  const [status, setStatus] = useState("");
  let navigate = useNavigate();
  let xitem = [];
  useEffect(() => {
    const getItems = async () =>
      await axios
        .get("http://localhost:3001/items")
        .then((res) => {
          setItem(res.data);
          setItem2(res.data);
          console.log(item2);
        })
        .catch((err) => console.log(err));
    getItems();
  }, [item.length]);

  const newstatus2 = async (id, status) => {
    await axios
      .patch(`http://localhost:3001/items/${id}`, {
        status: status,
      })
      .then((res) => {
        setItem2(res.data);
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  const newstatus = (status, myStatus) => {
    setStatus(status);
    setItem2(...item2, myStatus);
    myStatus = status;

    console.log("status: " + myStatus);
  };
  const filterStatus = (status) => {
    if(status!=='All'){

      xitem = item;
      setItem2(xitem);
      xitem = xitem.filter((x) => x.status === status);
      setItem2(xitem);
      console.log(xitem);
    }else{
      setItem2(item);
    }
  };
  const save = () => {
    axios
      .post("http://localhost:3001/items/", {
        items: item2,
      })
      .then((res) => {
        setItem2(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className='d-float float-left  mx-5'>
        <b>status: </b>{" "}
        <select
          name='xstatus'
          id='xstatus'
          onChange={(e) => filterStatus(e.target.value)}
        >
         <option value='All'>All</option>
          <option value='pending'>pending</option>
          <option value='accept'>accept</option>
          <option value='reject'>reject</option>
        </select>
      </div>

      {item2.map((x) => {
        return (
          <div
            style={{
              border: "1px solid grey",
              width: "50%",
              marginLeft: "20%",
              padding: "30px",
              marginTop: "20px",
              marginBottom: "20px",
              height: "200px",
            }}
            key={x.id}
          >
            <div>
              <b>Title: </b> {x.title}
            </div>
            <div>
              <b>Body: </b> {x.body}
            </div>
            <div>
              <b>status : {x.status}</b>
            </div>

            <div className='d-float float-end'>
              <button
                className='btn btn-primary me-2 my-3 '
                onClick={() => newstatus2(x.id, "pending")}
              >
                pending
              </button>
              <button
                className='btn btn-success me-2 my-3 '
                onClick={() => newstatus2(x.id, "accept")}
              >
                accept
              </button>
              <button
                className='btn btn-danger my-3 '
                onClick={() => newstatus2(x.id, "reject")}
              >
                reject
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Admin;
