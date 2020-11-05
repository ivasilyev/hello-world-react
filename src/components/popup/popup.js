import React from "react";
import './popup.css';
import {Button} from "../button/button";

export class Popup extends React.Component {
    render() {
        return (
            <div className='popup__outer'>
                <h1>{this.props.header}</h1>
                <p>{this.props.text}</p>
                <Button action={this.props.action} text='Close' />
            </div>
        );
    }
}
