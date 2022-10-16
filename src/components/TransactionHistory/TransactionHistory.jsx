import PropTypes from 'prop-types';

import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import {
  Table,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Container>
        <Table>
          <TableHead>
            <tr>
              <TableHeader>Type</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Currency</TableHeader>
            </tr>
          </TableHead>

          <tbody>
            {items.map(({ id, type, amount, currency }) => {
              return (
                <TableRow key={id}>
                  <TableData>{type}</TableData>
                  <TableData>{amount}</TableData>
                  <TableData>{currency}</TableData>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
