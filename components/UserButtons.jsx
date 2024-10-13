import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export async function UserButtons() {
  const user = await currentUser();

  if (user?.emailAddresses[0].emailAddress)
    return (
      <div className="px-4 flex items-center gap-2">
        <UserButton />
        <p>{user.emailAddresses[0].emailAddress}</p>
      </div>
    );

  return (
    <>
      <Link href={"/sign-in"} className="btn btn-primary btn-sm">
        Sign In
      </Link>
      <Link href={"/sign-up"} className="btn btn-neutral btn-primary btn-sm">
        Register
      </Link>
    </>
  );
}
