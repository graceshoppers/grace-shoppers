import React, {Component} from 'react';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  onChange = ({target}) => {
    //Some stuff to happen here
    this.setState({
      [target.name]: target.value
    });
  };
  onSubmit = () => {
    //Some stuff to happen here
  };
  render(){
    return (
      <div style={{height: '100vh', backgroundColor: 'blue'}}>
        <div className="card container">
          <div>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control" value={this.state.email} name="email" placeholder="email@gmail.com"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input className="form-control mb-3" value={this.state.password} name="password" placeholder="maryh4dAL1ttl3L4M.B"/>
                <button type="submit" className="btn btn-warning">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default Login;
