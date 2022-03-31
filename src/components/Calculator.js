import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, operation: null, next: null });

  const updateCal = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };
  return (
    <div className="layout">
      <div className="print">
        <h3 className="printout">
          {state.total}
          {state.operation}
          {state.next}
        </h3>
      </div>
      <div className="keyboard">
        <button type="button" className="designcolor" onClick={updateCal} id="Clear">AC</button>
        <button type="button" className="designcolor" onClick={updateCal} id="plusMinus">+/-</button>
        <button type="button" className="designcolor" onClick={updateCal} id="percentage">%</button>
        <button type="button" className="designcolor2" onClick={updateCal} id="divide">&divide;</button>
        <button type="button" className="designcolor" onClick={updateCal} id="seven">7</button>
        <button type="button" className="designcolor" onClick={updateCal} id="eight">8</button>
        <button type="button" className="designcolor" onClick={updateCal} id="nine">9</button>
        <button type="button" className="designcolor2" onClick={updateCal} id="multiply">x</button>
        <button type="button" className="designcolor" onClick={updateCal} id="six">6</button>
        <button type="button" className="designcolor" onClick={updateCal} id="five">5</button>
        <button type="button" className="designcolor" onClick={updateCal} id="four">4</button>
        <button type="button" className="designcolor2" onClick={updateCal} id="minus">-</button>
        <button type="button" className="designcolor" onClick={updateCal} id="three">3</button>
        <button type="button" className="designcolor" onClick={updateCal} id="two">2</button>
        <button type="button" className="designcolor" onClick={updateCal} id="one">1</button>
        <button type="button" className="designcolor2" onClick={updateCal} id="plus">+</button>
        <button type="button" className="designcolor" onClick={updateCal} id="zero">0</button>
        <button type="button" className="designcolor" onClick={updateCal} id="decimalpoint">&sdot;</button>
        <button type="button" className="designcolor2" onClick={updateCal} id="equals">=</button>
      </div>
    </div>
  );
};
export default Calculator;
