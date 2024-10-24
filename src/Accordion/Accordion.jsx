import { useState } from 'react';
import './Accordion.css';
import PropTypes from 'prop-types';

const Accordion = ( { data, heading } ) => {
 let [box, setbox] = useState(false);

  let open_box = ()=>{
   
    setbox(!box);
  }

  return (
    <div className='Accordion'>
      <div className='Accordion_header'>
        <h3>{heading}</h3>
        <i className="bi bi-x-lg" onClick={open_box}></i>
      </div>
      <div className={`${box ? 'open' : ""} Accordion_content`}>
        <p>{data}</p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
    data : PropTypes.string.isRequired,
    heading : PropTypes.string.isRequired
}

export default Accordion;
