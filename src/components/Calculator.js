import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
    this.updateCal = this.updateCal.bind(this);
  }

  updateCal(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="layout">
        <div className="print">
          <h3 className="printout">
            {total}
            {operation}
            {next}
          </h3>
        </div>
        <div className="keyboard">
          <button type="button" className="designcolor" onClick={this.updateCal} id="Clear">AC</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="plusMinus">+/-</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="percentage">%</button>
          <button type="button" className="designcolor2" onClick={this.updateCal} id="divide">&divide;</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="seven">7</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="eight">8</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="nine">9</button>
          <button type="button" className="designcolor2" onClick={this.updateCal} id="multiply">&times;</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="six">6</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="five">5</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="four">4</button>
          <button type="button" className="designcolor2" onClick={this.updateCal} id="minus">&minus;</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="three">3</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="two">2</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="one">1</button>
          <button type="button" className="designcolor2" onClick={this.updateCal} id="one">+</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="zero">0</button>
          <button type="button" className="designcolor" onClick={this.updateCal} id="decimalpoint">&sdot;</button>
          <button type="button" className="designcolor2" onClick={this.updateCal} id="equals">=</button>
        </div>
      </div>
    );
  }
}
