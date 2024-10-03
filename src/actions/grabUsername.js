"use server";
import { Page } from "@/models/page";
import mongoose from "mongoose";

export const grabUsername = async (formData) => {
  const username = formData.get("username");
  mongoose.connect(process.env.MONGO_URI);
  
  const existingPageDoc = await Page.findOne({ uri: username });
  if (existingPageDoc) {
    return false;
  } else {
    return await Page.create({ uri: username });
  }
};
