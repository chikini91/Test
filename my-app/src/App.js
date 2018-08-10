import React, { Component } from 'react';
import logo from './logo.svg';
import img from './img/bg.svg';
import './sass/index.scss';
import Select from 'react-select';

const options = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'RUB', label: 'RUB' },
    { value: 'GBR', label: 'GBR' }
];

class App extends Component {
    state = {
        selectedOption: options[0],
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

  render() {
      const { selectedOption } = this.state;

    return (
      <div className="App">
        <div className="header">
            <h1>Select currency to exchange:</h1>
            <div className="currency-type">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    classNamePrefix="select"
                />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
