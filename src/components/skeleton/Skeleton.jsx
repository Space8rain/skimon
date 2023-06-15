import React from "react";
import ContentLoader from 'react-content-loader';
import styles from './Skeleton.module.css';


function Skeleton () {
  return (
    <ContentLoader
      width={'100%'}
      height={'100%'}
      speed={2}
      backgroundColor={styles}
      foregroundColor="rgb(214, 254, 94)">
      <rect rx={20} width='100%' height='100%' />
    </ContentLoader>

  )
}

export default Skeleton;