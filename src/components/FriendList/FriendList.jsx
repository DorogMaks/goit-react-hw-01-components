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
