import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  min-width: 250px;
  max-width: 600px;
  border-collapse: collapse;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 1px, rgb(0 0 0 / 6%) 0px 4px 4px,
    rgb(0 0 0 / 16%) 1px 4px 6px;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background-color: rgb(50, 202, 229);
`;

export const TableHeader = styled.th`
  width: calc(33.3333%);
  padding: 8px;

  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
`;

export const TableRow = styled.tr`
  background-color: rgb(255, 255, 255);
  :nth-of-type(2n) {
    background-color: rgb(235, 235, 235);
  }
`;

export const TableData = styled.td`
  width: calc(33.3333%);
  padding: 8px;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: rgb(110, 110, 110);
  border: 1px solid rgb(204, 204, 204);
`;
