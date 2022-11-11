import React from 'react';
import CounterControls from '../CounterControls/CounterControls';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue : 10
  }

  state = {
    value: this.props.initialValue,
  };

  increase = () => {
    // основываясь на предыдущем значении
    // передаем анонимную функцию
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  decrease = () => {
    this.setState(prevState =>{
      return {
        value: prevState.value - 1
      }
    })
  };

  render() {
    const {value} = this.state; // instead of this.state.valie
    const {decrease, increase} = this; // instead of this.increase
    return (
      <div className="container counter">
        <span className="counter-value">{value}</span>
        <CounterControls onDecrement={decrease} onIncrement={increase}/>
      </div>
    );
  }
}

export default Counter;
