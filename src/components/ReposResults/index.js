import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Repo from './Repo';
import './style.scss';

const ReposResults = ({ results }) => (
  <div className="reposResults">
    <Card.Group itemsPerRow={3} stackable>
      {results.map((result) => (
        <Repo
          key={result.id}
          {...result}
        />
      ))}
    </Card.Group>
  </div>
);

ReposResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReposResults;
