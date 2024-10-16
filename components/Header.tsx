import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { getCurrentUser } from "@/lib/currentClerkUser";

const Header = async () => {
  const user = await getCurrentUser();
  return (
    <nav className="bg-[#191923] text-[#D4FCC3] flex justify-between items-center py-4 px-8 md:px-16">
      <h1 className="text-3xl md:text-5xl text-[#D4FCC3]">Expense Tracker</h1>
      <div className="flex items-center">
        <SignedOut>
          <div className="btn-signin">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: { width: "40px", height: "40px" },
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
