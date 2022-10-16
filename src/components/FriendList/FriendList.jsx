import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem/FriendListItem';

import { List } from './FriendList.styled';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <Container>
        <List>
          {friends.map(friend => {
            return <FriendListItem key={friend.id} friend={friend} />;
          })}
        </List>
      </Container>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
