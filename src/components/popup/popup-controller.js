import React from 'react';
import './popup.css';
import {Popup} from './popup'
import {Button} from "../button/button";

export class PopupController extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.enable = this.enable.bind(this);
        this.container = document.createElement('div');
        this.state = {
            isOpened: false
        };
    }

    componentDidMount() {
    }

    toggle() {
        this.setState({isOpened: !this.state.isOpened});
        console.log('Toggled!', this.state.isOpened);
    };

    enable() {
        this.setState({isOpened: true});
    }

    render() {
        return (
            <div>
                View popup:
                <Button action={() => this.enable()} text={'Click me!'} />
                {
                    this.state.isOpened ?
                    <Popup action={this.toggle} header={'I am a popup!'} text={'Hello world!'} /> :
                    ''
                }
            </div>
        );
    }
}
