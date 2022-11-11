import './CounterControls.module.css';

const CounterControls = ({ onIncrement, onDecrement }) =>  (
    <div className="counter-controls">
      <button type="button" onClick={onDecrement}>
        {' '}
        - 1
      </button>
      <button type="button" onClick={onIncrement}>
        {' '}
        + 1
      </button>
    </div>
  );

export default CounterControls;
