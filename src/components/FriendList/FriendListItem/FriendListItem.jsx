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
