import React from 'react';
import ErrorList from './error_list';

class Session extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginEmail: '',
            loginPassword: '',
            email: '',
            password: '',            
            credentials: '',
            fname: '',
            lname: '',
        }

        this.loggingIn = true;
        this.requiredFieldsFilled = this.requiredFieldsFilled.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.handleFormTypeSubmit = this.handleFormTypeSubmit.bind(this);
        this.formDisplay = this.formDisplay.bind(this);
        this.buttonDisplay = this.buttonDisplay.bind(this);
    }

    requiredFieldsFilled() {
        let filled = true;
        if(this.loggingIn === true){
            filled = this.state.loginEmail !== '' && this.state.loginPassword !== '';
        } else {
            filled = this.state.email !== '' && this.state.password !== '' &&
                this.state.fname !== '' && this.state.lname !== '';
        }
        // console.log(filled);
        return filled;
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.state.loginPassword = "123456"
        this.state.loginEmail = "demo@demo.com"
        this.props.login(this.state);
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        if(this.requiredFieldsFilled()){
            this.props.login(this.state)
            // this will be implemented later
            // .then(() => this.props.history.push('/questions'));
        }
    }

    handleSignUpSubmit(e) {
        e.preventDefault();
        if(this.requiredFieldsFilled()){
            this.props.createNewUser(this.state)
        }
    }

    handleFormTypeSubmit(e) {
        e.preventDefault();
        this.loggingIn = !this.loggingIn;
        this.setState(this.state);
    }
    
    formDisplay() {
        return this.loggingIn ? (
            <form className="login">
                <p className="login-message">Login</p>
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.loginEmail}
                    onChange={this.handleInput('loginEmail')}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.loginPassword}
                    onChange={this.handleInput('loginPassword')}
                    required
                />
                <button className="login-button" onClick={this.handleLoginSubmit}>Login</button>
            </form>
        ) : (
            <form className="signup">
                <p className="signup-message">Signup</p>
                <input
                    type="text"
                    className="fname"
                    placeholder="First Name"
                    value={this.state.fname}
                    onChange={this.handleInput('fname')}
                    required
                />
                <input
                    type="text"
                    className="lname"
                    placeholder="Last Name"
                    value={this.state.lname}
                    onChange={this.handleInput('lname')}
                    required
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInput('email')}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleInput('password')}
                    required
                />
                <input
                    type="text"
                    placeholder="Credentials (optional)"
                    value={this.state.credentials}
                    onChange={this.handleInput('credentials')}
                />
                <button className="signup-button" onClick={this.handleSignUpSubmit}>Signup</button>
            </form>
        );
    };

    buttonDisplay() {
        return this.loggingIn ? "Sign Up" : "Log In"
    }

    render() {
        return (
            <div className="session-box">
                <div className="website-title">
                    <h1>Que<span>e</span>ry</h1>
                </div>
                <div className="slogan">
                    <p>A safe place to ask open and honest questions</p>
                </div>
                <div className="session-buttons-box">
                    <button className="demo-user-login" onClick={this.handleDemoLogin}>
                        Demo User Login
                    </button>
                    <button className="change-login-type" onClick={this.handleFormTypeSubmit}>{this.buttonDisplay()}</button>
                </div>
                <div className="session-form">
                    {this.formDisplay()}
                </div>
                <ErrorList errors={this.props.errors} />
            </div>
        )
    }
};

export default Session;