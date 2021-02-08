import React from 'react';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// ici loading va jouer l'interrupteur/ switch , si c'est vrai le loader est affiché & inversement si c'est faux
const Spinner = ({ loading }) => (
  <div className="spinner">

    <Loader active={loading} />
  </div>
);

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinner;
