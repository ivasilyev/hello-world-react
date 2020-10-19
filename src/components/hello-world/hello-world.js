import React from 'react';
import './hello-world.css';

export const HelloWorld = () => {
    function sayHello() {
        alert('Hello, World!');
    }

    return (
        <div className="HelloWorld">
            <div className={'HelloWorld__button__container'}>
                <button className={'HelloWorld__button'} onClick={sayHello}>Click me!</button>
            </div>
        </div>
    );
};
