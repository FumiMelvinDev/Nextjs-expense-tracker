import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 space-y-4">
      <h1 className="text-4xl text-slate-700 font-bold">welcome</h1>
      <p className="text-slate-800">
        please sign in to manage your transactions
      </p>
      <div className="btn-signin">
        <SignInButton />
      </div>
    </div>
  );
};

export default Guest;
