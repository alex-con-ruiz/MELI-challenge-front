import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Products from "../components/Products/Products";
import { AppContext } from "../contexts/provider";
import { useQueryId } from "../hooks/useParams";

export default function Search() {
  const [state, setState] = useContext(AppContext);

  // Se obtiene la query de la url del navegador
  let query = new URLSearchParams(useLocation().search).get("search");

  // Setea en caso de modificacion o autoload.
  useQueryId("query", state, setState, query);

  // Vacia el id previamente visitado
  if (state.id !== null) {
    setState({ ...state, id: null });
  }

  let products = [];

  if (state.products) {
    products = state.products.items;
  }

  return (
    <>
      {state.products
        ? products.map((product) => (
            <Products product={product} key={product.id} />
          ))
        : null}
    </>
  );
}
