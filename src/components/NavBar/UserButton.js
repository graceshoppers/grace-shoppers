import React from 'react';
import {connect} from 'react-redux';

const UserButton = props => {
  const {goTo} = props;
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <button className="btn" onClick={() => goTo('/profile')}>
          <i className="fas fa-user-check fa-lg" />
        </button>
      ) : (
        <button className="btn" onClick={() => goTo('/login')}>
          <i className="fas fa-user-circle fa-lg" />
        </button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  goTo: urlExtension => ownProps.history.push(urlExtension),
});

export default connect(
  null,
  mapDispatchToProps
)(UserButton);
