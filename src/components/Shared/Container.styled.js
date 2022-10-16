import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding: 0px 15px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
