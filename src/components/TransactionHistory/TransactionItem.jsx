import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';
function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr key={id}>
      <td className={s.cell}>{type}</td>
      <td className={s.cell}>{amount}</td>
      <td className={s.cell}>{currency}</td>
    </tr>
  );
}

TransactionItem.defaultProps = {
  type: '-',
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
