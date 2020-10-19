import React from 'react';
import './popup.css';

export class Popup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup__inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                </div>
            </div>
        );
    }
}