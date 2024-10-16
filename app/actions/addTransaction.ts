"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  description: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const descriptionValue = formData.get("description");
  const amountValue = formData.get("amount");

  if (!descriptionValue || descriptionValue === "" || !amountValue) {
    return { error: "All fields are required" };
  }

  const description = descriptionValue.toString();
  const amount = parseFloat(amountValue.toString());

  //   Get logged in user
  const { userId } = auth();

  if (!userId) {
    return { error: "User not logged in" };
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        description,
        amount,
        userId,
      },
    });

    revalidatePath("/");

    return { data: transactionData };
  } catch (error) {
    return { error: "Failed to add transaction" };
  }
}

export default addTransaction;
