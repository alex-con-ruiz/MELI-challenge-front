import React, { useState, useContext } from "react";
import SVG from "react-inlinesvg";
import { AppContext } from "../../contexts/provider";
import { CFG } from ".././../../config";

// Style
import styles from "./SearchBar.module.scss";

import lupa from "../../assets/lupa.svg";
import { Link } from "react-router-dom";

const LOGOSM = CFG.logoMELI;

function SearchBar() {

  
  const [value, setValue] = useState("");
  const [state, setQuery] = useContext(AppContext);

  // Ejecuta la busqueda del valor.
  const goToHandler = (e) => {
    if ((e.type === "keypress" && e.key === "Enter") || e.type === "click") {
      setQuery({...state, query: value})
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>

        {/* Logo */}
        <Link to='/'>
          <img className={styles.logo} src={LOGOSM} alt="Logo de mercadoLibre" />
        </Link>

        {/* Input */}
        <input
          placeholder="Nunca dejes de buscar."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyPressCapture={goToHandler}
        ></input>

        {/* Button */}
        <a onClick={goToHandler} className={styles.button}>
          <div className={styles.centerIcon}>
            <SVG className={styles.icon} src={lupa} />
          </div>
        </a>
      </div>
    </header>
  );
}

export default SearchBar;
