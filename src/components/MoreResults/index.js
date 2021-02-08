import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

const MoreResult = ({ onClick }) => (
  <Segment>
    <Button fluid onClick={onClick}>Voir plus de résultats</Button>
  </Segment>
);

MoreResult.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MoreResult;
