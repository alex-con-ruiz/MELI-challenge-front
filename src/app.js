import React, { Component} from "react";
import {hot} from "react-hot-loader";
import styles from "./styles.scss";

class App extends Component{
  render(){
    return(
      <div className={styles.App}>
        <h1> Hello, Woorld! </h1>
      </div>
    );
  }
}

export default hot(module)(App);