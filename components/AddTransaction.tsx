"use client";

import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";
import { useRef } from "react";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction added successfully");
      formRef.current?.reset();
    }
  };

  return (
    <>
      <div className="mt-10 border-2 border-[#191923] rounded-lg px-10 sm:px-20 py-6">
        <h1 className="text-center">Add New Transaction</h1>
        <form action={clientAction} ref={formRef} className="space-y-4  mt-4">
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Transaction Name
            </label>
            <div className="mt-2">
              <input
                id="description"
                name="description"
                type="text"
                required
                autoComplete="description"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Amount <br /> <small>negative - expense, positive - income</small>
            </label>
            <div className="mt-2">
              <input
                id="amount"
                name="amount"
                type="number"
                step={0.01}
                required
                autoComplete="amount"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              add transaction
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
