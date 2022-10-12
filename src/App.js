import React, { Component } from 'react';
import update from 'immutability-helper';
import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import { create, all } from 'mathjs';

const config = {};
const math = create(all, config);

class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] };
  }

  calculateOperations = () => {
    let result = this.state.operations.join('');
    if (result) {
      result = math.evaluate(result);
      result = math.format(result, { precision: 14 });
      this.setState({
        operations: [result],
      });
    }
  };
  handleClick = (e) => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        });
        break;
      case 'equal':
        this.calculateOperations();
        break;
      case 'delete':
        this.calculateOperations();
        break;
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        });
        this.setState({
          operations: newOperations,
        });
        break;
    }
  };

  useEffect = (e) => {
    document.addEventListener('keydown', this.onKeyPress.bind(this));
  };

  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <ButtonBox>
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="C"
            value="clear"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="7"
            value="7"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="4"
            value="4"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="1"
            value="1"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="."
            value="."
          />

          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="/"
            value="/"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="8"
            value="8"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="5"
            value="5"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="2"
            value="2"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="0"
            value="0"
          />

          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="x"
            value="*"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="9"
            value="9"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="6"
            value="6"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="3"
            value="3"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="00"
            value="00"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="-"
            value="-"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="+"
            size="2"
            value="+"
          />
          <Button
            onClick={this.handleClick}
            onKeyPress={this.onKeyPress}
            label="="
            size="2"
            value="equal"
          />
        </ButtonBox>
      </div>
    );
  }
}

export default App;
