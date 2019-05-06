import auth0 from 'auth0-js';
// require('dotenv').config();

const isBrowser = typeof window !== 'undefined';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: "graceshopper.auth0.com",
    clientID: "JVMUt6QCM6mWW0R0hRantgCwixzcdXzy",
    redirectUri: "http://localhost:3000/callback",
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    // this.scheduleRenewal()
  }

  login() {
    this.auth0.authorize();
    this.scheduleRenewal();
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user');
    clearTimeout(this.tokenRenewalTimeout);
    history.replace("/")
  }

  handleAuthentication() {
    if (typeof window !== 'undefined') {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          history.replace("/")
        } else if (err) {
          history.replace("/")
          console.log(err);
        }
      });
    }
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
      if(err) throw new Error(err);
      localStorage.setItem('user', JSON.stringify(user));
      history.replace('/');
    })
  }

  getUser() {
    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser().name;
    }
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }
}

export default Auth;
