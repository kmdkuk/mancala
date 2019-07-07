import RootState from 'states';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    SquareConnectedProps,
    SquareDispatchProps
} from "components/Square/SquareProps";
import Square from 'components/Square/Square'

const mapStateToProps = (state: RootState): SquareConnectedProps => ({
});

const mapDispatchToProps = (
    dispatch: Dispatch
): SquareDispatchProps => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Square);
