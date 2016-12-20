import React from "react";
import Router from "react-router";
import Slider from "react-slick";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { GoogleMap } from "./GoogleMap";


export class ViewItem extends React.Component {

  render() {
    var items = this.props.location.state;
    var listImage;
    if (typeof items.src !== "string") {
      const image = items.src.map((item, i) => {
        return (
          <img key = {i} src = {item.image} />
          )
      });
      listImage = <Slider dots = {true} infinite = {true}  speed =  {500}>{image}</Slider>;
    } else {
      listImage = <img src = {items.src} />
    }


    return (
      <div className="wallpage">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
        <div className="image">
          {listImage}
        </div>
        <div className="text">
          <h3 className="title"> {items.title} </h3>
          <p>Địa Chỉ: {items.location +" - "+ items.address} </p>
          <p>Thời Gian: {items.time} </p>
        </div>
        <div className = "map">
          <GoogleMap address = {items.address} location = {items.location}/>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>

    );
  }
}
