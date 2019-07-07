import * as React from 'react';
import GameProps from './GameProps';
import './Game.css'
import Square from "components/Square/Square";

const Game = (props: GameProps) => {
    return(
        <table>
            <tr>
                <td rowSpan={2}><Square type={"square store"}/></td>
                <td><Square type={"square"}/></td>
                <td><Square type={"square"}/></td>
                <td><Square type={"square"}/></td>
                <td rowSpan={2}><Square type={"square store"}/></td>
            </tr>
            <tr>
                <td><Square type={"square"}/></td>
                <td><Square type={"square"}/></td>
                <td><Square type={"square"}/></td>
            </tr>
        </table>
    );
};
export default Game;