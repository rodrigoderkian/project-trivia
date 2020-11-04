import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Trivia extends React.Component {
  render() {
    const { userEmail, avatar, name } = this.props;

    return (
      <div className="trivia">
        Trivia Started! Email:
        {' '}
        { userEmail }
        { avatar }
        { name }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userEmail: state.user.email,
    avatar: state.user.avatar,
    name: state.user.name,
  };
}

export default connect(mapStateToProps, null)(Trivia);

Trivia.propTypes = {
  userEmail: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};