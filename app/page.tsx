import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import IncomeExpense from "@/components/IncomeExpense";
import Transactions from "@/components/Transactions";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return Guest();
  }
  return (
    <main className="flex flex-col justify-center py-6 px-12 space-y-4">
      <h1>Welcome, {user.firstName}</h1>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <Transactions />
    </main>
  );
};

export default HomePage;
