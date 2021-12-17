import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({
  imageUrl,
  title,
  login,
  description,
  url,
}) => (
  <Card className="repo">
    <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <a href={url} target="_blank" rel="noreferrer">
        <button className="ui right labeled icon button" type="button">
          <i className="alternate github icon" />
          Go to repo
        </button>
      </a>
      <br />
      <Card.Meta>
        <br />
        <span>{login}</span>
      </Card.Meta>
      <Card.Description>
        <br />
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Repo;
