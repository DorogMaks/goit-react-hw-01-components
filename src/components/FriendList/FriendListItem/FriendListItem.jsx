import PropTypes from 'prop-types';

import { Avatar, ListItem, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="80" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
