import React, {Component} from 'react';


class Login extends Component {
  render(){
    return (
      <div className="container col-sm-6" style={{marginTop: '17%'}}>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control"/>
          </div>
        </form>
      </div>
    )
  }
};

export default Login;
