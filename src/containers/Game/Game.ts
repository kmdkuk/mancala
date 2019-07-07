import RootState from 'states';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  GameConnectedProps,
  GameDispatchProps
} from "components/Game/GameProps";
import Game from 'components/Game/Game'

const mapStateToProps = (state: RootState): GameConnectedProps => ({
});

const mapDispatchToProps = (
    dispatch: Dispatch
): GameDispatchProps => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
