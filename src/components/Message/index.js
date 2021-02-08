import React from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

const Message = ({ message }) => (
  <div className="message">
    <MessageSUI>
      <p>{message}</p>
    </MessageSUI>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
