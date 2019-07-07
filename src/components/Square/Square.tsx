import * as React from 'react';
import SquareProps from './SquareProps';
import './Square.css'

const Square = (props: SquareProps) => {
    return(
        <button
            className={props.type}
        >
            0
        </button>
    );
};
export default Square;