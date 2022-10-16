import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { Table, TableData, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = ({ id, type, amount, currency }) => {
  return (
    <Section>
      <Container>
        <Table>
          <thead>
            <tr>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Currency</TableHead>
            </tr>
          </thead>

          <tbody>
            <tr>
              <TableData>Invoice</TableData>
              <TableData>125</TableData>
              <TableData>USD</TableData>
            </tr>
            <tr>
              <TableData>Withdrawal</TableData>
              <TableData>85</TableData>
              <TableData>USD</TableData>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};
