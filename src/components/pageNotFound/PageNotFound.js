import React from "react";
import { Link } from "react-router-dom";
import classes from './PageNotFound.module.css'

function PageNotFound({currentCluster}) {

  return (
    <>
      <div className={classes.page404}>
        <section>
          <svg width="128" height="128" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#D6FE5E"/>
          <path d="M21.0588 17.6253L21.064 17.6223L14.4148 6.10594L14.412 6.10754C14.2656 5.80714 13.96 5.59814 13.6032 5.59814C13.237 5.59814 12.9232 5.81734 12.7818 6.13094L8.3568 13.7949L7.2734 11.9185L7.272 11.9193C7.1948 11.7609 7.0338 11.6505 6.8454 11.6505C6.6526 11.6505 6.4872 11.7661 6.4126 11.9309L3.2542 17.4017H3.24V17.4261L2.9342 17.9557C2.8988 18.0021 2.8772 18.0593 2.8772 18.1221C2.8772 18.2749 3.001 18.3987 3.1536 18.3987C3.184 18.3987 3.2126 18.3927 3.24 18.3835V18.4017H6.64H10.64H20.64V18.3917C20.9098 18.3701 21.1226 18.1469 21.1226 17.8715C21.1228 17.7819 21.0982 17.6991 21.0588 17.6253Z" fill="black"/>
          </svg>
          <p>Страница не найдена</p>
          <Link to={`/${currentCluster.cluster_alias}`} replace>&#10095; На гланую &#10094;</Link>
        </section>
      </div>
    </>
  )
}

export default PageNotFound