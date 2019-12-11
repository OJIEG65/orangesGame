import React, {useReducer} from 'react';
import './App.css';
import OrangeContainer from "./orangeContainer/component";
import CounterContainer from "./counterContainer/component";
import OrangeProducerContainer from "./orangeProducerContainer/component";
import FarmsContainer from "./FarmsContainer/component";
import ActionsContainer from "./ActionsContainer/component";

const state = JSON.parse(localStorage.getItem('myGameState'));
const startState = {
  oranges: 1000000,
  multiplier: 0,
  orangePerClick: 1,
  harvestIterationSpeed: 3000,
  farms: [{name: 'Main Farm'},],
};

const initialState = state ? state : startState;

function reducer(state, action) {
  switch (action.type) {
    case 'incrementPerClick':
      return {...state, oranges: state.oranges + state.orangePerClick};
    case 'buyFarmForOranges':
      if (state.oranges < action.payload) {
        console.log('Недостатньо апельсинів.');
        return state;
      } else {
        return {
          ...state,
          oranges: state.oranges - action.payload,
          farms: [...state.farms, {name: `secondary farm #${state.farms.length}`}]
        };
      }
    case 'incrementByFarm':
      return {...state, oranges: state.oranges + action.payload};
    case 'decrementHarvestIterationSpeed':
      return {...state, harvestIterationSpeed: state.harvestIterationSpeed - action.payload};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //todo find more sophisticated method to store data
  // localStorage.setItem('myGameState', JSON.stringify(state));

  return (
    <div className="App">
      <header>
        <OrangeContainer dispatch={dispatch}/>
        <CounterContainer oranges={state.oranges}/>
      </header>
      <OrangeProducerContainer gameState={state} dispatch={dispatch}/>
      <ActionsContainer dispatch={dispatch}/>
      <FarmsContainer gameState={state}/>
    </div>
  );
}

export default App;
