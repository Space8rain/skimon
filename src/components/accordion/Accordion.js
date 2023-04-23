import React from "react";
import classes from './Accordion.module.css';
import patchPath from '../../images/patch_card_image.svg'

function Accordion({title, type, props}) {

  function changeRender(type, data) {
    if (type === 'webcams') {
      return (
        data.live_streams.map((stream) => (
          <li key={stream.webcam_id}>
            {stream.type === 'code' 
            ? <div dangerouslySetInnerHTML={{__html: stream.data}} ></div>
            : <iframe src={stream.data} title="webcams"/>
          }
          </li>
        ))
      )
    }
    //  else if (type === 'schedule') {
    //   return (

    //   )
    // }
  }

  const [isActive, setIsActive] = React.useState(false)

  function handleItem() {
    setIsActive(!isActive)
  }

  return (

    <>
      {props.webcams &&
        <div className={classes.accordion}>
        <h2 className={classes.accordion_title} onClick={handleItem}>{title}
          {isActive 
          ? <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 13.172L16.95 8.22205L18.364 9.63605L12 16L5.636 9.63605L7.05 8.22205L12 13.172Z" fill="currentColor"/>
          </svg>
          :
          <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="currentColor"/>
          </svg>}
        </h2>
        {isActive && <div className={classes.accordion_body}>
          {changeRender(type, props)}
        </div>}
        <hr />
      </div>}
      </>
  )
}

export default Accordion