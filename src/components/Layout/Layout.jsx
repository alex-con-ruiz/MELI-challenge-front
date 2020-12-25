import React from "react";
import PropTypes from "prop-types";

import SearchBar from "../SearchBar/SearchBar";
import Breadcrumb from '../Breadcrumb/Breadcrumb';

import styles from './Layout.scss';

export default function Layout(props) {
  

  return (
    <>
      <SearchBar></SearchBar>
      <Breadcrumb></Breadcrumb>
      <div className={styles.container}>{props.children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
