import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import Session from './session';

const mapStateToProps = (state) => {
    return ({
        errors: state.errors
    });
};

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    login: formUser => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);