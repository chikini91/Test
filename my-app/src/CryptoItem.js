import React, { Component } from 'react';
import axios from "axios/index";

class CryptoItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            checked: "checked",
            data: {}
        }
    }


    Check() {
        this.setState({
            checked: !this.state.checked,
        })
    }

    componentDidMount() {

        const apiUrl = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${this.props.name}${this.props.selectedOption}`;

        axios.get(apiUrl)
            .then(res => {
                const data = res.data.changes;

                this.setState({ data });
            })
            .catch(err => console.log(err))
    }

    componentWillReceiveProps(nextprops) {

        const apiUrl = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${nextprops.name}${nextprops.selectedOption}`;

        axios.get(apiUrl)
            .then(res => {

                const data = res.data.changes;

                this.setState({ data });
            })
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.data)

        return (
            <li className="currency__crypto-item currency__crypto_eth">
                <h4 className="currency__crypto-item-title">{this.props.title}</h4>
                <img src={require('./img/3.svg')}/>
                <div className="currency__crypto-info">
                    <div className="currency__crypto-info-price">
                        <span className="currency__crypto-info-price-text">Price:</span>
                        <span className="currency__crypto-info-price-quantity">225 555</span>
                    </div>
                    <div className="currency__crypto-info-price">
                        <span>Percent change</span>
                        <p className="currency__crypto-info-checkbox">
                            <input type="checkbox"
                                   className="checkbox"
                                   id={`${this.props.name}-checkbox`}
                                   checked={this.props.name === 'BTC' ? this.state.checked : !this.state.checked}
                                   onChange={this.Check.bind(this)}
                            />
                            <label htmlFor={`${this.props.name}-checkbox`}/>
                        </p>
                    </div>
                    <ul className="currency__crypto-info-period">
                        <li className="currency__crypto-info-period-item">
                            <span>Hour change</span>
                            <span className="currency__crypto-info-value currency__crypto-info-value_negative">+555</span>
                        </li>
                        <li className="currency__crypto-info-period-item">
                            <span>Day change</span>
                            <span className="currency__crypto-info-value">+255</span>
                        </li>
                        <li className="currency__crypto-info-period-item">
                            <span>Week change</span>
                            <span className="currency__crypto-info-value">+266%</span>
                        </li>
                        <li className="currency__crypto-info-period-item">
                            <span>Mounth change</span>
                            <span className="currency__crypto-info-value">+266%</span>
                        </li>
                    </ul>
                </div>
            </li>
        );
    }
}

export default CryptoItem;
