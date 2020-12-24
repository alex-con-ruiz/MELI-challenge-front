import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from "../SearchBar/SearchBar";

export default function Layout(props) {
  return (
    <>
        <SearchBar></SearchBar>
        {props.children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}