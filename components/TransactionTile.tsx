import { formatCurrency } from "@/lib/utils";
import { Transaction } from "@/types/Transaction";

const TransactionTile = ({ transaction }: { transaction: Transaction }) => {
  return (
    <li className="flex items-center justify-between capitalize text-[#F7F9F9] font-medium bg-[#171738] py-2 px-4 rounded-lg border-2 border-[#684678]">
      <p>{transaction.description}</p>
      <p>{formatCurrency(Math.abs(transaction.amount))}</p>
    </li>
  );
};

export default TransactionTile;
