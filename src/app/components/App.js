import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";

export class App extends React.Component {
 constructor(){
    super();
    var json ;
    this.state = {
      id: "VH001",
      json: []
    };
  }
  componentWillMount() {
    var that =  this;
    $.ajax({
      url: './app/data/data.json',
      dataType: 'json',
      cache: false,
      success: function(result) {
         that.setState({
          json: result
         });
      },
      error: function( status, err) {
        console.error(status, err.toString());
      }
    })
  }
  render() {
    return (
    <div className="wallpage">
      <div className="header">
        <Header/>
      </div>
      <div className="content">
           <Home json = {this.state.json}/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
    );
  }
}
