import React from "react";
require("./styles/styles.scss");
import { Route, Router, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Layout from "./components/Layout/Layout";

import Search from "./pages/Search";
import ProductsDetail from "./pages/ProductDetail";
import ContextProvider from "./contexts/provider";

const App = () => {

  return (
    <>
      {/* Helmet implementation for SEO */}

      <Helmet>
        <title>Mercado Libre</title>
        <meta name="description" content="Mercado Libre App" />
      </Helmet>

      <ContextProvider>
        <Layout>
          <Switch>
            <Route path="/items" exact>
              <Search />
            </Route>
            <Route path="/items/:id" exact>
              <ProductsDetail />
            </Route>
          </Switch>
        </Layout>
      </ContextProvider>
    </>
  );
};

export default App;
