export interface SquareConnectedProps {
    type: string;
}

export interface SquareDispatchProps {
}

type SquareProps = SquareConnectedProps & SquareDispatchProps;
export default SquareProps;