import getBalance from "@/app/actions/balance";
import { formatCurrency } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getBalance();
  return (
    <>
      <h1 className="">
        Balance
        <span className="text-slate-700 text-balance pl-4">
          {formatCurrency(balance ?? 0)}
        </span>
      </h1>
    </>
  );
};

export default Balance;
