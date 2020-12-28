import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../SearchBar/SearchBar";

import styles from './Layout.scss';

export default function Layout(props) {
  

  return (
    <>
      <SearchBar></SearchBar>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
