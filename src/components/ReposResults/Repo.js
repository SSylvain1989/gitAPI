import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({
  imageUrl,
  title,
  login,
  description,
}) => (
  <Card className="repo">
    <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span>{login}</span>
      </Card.Meta>
      <Card.Description>
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
};

export default Repo;
