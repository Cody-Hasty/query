import React from 'react';

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
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.handleFormTypeSubmit = this.handleFormTypeSubmit.bind(this);
        this.formDisplay = this.formDisplay.bind(this);
        this.buttonDisplay = this.buttonDisplay.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        // this will be implemented later
        // .then(() => this.props.history.push('/questions'));
    }

    handleSignUpSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
    }

    handleFormTypeSubmit(e) {
        e.preventDefault();
        this.loggingIn = !this.loggingIn;
        this.setState(this.state);
    }
    
    formDisplay() {
        return this.loggingIn ? (
            <form className="login">
                <h2 className="login-message">Log in!</h2>
                <label>Email:
                    <input
                        type="text"
                        value={this.state.loginEmail}
                        onChange={this.handleInput('loginEmail')}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        value={this.state.loginPassword}
                        onChange={this.handleInput('loginPassword')}
                    />
                </label>
                <button className="login-button" onClick={this.handleLoginSubmit}>Log in</button>
            </form>
        ) : (
            <form className="signup">
                <h2 className="signup-message">Sign Up!</h2>
                <label className="fname">First Name:
                    <input
                        type="text"
                        value={this.state.fname}
                        onChange={this.handleInput('fname')}
                    />
                </label>
                <label className="lname">Last Name:
                    <input
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleInput('lname')}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                </label>
                <label>Credentials:
                    <input
                        type="text"
                        placeholder="optional"
                        value={this.state.credentials}
                        onChange={this.handleInput('credentials')}
                    />
                </label>
                <button className="signup-button" onClick={this.handleSignUpSubmit}>Sign Up</button>
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
                    <h1>Query</h1>
                </div>
                <div className="slogan">
                    <p>A safe place to ask open and honest questions</p>
                </div>
                <div className="session-buttons-box">
                    <button className="change-login-type" onClick={this.handleFormTypeSubmit}>{this.buttonDisplay()}</button>
                </div>
                <div className="session-form">
                    {this.formDisplay()}
                </div>
            </div>
        )
    }
};

export default Session;