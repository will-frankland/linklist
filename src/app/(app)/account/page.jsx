import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import UsernameForm from "@/components/forms/UsernameForm";
import connectDB from "@/lib/db";
import { Page } from "@/models/page";

const AccountPage = async ({ searchParams }) => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const desiredUsername = searchParams?.desiredUsername;

  if (!session) {
    return redirect("/");
  }
  const page = await Page.findOne({ owner: session?.user?.email });

  if (page) {
    return <div>Your page is: /{page.uri}</div>;
  }

  return (
    <div>
      <UsernameForm desiredUsername={desiredUsername} />
    </div>
  );
};

export default AccountPage;
