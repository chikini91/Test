import React, { Component } from 'react';
import axios from "axios/index";

class CryptoItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            volume: 0,
            price:{},
            percent: {},
            enablePercent: "checked"
        }
    }

    Check() {
        this.setState({
            enablePercent: !this.state.enablePercent,
        })
    }

    componentDidMount() {

        const apiUrl = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${this.props.name}${this.props.selectedOption.value}`;

        axios.get(apiUrl)
            .then(res => {

                const percent = res.data.changes.percent;
                const price = res.data.changes.price;
                const volume = res.data.volume;

                this.setState({ price });
                this.setState({ percent });
                this.setState({ volume });
            })
            .catch(err => console.log(err))
    }

    componentWillReceiveProps(nextprops) {

        const apiUrl = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${nextprops.name}${nextprops.selectedOption.value}`;

        axios.get(apiUrl)
            .then(res => {

                const percent = res.data.changes.percent;
                const price = res.data.changes.price;
                const volume = res.data.volume;

                this.setState({ price });
                this.setState({ percent });
                this.setState({ volume });
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <li className="currency__crypto-item">
                <h4 className="currency__crypto-item-title">{this.props.title}</h4>
                <div className="currency__crypto-item-wrapper">
                    <img className="currency__crypto-item-img" src={require('./img/3.svg')}/>
                </div>
                <div className="currency__crypto-info">
                    <div className="currency__crypto-info-price">
                        <span className="currency__crypto-info-price-text">Price:</span>
                        <span className="currency__crypto-info-price-quantity">{this.props.selectedOption.symbol}{this.state.volume.toFixed(2)}</span>
                    </div>
                    <div className="currency__crypto-info-price">
                        <span>Percent change</span>
                        <p className="currency__crypto-info-checkbox">
                            <input type="checkbox"
                                   className="checkbox"
                                   id={`${this.props.name}-checkbox`}
                                   checked={this.props.name === 'BTC' ? !this.state.enablePercent : this.state.enablePercent}
                                   onChange={this.Check.bind(this)}
                            />
                            <label htmlFor={`${this.props.name}-checkbox`}/>
                        </p>
                    </div>
                    <ul className="currency__crypto-info-period">
                        <li className="currency__crypto-info-period-item">
                            <span className="currency__crypto-info-opacity" >Hour change</span>
                            <span className={this.state.percent.hour > 0 || this.state.price.hour > 0 ? "currency__crypto-info-value" : "currency__crypto-info-value_negative"}>{this.state.enablePercent ? this.state.percent.hour : this.state.price.hour}
                            {this.props.name === 'BTC' && this.state.enablePercent || this.props.name !== 'BTC' && !this.state.enablePercent ? ' %' : this.props.selectedOption.symbol}
                            </span>
                        </li>
                        <li className="currency__crypto-info-period-item">
                            <span className="currency__crypto-info-opacity" >Day change</span>
                            <span className={this.state.percent.day > 0 || this.state.price.day > 0 ? "currency__crypto-info-value" : "currency__crypto-info-value_negative"}>{this.state.enablePercent ? this.state.percent.day : this.state.price.day}
                            {this.props.name === 'BTC' && this.state.enablePercent || this.props.name !== 'BTC' && !this.state.enablePercent ? ' %' : this.props.selectedOption.symbol}
                            </span>
                        </li>
                        <li className="currency__crypto-info-period-item">
                            <span className="currency__crypto-info-opacity" >Week change</span>
                            <span className={this.state.percent.week > 0 || this.state.price.week > 0 ? "currency__crypto-info-value" : "currency__crypto-info-value_negative"}>{this.state.enablePercent ? this.state.percent.week : this.state.price.week}
                            {this.props.name === 'BTC' && this.state.enablePercent || this.props.name !== 'BTC' && !this.state.enablePercent ? ' %' : this.props.selectedOption.symbol}
                            </span>
                        </li>
                        <li className="currency__crypto-info-period-item">
                            <span className="currency__crypto-info-opacity" >Mounth change</span>
                            <span className={this.state.percent.month > 0 || this.state.price.month > 0 ? "currency__crypto-info-value" : "currency__crypto-info-value_negative"}>{this.state.enablePercent ? this.state.percent.month : this.state.price.month}
                            {this.props.name === 'BTC' && this.state.enablePercent || this.props.name !== 'BTC' && !this.state.enablePercent ? ' %' : this.props.selectedOption.symbol}
                            </span>
                        </li>
                    </ul>
                </div>
            </li>
        );
    }
}

export default CryptoItem;
