import React from 'react';
import './button.css';

export class Button extends React.Component {
    render() {
        return (
            <div className='HelloWorld'>
                <div className={'button__container'}>
                    <button className={'button'} onClick={this.props.hasOwnProperty('action') ?
                        this.props.action : 'return false;'}>{this.props.text}</button>
                </div>
            </div>
        );
    }
}
