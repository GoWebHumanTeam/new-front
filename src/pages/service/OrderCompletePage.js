import React from "react";
import "./OrderCompletePage.css"; 
import { useSelector } from "react-redux/";
import check from "../../imgs/check.jpg";
import home from "../../imgs/home.jpg";
import {Link} from "react-router-dom";
import axios from "axios";

function OrderCompletePage() {
  return (
    <>
    <div className="center-container">
      <div className="page">
        <OrderCompleteMessage />
        <UserInfo/>
        <DeliveryInfo/>
        <OrderDetails />
        <div className="home-button">
        <Link to="/home">
        <button className="home-button"><img className ='house' src= {home} alt="home-button"/></button>
        </Link>
        </div>
      </div>
    </div>  
    </>
  );
}

function OrderCompleteMessage() {
  return (
    <div className="message">
      <h2><img className ='check' src= {check} alt="check"/> Order Complete</h2>
    </div>
  );
}
function UserInfo(){
  const senderName = useSelector((state) => state.order.senderName);
  const senderTel  = useSelector((state) => state.order.senderTel);
  const addressName = useSelector((state) => state.order.addressName);
  const addressTel = useSelector((state) => state.order.addressTel);

  return(
  <div className="info">
    <h3>User Information</h3>
    <p>Sender Name : {senderName}</p>
    <p>Sender tel : {senderTel}</p>
    <p>Address Name : {addressName}</p>
    <p>Address tel : {addressTel}</p>
  </div>
  )
}

function DeliveryInfo(){
  const startingPoint = useSelector((state) => state.order.startingPoint);
  const destination = useSelector((state) => state.order.destination);
  var droneId = useSelector((state) => state.order.droneId);
  var key = 'drone'.concat(droneId.payload);
  const img = useSelector((state) => state[key].img);

  return(
    <div className = "delivery-info" >
      <h3>Delivery Information</h3>
      <img className = 'droneshape' src={img} alt='drone'/>
      <p>Estimated delivery time : within 15 minutes</p>
      <p>delivey location : {startingPoint} → {destination} </p>
    </div>
  )
}


function OrderDetails() {
  const postDescription = useSelector((state) => state.order.postDescription);
  const weight = useSelector((state) => state.order.weight);
  const quantity = useSelector((state) => state.order.quantity);
  var droneId = useSelector((state) => state.order.droneId);
  var key = 'drone'.concat(droneId.payload);
  const price = useSelector((state) => state[key].price);
  return (
    <div className="details">
      <h3>Order Information</h3>
      <p> Total weight : {weight}kg X {quantity} = {weight*quantity}kg</p>
      <p> Post description : {postDescription}</p>
      <p> Price : {price} won</p>
    </div>
  );
}


export default OrderCompletePage;

