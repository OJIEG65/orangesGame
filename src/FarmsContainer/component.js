import React from 'react';
import './styles.scss';
import farmImage from "../svg-icons/farm.jpg";

const FarmsContainer = (props) => {
  return (
    <div className="farms-container">
      {props.gameState.farms.map((farm)=>{
          return(<div className="farm-container" key={farm.name}>
            <img src={farmImage} alt="farmImage"/>
            <span>{farm.name}</span>
          </div>)
      })}
    </div>
  )
};

export default FarmsContainer;