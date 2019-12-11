import React from 'react';
import './styles.scss';

const CounterContainer = (props) => {

  return (
    <div className="counter-container">
      <h1>
        {props.oranges}
      </h1>
    </div>
  )
};

export default CounterContainer;