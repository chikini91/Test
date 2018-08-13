import React, { Component } from 'react';
import './sass/index.scss';
import Select from 'react-select';
import CryptoItem from './CryptoItem.js';
import axios from 'axios';

const options = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'RUB', label: 'RUB' },
    { value: 'GBR', label: 'GBR' }
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
              {/*{console.log(this.state.data)}*/}
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
                  <CryptoItem title="Ethereum" selectedOption={this.state.selectedOption.value} name="ETH"/>
                  <CryptoItem title="Litecoin" selectedOption={this.state.selectedOption.value} name="LTC"/>
                  <CryptoItem title="Bitcoin" selectedOption={this.state.selectedOption.value} name="BTC"/>
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
