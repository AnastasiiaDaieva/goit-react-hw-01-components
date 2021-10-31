import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import s from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.header}>
        <tr>
          <th className={s.headerItem}>Type</th>
          <th className={s.headerItem}>Amount</th>
          <th className={s.headerItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
