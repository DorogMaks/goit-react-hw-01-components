import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  width: 250px;
  padding: 8px 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px,
    rgb(0 0 0 / 16%) 1px 4px 6px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Status = styled.span`
  width: 14px;
  height: 14px;
  margin-right: 16px;
  padding: 4px;
  background-color: ${p => (p.status ? '#37ed2d' : '#ed4040')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 16px;
  background-color: rgb(240, 240, 240);
  border-radius: 6px;
  overflow: hidden;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: rgb(33, 33, 33);
`;
