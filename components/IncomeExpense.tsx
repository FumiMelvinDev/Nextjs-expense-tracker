import getIncomeExpenseBalance from "@/app/actions/incomeExpenseBalances";
import { formatCurrency } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpenseBalance();

  return (
    <div className="flex items-center justify-between w-full sm:w-1/3 mx-auto">
      <div className="transaction-total">
        <h1>Income</h1>
        <p className="text-green-700 font-semibold">
          {formatCurrency(income ?? 0)}
        </p>
      </div>
      <div className="transaction-total">
        <h1>Expense</h1>
        <p className="text-red-700 font-semibold">
          {formatCurrency(expense ?? 0)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
