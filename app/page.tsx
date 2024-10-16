import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return Guest();
  }
  return (
    <main>
      <h1>expense tracker</h1>
    </main>
  );
};

export default HomePage;
