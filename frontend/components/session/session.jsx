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

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        // this.setState({ ['email']: this.props.loginEmail })
        // this.setState({ ['password']: this.props.loginPassword })
        this.props.login(this.state)
        // this will be implemented later
        // .then(() => this.props.history.push('/questions'));
    }

    handleSignUpSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
    }

    render() {
        return (
            <div className="session-box">
                <div className="signup-form">
                    <h2>Sign Up!</h2>
                    <form>
                        <label>First Name:
                            <input
                                type="text"
                                value={this.state.fname}
                                onChange={this.handleInput('fname')}
                            />
                        </label>
                        <label>Last Name:
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
                        <button onClick={this.handleSignUpSubmit}>Sign Up</button>
                    </form>
                </div>
                <div className="login-form">
                    <h2>Log in!</h2>
                    <form>
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
                        <button onClick={this.handleLoginSubmit}>Log in</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default Session;