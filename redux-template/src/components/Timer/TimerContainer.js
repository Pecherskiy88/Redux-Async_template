import { connect } from 'react-redux';
import * as timerActions from '../../redux/timerActions';
import Timer from './Timer';

const mapStateToPtops = state => ({
  value: state.timer.value,
  step: state.timer.step.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(timerActions.increment(step)),
  onDecrement: step => dispatch(timerActions.decrement(step)),
});

export default connect(mapStateToPtops, mapDispatchToProps)(Timer);
