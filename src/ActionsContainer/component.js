import React from 'react';
import './styles.scss';

const ActionsContainer = (props) => {
  const buyFarm = () => {
    props.dispatch({type:'buyFarmForOranges', payload: 5000})
  };
  return (
    <div className="actions">
      <button onClick={buyFarm}>buy farm</button>
    </div>
  )
};

export default ActionsContainer;