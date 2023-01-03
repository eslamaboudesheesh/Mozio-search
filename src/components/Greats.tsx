import React from 'react';
import { GreateProps } from './Greats.types';

function Greats(props: GreateProps) {
    return (
        <div className="App">
            <p> {props.name ? props.name : 'Guest'}</p>
        </div>
    );
}

export default Greats;
