import React, {useEffect, useState, useCallback} from 'react';
import './styles.scss';

class OrangeTicker {
  constructor(name) {
    this.callbacksArray = [];
    this.tickIntervalId = undefined;
    this.name = name;
  }

  startTick(tickSpeed) {
    this.tickIntervalId = setInterval(() => {
      this.callbacksArray.forEach((cb) => {
        cb();
      })
    }, tickSpeed)
  }

  stopTick() {
    clearInterval(this.tickIntervalId);
    this.callbacksArray.length = 0;
  }

  subscribeOnTick(callback) {
    this.callbacksArray.push(callback);
  }

}

const OrangeProducerContainer = (props) => {
  const {dispatch, gameState} = props;
  const [loadingOrange, setLoadingOrange] = useState(false);

  const updateWidth = () => {
    setLoadingOrange(true);
  };

  const updateCounter = useCallback(() => {
    const payload = gameState.multiplier ? gameState.multiplier * gameState.farms.length : gameState.farms.length;
    dispatch({type: 'incrementByFarm', payload});
  },[dispatch, gameState.multiplier, gameState.farms]);


  useEffect(() => {
    const ticker = new OrangeTicker(new Date());
    ticker.subscribeOnTick(updateWidth);
    ticker.subscribeOnTick(updateCounter);
    ticker.startTick(gameState.harvestIterationSpeed);
    return () => {
      ticker.stopTick()
    }
  }, [gameState.harvestIterationSpeed, updateCounter]);
  return (
    <div className="orange-producer-container">
      <div style={{transition: `${loadingOrange ? gameState.harvestIterationSpeed-50 : 0 }ms`}}
           className={`progress-line ${loadingOrange ? 'full' : ''}`}
           onTransitionEnd={() => {setLoadingOrange(false)}}
      />
    </div>
  )
};

export default OrangeProducerContainer;