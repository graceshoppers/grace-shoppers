import React, {Component} from 'react';
import {addUser} from '../redux-store/actions/user-actions';
import {connect} from 'react-redux';
import {isAuthenticated} from '../auth';
import Login from './LoginButton';
import Logout from './LogoutButton';

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user)),
  };
};

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange({target}) {
    //Some stuff to happen here
    this.setState({
      [target.name]: target.value,
    });
    console.log(this.state);
  }
  onSubmit(ev) {
    //Some stuff to happen here
    ev.preventDefault();
    this.props.addUser(this.state);
  }
  render() {
    return (
      <div style={{height: '100vh', backgroundColor: 'blue'}}>
        <div className="card container" style={{marginTop: '30px'}}>
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  value={this.state.firstName}
                  name="firstName"
                  placeholder="John"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  className="form-control"
                  value={this.state.lastName}
                  name="lastName"
                  placeholder="Doe"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  value={this.state.email}
                  name="email"
                  placeholder="email@gmail.com"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control mb-3"
                  value={this.state.password}
                  name="password"
                  placeholder="maryh4dAL1ttl3L4M.B"
                  onChange={this.onChange}
                  type="password"
                />
                <button type="submit" className="btn btn-warning">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
