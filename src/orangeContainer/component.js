import React from 'react';
import './styles.scss';
import orangeSVG from '../svg-icons/orange.svg'

const OrangeContainer = (props) => {
  const addOranges = () => {
    props.dispatch({type: 'incrementPerClick'});
  };

  return (
    <div className="orange-container">
      <img src={orangeSVG} alt="orange" onClick={addOranges}/>
    </div>
  )
};

export default OrangeContainer;