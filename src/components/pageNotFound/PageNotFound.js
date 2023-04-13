import React from "react";
import { Link } from "react-router-dom";

import './PageNotFound.css'

function PageNotFound() {
  return (
    <>
      <div className="page404">404</div>
      <Link to={'/skimon'}>На гланую</Link>
    </>
  )
}

export default PageNotFound