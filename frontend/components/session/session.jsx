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
        this.loginAttempt = false;
        this.errors = [];
        this.errorLogic = this.errorLogic.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormTypeSubmit = this.handleFormTypeSubmit.bind(this);
        this.formDisplay = this.formDisplay.bind(this);
        this.buttonDisplay = this.buttonDisplay.bind(this);
        this.errorDisplay = this.errorDisplay.bind(this);
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

    handleFormSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        
        if (this.loggingIn){
            if (this.state.loginEmail !== '' && this.state.loginPassword !== ''){
                this.props.login(user)  
            }
        }
        else {
            if (this.state.email !== '' && this.state.password !== '' &&
            this.state.fname !== '' && this.state.lname !== '' &&
            this.state.password.length > 5){
                this.props.createNewUser(user)
            }
        }
        this.setState(this.state);
        this.loginAttempt = true;
        this.errors = [];
        this.errorLogic();
    }
    
    handleFormTypeSubmit(e) {
        e.preventDefault();
        this.loggingIn = !this.loggingIn;
        this.loginAttempt = false;
        this.errors = [];
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
                <button className="login-button" onClick={this.handleFormSubmit}>Login</button>
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
                <button className="signup-button" onClick={this.handleFormSubmit}>Signup</button>
            </form>
        );
    };
    
    buttonDisplay() {
        return this.loggingIn ? "Sign Up" : "Log In"
    }

    errorLogic () {
        if (this.loggingIn) {
            if (this.state.loginEmail !== '' && this.state.loginPassword !== '') {
                this.errors.push("Invalid login")
            } else {
                this.errors.push("Please fill out all required fields");
            }
        }
        else {
            if (this.state.email !== '' && this.state.password !== '' &&
                this.state.fname !== '' && this.state.lname !== '' &&
                this.state.password.length > 5) {
                    this.errors.push("That email address already has an account")
                } 
                if (this.state.password.length < 6) {
                    this.errors.push("Please enter a password with 6 or more characters");
                } 
                if (this.state.email === '' || this.state.fname === '' ||
                this.state.lname === '') {
                    this.errors.push("Please fill out all required fields");
                }
        }
    }
    
    errorDisplay() {
        this.errors = this.errors.filter((x, i, arr) => arr.indexOf(x) === i);
        return this.errors.map(error => <li key={error}>{error}</li>)
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
                <div className="session-error">
                    {this.loginAttempt && this.errorDisplay()}
                </div>
            </div>
        )
    }
};

export default Session;