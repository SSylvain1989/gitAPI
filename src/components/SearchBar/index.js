import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './style.scss';

const SearchBar = ({
  inputValue,
  onChangeInputValue,
  onFormSubmit,
  onError,
}) => {
  const handleOnSubmit = () => {
    if (inputValue.trim().length === 0) {
      onError('taper une recherche');
      return;
    }

    if (inputValue.trim().length < 3) {
      onError('votre recherche doit comporter au moins 3 lettres');
      return;
    }

    onFormSubmit(inputValue);
  };

  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  return (
    <div className="searchBar">
      <Segment>
        <Form onSubmit={handleOnSubmit}>
          <Form.Input
            icon="search"
            iconPosition="left"
            placeholder="Rechercher..."
            value={inputValue}
            onChange={handleOnChange}
            // on peut faire la gestion du onChange directement dans le JSX
            // onChange={(event) => {
            //   onChangeInputValue(event.target.value);
            // }}
          />
        </Form>
      </Segment>
    </div>
  );
};

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default SearchBar;
