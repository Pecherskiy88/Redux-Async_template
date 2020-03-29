import React from 'react';

const Timer = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <div>
      <button type="button" onClick={() => onIncrement(step)}>
        +
      </button>
      <p>Timer: {value}</p>
      <button type="button" onClick={() => onDecrement(step)}>
        -
      </button>
    </div>
  );
};

export default Timer;
