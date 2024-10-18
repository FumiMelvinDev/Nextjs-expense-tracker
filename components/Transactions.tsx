import getTransactions from "@/app/actions/transactions";
import { Transaction } from "@/types/Transaction";
import TransactionTile from "./TransactionTile";

const Transactions = async () => {
  const { transactions, error } = await getTransactions();
  return (
    <div className="">
      <h1>Transactions</h1>
      <ul className="space-y-2 mt-4">
        {transactions &&
          transactions.map((transaction: Transaction) => (
            <TransactionTile key={transaction.id} transaction={transaction} />
          ))}
      </ul>
    </div>
  );
};

export default Transactions;
