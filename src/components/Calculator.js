import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="layout">
        <div className="print">0</div>
        <div className="keyboard">
          <button type="button" className="designcolor" id="Clear">AC</button>
          <button type="button" className="designcolor" id="plusMinus">+/-</button>
          <button type="button" className="designcolor" id="percentage">%</button>
          <button type="button" className="designcolor2" id="divide">&divide;</button>
          <button type="button" className="designcolor" id="seven">7</button>
          <button type="button" className="designcolor" id="eight">8</button>
          <button type="button" className="designcolor" id="nine">9</button>
          <button type="button" className="designcolor2" id="multiply">&times;</button>
          <button type="button" className="designcolor" id="six">6</button>
          <button type="button" className="designcolor" id="five">5</button>
          <button type="button" className="designcolor" id="four">4</button>
          <button type="button" className="designcolor2" id="minus">&minus;</button>
          <button type="button" className="designcolor" id="three">3</button>
          <button type="button" className="designcolor" id="two">2</button>
          <button type="button" className="designcolor" id="one">1</button>
          <button type="button" className="designcolor2" id="one">+</button>
          <button type="button" className="designcolor" id="zero">0</button>
          <button type="button" className="designcolor" id="decimalpoint">&sdot;</button>
          <button type="button" className="designcolor2" id="equals">=</button>
        </div>
      </div>
    );
  }
}
