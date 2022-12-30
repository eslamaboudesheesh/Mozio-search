import React from 'react';
import { AutoCompleteView } from './Autocomplete/AutoCompleteView';
import { GreateProps } from './Greats.types';

function Greats(props: GreateProps) {
    return (
        <div className="App">
            <p> {props.name ? props.name : 'Guest'}</p>
            <AutoCompleteView />
        </div>
    );
}

export default Greats;
