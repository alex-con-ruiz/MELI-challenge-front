import React, { useContext } from "react";
import Products from "../components/Products/Products";
import { AppContext } from "../contexts/provider";

export default function Search() {
  const [state, setState] = useContext(AppContext);

  let products = [];
  products = state.products.items;

  return (
    <>
      {products
        ? products.map((product) => (
            <Products product={product} key={product.id}></Products>
          ))
        : null}
    </>
  );
}
