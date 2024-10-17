import getBalance from "@/app/actions/balance";
import { formatCurrency } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getBalance();
  return (
    <>
      <h1>Your Balance</h1>
      <h3 className="text-xl text-slate-700 text-balance font-semibold">
        {formatCurrency(balance ?? 0)}
      </h3>
    </>
  );
};

export default Balance;
