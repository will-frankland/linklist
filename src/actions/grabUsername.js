"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/db";
import { Page } from "@/models/page";
import { getServerSession } from "next-auth";

export const grabUsername = async (formData) => {
  await connectDB();
  const username = formData.get("username");

  const existingPageDoc = await Page.findOne({ uri: username });
  if (existingPageDoc) {
    return false;
  } else {
    const session = await getServerSession(authOptions);
    await Page.create({
      uri: username,
      owner: session?.user?.email,
    });
    return true
  }
};
