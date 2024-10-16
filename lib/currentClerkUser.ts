import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const getCurrentUser = async () => {
  const user = await currentUser();
  console.log(user);

  // Check if user is logged in
  if (!user) {
    return null;
  }

  // Check if user is in the database
  const loggedInUser = await db.user.findUnique({
    where: { clerkID: user.id },
  });

  // If user is database, return user
  if (loggedInUser) {
    return loggedInUser;
  }

  // If user is not in the database, create user
  const newUser = await db.user.create({
    data: {
      clerkID: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
