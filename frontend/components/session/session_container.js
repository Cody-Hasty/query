import { connect } from 'react-redux';
import { createNewUser, removeSessionErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    session_errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    login: formUser => dispatch(login(formUser)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);