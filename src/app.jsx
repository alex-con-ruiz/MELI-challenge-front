import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styles from './styles/styles.scss';

import Layout from "./components/Layout/Layout";


const App = () => {
  return (
    <> 
      {/* Helmet implementation for SEO */}
        <Helmet>
          <title>Mercado Libre</title>
          <meta name="description" content="Mercado Libre App" />
        </Helmet>

        <Layout>
          <div className={styles.App}>
            <h1> Hola, World!!! </h1>
          </div>
        </Layout>
    </>
  )
};

export default hot(App)