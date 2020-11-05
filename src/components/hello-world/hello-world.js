import React from 'react';
import './hello-world.css';
import {Button} from '../button/button'

export const HelloWorld = (x = '') => {
    function sayHello() {
        alert(`Hello, World${x.length > 0  ? '!' : ''}`);
    }

    return (
        <div className="HelloWorld">
            View simple alert:
            <Button text={'Click me!'} action={sayHello} />
        </div>
    );
};
