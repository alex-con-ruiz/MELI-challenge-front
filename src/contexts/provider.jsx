import React, { createContext, useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { CFG } from "../../config";

const ContextProvider = ({ children }) => {
  let query = new URLSearchParams(useLocation().search).get("search");

  
  const history = useHistory();
  const [state, setState] = useState({
    query: null,
    id: null,
    products: null,
    detail: null,
  });

  useEffect(() => {
    if(state.query !== query){
      setState({...state, query: query})
    }
  }, [query])

  useEffect(() => {
    if(state.query === null) {return;}

    axios
      .get(`${CFG.baseURL}api/items?search=${state.query}`)
      .then((resp) => {
        setState({ ...state, products: resp.data });
        history.push(`/items?search=${state.query}`);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [state.query]);

  return (
    <>
      <AppContext.Provider value={[state, setState]}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default ContextProvider;
export const AppContext = createContext();
