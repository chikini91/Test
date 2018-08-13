import React, { Component } from 'react';
import './sass/index.scss';
import Select from 'react-select';
import CryptoItem from './CryptoItem.js';

const options = [
    { value: 'USD', label: 'USD' , symbol: '$'},
    { value: 'EUR', label: 'EUR' , symbol: '€'},
    { value: 'RUB', label: 'RUB' , symbol: '₽'},
    { value: 'GBP', label: 'GBP' , symbol: '£'}
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: options[0],
            data: {}
        }

    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

  render() {
      const { selectedOption } = this.state;

    return (
      <div className="App">
          <div className="currency">
              <div className="currency__block">
                  <h1 className="currency-title">Select currency to exchange:</h1>
                  <div className="currency-type">
                      <Select
                          value={selectedOption}
                          onChange={this.handleChange.bind(this)}
                          options={options}
                          classNamePrefix="select"
                      />
                  </div>
              </div>
              <ul className="currency__crypto">
                  <CryptoItem title="Ethereum" selectedOption={this.state.selectedOption} name="ETH"/>
                  <CryptoItem title="Litecoin" selectedOption={this.state.selectedOption} name="LTC"/>
                  <CryptoItem title="Bitcoin" selectedOption={this.state.selectedOption} name="BTC"/>
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
