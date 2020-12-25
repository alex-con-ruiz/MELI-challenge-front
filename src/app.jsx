import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styles from "./styles/styles.scss";

import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import Detail from "./components/Detail/Detail";

const App = () => {
  return (
    <>
      {/* Helmet implementation for SEO */}
      <Helmet>
        <title>Mercado Libre</title>
        <meta name="description" content="Mercado Libre App" />
      </Helmet>

      <Layout>
       {/*  <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products> */}
        <Detail></Detail>
      </Layout>
    </>
  );
};

export default hot(App);
